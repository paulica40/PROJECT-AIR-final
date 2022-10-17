const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class CursuriDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const cursuri = await db.cursuri.create(
      {
        id: data.id || undefined,

        Nume: data.Nume || null,
        Tip: data.Tip || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return cursuri;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const cursuri = await db.cursuri.findByPk(id, {
      transaction,
    });

    await cursuri.update(
      {
        Nume: data.Nume || null,
        Tip: data.Tip || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return cursuri;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const cursuri = await db.cursuri.findByPk(id, options);

    await cursuri.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await cursuri.destroy({
      transaction,
    });

    return cursuri;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const cursuri = await db.cursuri.findOne({ where }, { transaction });

    if (!cursuri) {
      return cursuri;
    }

    const output = cursuri.get({ plain: true });

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
          [Op.and]: Utils.ilike('cursuri', 'Nume', filter.Nume),
        };
      }

      if (filter.Tip) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('cursuri', 'Tip', filter.Tip),
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

    let { rows, count } = await db.cursuri.findAndCountAll({
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
          Utils.ilike('cursuri', 'Nume', query),
        ],
      };
    }

    const records = await db.cursuri.findAll({
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
