module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define(
    'Branch',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { tableName: 'branches', underscored: true }
  );

  Branch.associate = (models) => {
    Branch.hasMany(models.Account, {
      foreignKey: {
        name: 'branchId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    Branch.belongsToMany(models.Customer, {
      through: 'accounts',
      foreignKey: { name: 'branchId' },
      otherKey: { name: 'customerId' },
    });
  };

  return Branch;
};
