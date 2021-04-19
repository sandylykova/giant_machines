const router = require('express').Router();
const {Project} = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const result = await Project.findAll({
      attributes: ['client', 'project', 'hours', 'billable', 'billable_rate'],
    });
    const map = new Map();
    for (let val of result) {
      if (!map.has(val.project)) map.set(val.project, []);
      map.get(val.project).push([val.client, val.hours, val.billable, val.billable_rate]);
    }
    let projects = [];
    for (let [key, values] of map) {
      let hours = 0, billableHours = 0, billableAmount = 0, notBillableHours = 0;
      let client = values[0][0];
      for (let value of values) {
        hours += Number(value[1]);
        billableAmount += Number(value[3]);
        if (value[2] === 'No') notBillableHours += Number(value[1]);
        else {
          billableHours += Number(value[1]);
        }
      }
      billableAmount = billableAmount.toLocaleString();
      hours = hours.toFixed(2);
      billableHours = billableHours.toFixed(2);
      notBillableHours = notBillableHours.toFixed(2);
      let percent = "(100%)";
      if (notBillableHours > 0.00) {
        let billablePercent = Math.floor(billableHours * 100 / hours);
        percent = `(${billablePercent}%)`;
      }
      projects.push({
        name: key,
        hours,
        client,
        billableHours,
        billableAmount: `$${billableAmount}.00`,
        notBillableHours,
        percent
      })
    }
    res.json(projects)
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body);
    res.json(newProject);
  } catch (error) {
    next(error);
  }
});
