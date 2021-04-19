const Sequelize = require('sequelize');
const db = require('../db');

const Project = db.define('project', {
  date: {
    type: Sequelize.STRING,
  },
  client: {
    type: Sequelize.STRING,
  },
  project: {
    type: Sequelize.STRING,
  },
  project_code: {
    type: Sequelize.STRING,
  },
  hours: {
    type: Sequelize.STRING,
  },
  billable: {
    type: Sequelize.STRING,
  },
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  billable_rate: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: '2020-09-27'
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: '2020-09-27'
  }
});

module.exports = Project;
