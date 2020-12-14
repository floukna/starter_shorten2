'use strict';
module.exports = {
  up: (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable('urls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      urlCode: {
        type: Sequelize.STRING
      },
      longURL: {
        type: Sequelize.STRING
      },
      shortUrl: {
        type: Sequelize.STRING
      },
      clickCount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface: any, Sequelize: any) => {
    return queryInterface.dropTable('urls');
  }
};
