const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class IndicatoriDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const indicatori = await db.indicatori.create(
      {
        id: data.id || undefined,

        Nume: data.Nume || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return indicatori;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const indicatori = await db.indicatori.findByPk(id, {
      transaction,
    });

    await indicatori.update(
      {
        Nume: data.Nume || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return indicatori;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const indicatori = await db.indicatori.findByPk(id, options);

    await indicatori.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await indicatori.destroy({
      transaction,
    });

    return indicatori;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const indicatori = await db.indicatori.findOne({ where }, { transaction });

    if (!indicatori) {
      return indicatori;
    }

    const output = indicatori.get({ plain: true });

    return output;
  }

  static async findAll(filter, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    if (filter.page != 1 && filter.page) {
      const currentPage = +filter.page - 1;
      offset = currentPage * limit;
    }
    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.Nume) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('indicatori', 'Nume', filter.Nume),
        };
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = await db.indicatori.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy ? [orderBy.split('_')] : [['createdAt', 'DESC']],
      transaction,
    });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('indicatori', 'Nume', query),
        ],
      };
    }

    const records = await db.indicatori.findAll({
      attributes: ['id', 'Nume'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['Nume', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.Nume,
    }));
  }
};
