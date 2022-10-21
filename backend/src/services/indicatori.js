const db = require('../db/models');
const IndicatoriDBApi = require('../db/api/indicatori');

module.exports = class IndicatoriService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await IndicatoriDBApi.create(data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
  static async update(data, id, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      let indicatori = await IndicatoriDBApi.findBy({ id }, { transaction });

      if (!indicatori) {
        throw new ValidationError('indicatoriNotFound');
      }

      await IndicatoriDBApi.update(id, data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
      return indicatori;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  static async remove(id, currentUser) {
    const transaction = await db.sequelize.transaction();

    try {
      if (currentUser.role !== 'admin') {
        throw new ValidationError('errors.forbidden.message');
      }

      await IndicatoriDBApi.remove(id, {
        currentUser,
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
