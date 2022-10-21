const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const cursuri = sequelize.define(
    'cursuri',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      Nume: {
        type: DataTypes.TEXT,
      },

      Tip: {
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

  cursuri.associate = (db) => {
    db.cursuri.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.cursuri.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return cursuri;
};
