const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const indicatori = sequelize.define(
    'indicatori',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      Nume: {
        type: DataTypes.TEXT,
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

  indicatori.associate = (db) => {
    db.indicatori.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.indicatori.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return indicatori;
};
