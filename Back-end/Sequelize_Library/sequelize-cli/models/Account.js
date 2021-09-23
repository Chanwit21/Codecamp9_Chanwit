module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Account',
    {
      openDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      closeDate: DataTypes.DATEONLY,
      balance: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
        validate: {
          isNumeric: true,
          gteZero(value) {
            if (value < 0) {
              throw new Error('Must be positivy value');
            }
          },
        },
      },
      status: DataTypes.BOOLEAN,
    },
    { tableName: 'accounts', underscored: true }
  );

  Account.associate = (models) => {
    Account.belongsTo(models.Customer, {
      foreignKey: {
        name: 'customerId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Account.belongsTo(models.Branch, {
      foreignKey: {
        name: 'branchId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Account;
};
