const Sequelize = require('sequelize');

module.exports = (sequelize, Datatypes) => {
  const model = sequelize.define(
    'Todo',
    {
      id: {
        type: Datatypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      list: {
        type: Datatypes.STRING(255),
      },
      completed: {
        type: Datatypes.BOOLEAN,
      },
      dueDate: {
        type: Datatypes.DATE,
      },
    },
    { tableName: 'todolists', timestamps: false }
  );

  return model;
};
