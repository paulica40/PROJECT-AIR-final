module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async up(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'users',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'firstName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'lastName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'phoneNumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'email',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'role',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['admin', 'user'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'disabled',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'password',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerified',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerificationToken',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerificationTokenExpiresAt',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'passwordResetToken',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'passwordResetTokenExpiresAt',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'provider',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.createTable(
        'participanti',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Nume',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Prenume',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.createTable(
        'indicatori',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'indicatori',
        'Nume',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'indicatori',
        'Tip',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Varsta',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Telefon',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'email',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Cnp',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Gen',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Barbati', 'Femei'],
        },
        { transaction },
      );
      await queryInterface.addColumn(
        'participanti',
        'Gen',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Barbati', 'Femei'],
        },
        { transaction },
      );
      await queryInterface.addColumn(
        'participanti',
        'Partener',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['INCEPTUS', 'P-CCIBN'],
        },
        { transaction },
      );


      await queryInterface.addColumn(
        'participanti',
        'Nationalitate',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Judet',
        {
          type: Sequelize.DataTypes.ENUM,

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
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Adresa',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Domiciliul',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Urban', 'Rural'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Companie',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Domeniu',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'Statut',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Angajat', 'PFA'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'ISCED',
        {
          type: Sequelize.DataTypes.ENUM,

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
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'INTRARE',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'IESIRE',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'ELIGIBILITATE',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'EXPERTId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'users',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'BFA',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'participanti',
        'CONSILIERE',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.createTable(
        'cursuri',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'cursuri',
        'Nume',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'cursuri',
        'Tip',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async down(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('cursuri', 'Tip', { transaction });

      await queryInterface.removeColumn('cursuri', 'Nume', { transaction });

      await queryInterface.dropTable('cursuri', { transaction });

      await queryInterface.removeColumn('participanti', 'CONSILIERE', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'BFA', { transaction });

      await queryInterface.removeColumn('participanti', 'EXPERTId', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'ELIGIBILITATE', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'IESIRE', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'INTRARE', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'ISCED', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Statut', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Domeniu', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Companie', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Domiciliul', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Adresa', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Judet', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Nationalitate', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Gen', { transaction });

      await queryInterface.removeColumn('participanti', 'Cnp', { transaction });

      await queryInterface.removeColumn('participanti', 'email', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Telefon', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Varsta', {
        transaction,
      });

      await queryInterface.removeColumn('indicatori', 'Tip', { transaction });

      await queryInterface.removeColumn('indicatori', 'Nume', { transaction });

      await queryInterface.dropTable('indicatori', { transaction });

      await queryInterface.removeColumn('participanti', 'Prenume', {
        transaction,
      });

      await queryInterface.removeColumn('participanti', 'Nume', {
        transaction,
      });

      await queryInterface.dropTable('participanti', { transaction });

      await queryInterface.removeColumn('users', 'provider', { transaction });

      await queryInterface.removeColumn(
        'users',
        'passwordResetTokenExpiresAt',
        { transaction },
      );

      await queryInterface.removeColumn('users', 'passwordResetToken', {
        transaction,
      });

      await queryInterface.removeColumn(
        'users',
        'emailVerificationTokenExpiresAt',
        { transaction },
      );

      await queryInterface.removeColumn('users', 'emailVerificationToken', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'emailVerified', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'password', { transaction });

      await queryInterface.removeColumn('users', 'disabled', { transaction });

      await queryInterface.removeColumn('users', 'role', { transaction });

      await queryInterface.removeColumn('users', 'email', { transaction });

      await queryInterface.removeColumn('users', 'phoneNumber', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'lastName', { transaction });

      await queryInterface.removeColumn('users', 'firstName', { transaction });

      await queryInterface.dropTable('users', { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
