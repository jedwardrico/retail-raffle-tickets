const db = require('../index');
const Ticket = require('./Ticket')
const Advisor = require('./Advisor')

Ticket.belongsTo(Advisor);
Advisor.hasMany(Ticket);

module.exports = {
  db,
  Advisor,
  Ticket
}