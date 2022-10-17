const db = require('../db/models');
const ParticipantiDBApi = require('../db/api/participanti');

module.exports = class ParticipantiService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await ParticipantiDBApi.create(data, {
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
      let participanti = await ParticipantiDBApi.findBy(
        { id },
        { transaction },
      );

      if (!participanti) {
        throw new ValidationError('participantiNotFound');
      }

      await ParticipantiDBApi.update(id, data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
      return participanti;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  static async remove(id, currentUser) {
    const transaction = await db.sequelize.transaction();

    try {
      

      await ParticipantiDBApi.remove(id, {
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
