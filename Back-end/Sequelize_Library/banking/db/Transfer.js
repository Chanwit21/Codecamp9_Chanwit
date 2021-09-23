module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define(
    'Transafer',
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  Transfer.associate = (models) => {
    Transfer.belongsTo(models.Account, {
      as: 'ToAccount',
      foreignKey: {
        name: 'toAccountId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Transfer.belongsTo(models.Account, {
      as: 'FromAccount',
      foreignKey: {
        name: 'fromAccountId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Transfer;
};
