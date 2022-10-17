const db = require('../db/models');
const CursuriDBApi = require('../db/api/cursuri');

module.exports = class CursuriService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await CursuriDBApi.create(data, {
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
      let cursuri = await CursuriDBApi.findBy({ id }, { transaction });

      if (!cursuri) {
        throw new ValidationError('cursuriNotFound');
      }

      await CursuriDBApi.update(id, data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
      return cursuri;
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

      await CursuriDBApi.remove(id, {
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
