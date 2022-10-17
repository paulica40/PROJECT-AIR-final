const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const participanti = sequelize.define(
    'participanti',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Partener: {
        type: DataTypes.ENUM,

        values: ['INCEPTUS', 'P-CCIBN'],
      },
      Nume: {
        type: DataTypes.TEXT,
      },

      Prenume: {
        type: DataTypes.TEXT,
      },

      Varsta: {
        type: DataTypes.INTEGER,
      },

      Telefon: {
        type: DataTypes.INTEGER,
      },

      email: {
        type: DataTypes.TEXT,
      },

      Cnp: {
        type: DataTypes.BIGINT,
      },

      Gen: {
        type: DataTypes.ENUM,

        values: ['Barbati', 'Femei'],
      },

      Nationalitate: {
        type: DataTypes.TEXT,
      },

      Judet: {
        type: DataTypes.ENUM,

        values: [
          'Alba',

          'Bihor',

          'Bistrita-Nasaud',

          'Brasov',

          'Cluj',

          'Covsna',

          'Gorj',

          'Harghita',

          'Maramures',

          'Mehedinti',

          'Mures',

          'Olt',

          'Salaj',

          'Satu-Mare',

          'Sibiu',

          'Valcea',
        ],
      },

      Adresa: {
        type: DataTypes.TEXT,
      },

      Domiciliul: {
        type: DataTypes.ENUM,

        values: ['Urban', 'Rural'],
      },

      Companie: {
        type: DataTypes.TEXT,
      },

      Domeniu: {
        type: DataTypes.TEXT,
      },
      Functie: {
        type: DataTypes.TEXT,
      },
      
      Statut: {
        type: DataTypes.ENUM,

        values: ['Angajat', 'PFA'],
      },

      ISCED: {
        type: DataTypes.ENUM,

        values: [
          'ISCED 2',

          'ISCED 3',

          'ISCED 4',

          'ISCED 5',

          'ISCED 6',

          'ISCED 7',

          'ISCED 8',

          'ISCED 9',
        ],
      },

      INTRARE: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('INTRARE')
            ? moment.utc(this.getDataValue('INTRARE')).format('YYYY-MM-DD')
            : null;
        },
      },

      IESIRE: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('IESIRE')
            ? moment.utc(this.getDataValue('IESIRE')).format('YYYY-MM-DD')
            : null;
        },
      },

      ELIGIBILITATE: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('ELIGIBILITATE')
            ? moment
                .utc(this.getDataValue('ELIGIBILITATE'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      BFA: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('BFA')
            ? moment.utc(this.getDataValue('BFA')).format('YYYY-MM-DD')
            : null;
        },
      },

      CONSILIERE: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('CONSILIERE')
            ? moment.utc(this.getDataValue('CONSILIERE')).format('YYYY-MM-DD')
            : null;
        },
      },

    


      Pocu: {
        type: DataTypes.ENUM,

        values: ['DA', 'NU'],
      },




      Statut: {
        type: DataTypes.TEXT,
      },
      Status: {
        type: DataTypes.ENUM,

        values: ['Finalizare implicare proiect', 'Abandon','Alte motive'],
      },


      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  participanti.associate = (db) => {
    db.participanti.belongsToMany(db.indicatori, {
      as: 'INDICATORI',
      constraints: false,
      through: 'participantiINDICATORIIndicatori',
    });

    db.participanti.belongsToMany(db.cursuri, {
      as: 'Cursuri',
      constraints: false,
      through: 'participantiCursuriCursuri',
    });

    db.participanti.belongsTo(db.users, {
      as: 'EXPERT',
      constraints: false,
    });

    db.participanti.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.participanti.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return participanti;
};
