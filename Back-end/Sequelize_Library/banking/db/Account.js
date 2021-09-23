module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Account',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      openDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      closeDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      balance: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
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
    Account.hasMany(models.Transfer, {
      as: 'TransferTos',
      foreignKey: {
        name: 'toAccountId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Account.hasMany(models.Transfer, {
      as: 'TransferFroms',
      foreignKey: {
        name: 'fromAccountId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Account;
};
