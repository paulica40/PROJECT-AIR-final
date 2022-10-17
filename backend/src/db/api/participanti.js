const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class ParticipantiDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const participanti = await db.participanti.create(
      {
        id: data.id || undefined,
        Partener: data.Partener || null,
        Nume: data.Nume || null,
        Prenume: data.Prenume || null,
        Varsta: data.Varsta || null,
        Telefon: data.Telefon || null,
        email: data.email || null,
        Cnp: data.Cnp || null,
        Gen: data.Gen || null,
        Nationalitate: data.Nationalitate || null,
        Judet: data.Judet || null,
        Adresa: data.Adresa || null,
        Domiciliul: data.Domiciliul || null,
        Companie: data.Companie || null,
        Domeniu: data.Domeniu || null,
        Functie: data.Functie || null,
        Statut: data.Statut || null,
        ISCED: data.ISCED || null,
        INTRARE: data.INTRARE || null,
        IESIRE: data.IESIRE || null,
        ELIGIBILITATE: data.ELIGIBILITATE || null,
        BFA: data.BFA || null,
        CONSILIERE: data.CONSILIERE || null,
        Pocu: data.Pocu || null,
        Status: data.Status || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await participanti.setEXPERT(data.EXPERT || null, {
      transaction,
    });

    await participanti.setINDICATORI(data.INDICATORI || [], {
      transaction,
    });

    await participanti.setCursuri(data.Cursuri || [], {
      transaction,
    });

    return participanti;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const participanti = await db.participanti.findByPk(id, {
      transaction,
    });

    await participanti.update(
      {
        id: data.id || undefined,
        Partener: data.Partener || null,
        Nume: data.Nume || null,
        Prenume: data.Prenume || null,
        Varsta: data.Varsta || null,
        Telefon: data.Telefon || null,
        email: data.email || null,
        Cnp: data.Cnp || null,
        Gen: data.Gen || null,
        Nationalitate: data.Nationalitate || null,
        Judet: data.Judet || null,
        Adresa: data.Adresa || null,
        Domiciliul: data.Domiciliul || null,
        Companie: data.Companie || null,
        Domeniu: data.Domeniu || null,
        Functie: data.Functie || null,
        Statut: data.Statut || null,
        ISCED: data.ISCED || null,
        INTRARE: data.INTRARE || null,
        IESIRE: data.IESIRE || null,
        ELIGIBILITATE: data.ELIGIBILITATE || null,
        BFA: data.BFA || null,
        CONSILIERE: data.CONSILIERE || null,
        Pocu: data.Pocu || null,
        Status: data.Status || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await participanti.setEXPERT(data.EXPERT || null, {
      transaction,
    });

    await participanti.setINDICATORI(data.INDICATORI || [], {
      transaction,
    });

    await participanti.setCursuri(data.Cursuri || [], {
      transaction,
    });

    return participanti;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const participanti = await db.participanti.findByPk(id, options);

    await participanti.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await participanti.destroy({
      transaction,
    });

    return participanti;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const participanti = await db.participanti.findOne(
      { where },
      { transaction },
    );

    if (!participanti) {
      return participanti;
    }

    const output = participanti.get({ plain: true });

    output.INDICATORI = await participanti.getINDICATORI({
      transaction,
    });

    output.EXPERT = await participanti.getEXPERT({
      transaction,
    });

    output.Cursuri = await participanti.getCursuri({
      transaction,
    });

    return output;
  }

  static async findAll(filter, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.users,
        as: 'EXPERT',
      },

      {
        model: db.indicatori,
        as: 'INDICATORI',
        through: filter.INDICATORI
          ? {
              where: {
                [Op.or]: filter.INDICATORI.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.INDICATORI ? true : null,
      },

      {
        model: db.cursuri,
        as: 'Cursuri',
        through: filter.Cursuri
          ? {
              where: {
                [Op.or]: filter.Cursuri.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.Cursuri ? true : null,
      },
    ];

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
          [Op.and]: Utils.ilike('participanti', 'Nume', filter.Nume),
        };
      }

      if (filter.Prenume) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('participanti', 'Prenume', filter.Prenume),
        };
      }

      if (filter.email) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('participanti', 'email', filter.email),
        };
      }

      if (filter.Nationalitate) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'participanti',
            'Nationalitate',
            filter.Nationalitate,
          ),
        };
      }

      if (filter.Adresa) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('participanti', 'Adresa', filter.Adresa),
        };
      }

      if (filter.Companie) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('participanti', 'Companie', filter.Companie),
        };
      }

      if (filter.Domeniu) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('participanti', 'Domeniu', filter.Domeniu),
        };
      }

      if (filter.VarstaRange) {
        const [start, end] = filter.VarstaRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            Varsta: {
              ...where.Varsta,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            Varsta: {
              ...where.Varsta,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.TelefonRange) {
        const [start, end] = filter.TelefonRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            Telefon: {
              ...where.Telefon,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            Telefon: {
              ...where.Telefon,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.CnpRange) {
        const [start, end] = filter.CnpRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            Cnp: {
              ...where.Cnp,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            Cnp: {
              ...where.Cnp,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.INTRARERange) {
        const [start, end] = filter.INTRARERange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            INTRARE: {
              ...where.INTRARE,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            INTRARE: {
              ...where.INTRARE,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.IESIRERange) {
        const [start, end] = filter.IESIRERange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            IESIRE: {
              ...where.IESIRE,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            IESIRE: {
              ...where.IESIRE,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.ELIGIBILITATERange) {
        const [start, end] = filter.ELIGIBILITATERange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ELIGIBILITATE: {
              ...where.ELIGIBILITATE,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ELIGIBILITATE: {
              ...where.ELIGIBILITATE,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.BFARange) {
        const [start, end] = filter.BFARange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            BFA: {
              ...where.BFA,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            BFA: {
              ...where.BFA,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.CONSILIERERange) {
        const [start, end] = filter.CONSILIERERange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            CONSILIERE: {
              ...where.CONSILIERE,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            CONSILIERE: {
              ...where.CONSILIERE,
              [Op.lte]: end,
            },
          };
        }
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

      if (filter.Gen) {
        where = {
          ...where,
          Gen: filter.Gen,
        };
      }

      if (filter.Partener) {
        where = {
          ...where,
          Partener: filter.Partener,
        };
      }

      if (filter.Judet) {
        where = {
          ...where,
          Judet: filter.Judet,
        };
      }

      if (filter.Domiciliul) {
        where = {
          ...where,
          Domiciliul: filter.Domiciliul,
        };
      }

      if (filter.Statut) {
        where = {
          ...where,
          Statut: filter.Statut,
        };
      }
      if (filter.Status) {
        where = {
          ...where,
          Status: filter.Status,
        };
      }

      if (filter.ISCED) {
        where = {
          ...where,
          ISCED: filter.ISCED,
        };
      }

      if (filter.Pocu) {
        where = {
          ...where,
                Pocu: filter.Pocu,
        };
      }
      if (filter.Partener) {
        where = {
          ...where,
          Partener: filter.Partener,
        };
      }
      if (filter.Cursuri) {
        where = {
          ...where,
          Cursuri: filter.Cursuri,
        };
      }
      if (filter.Functie) {
        where = {
          ...where,
          Functie: filter.Functie,
        };
      }

      if (filter.Status) {
        where = {
          ...where,
          Functie: filter.Status,
        };
      }

      if (filter.EXPERT) {
        var listItems = filter.EXPERT.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          EXPERTId: { [Op.or]: listItems },
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

    let { rows, count } = await db.participanti.findAndCountAll({
      where,
      include,
      
      order:
        filter.field && filter.sort
          ? [[filter.field, filter.sort]]
          : [['createdAt', 'desc']],
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
          Utils.ilike('participanti', 'Nume', query),
        ],
      };
    }

    const records = await db.participanti.findAll({
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
