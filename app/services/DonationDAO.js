const db = require('../config/db');
const sql = require('../config/sqlProvider').donations;
const Donation = require('../models/Donation');

class DonationDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Donation(row));
  }
  static create({ name, charityName, amount }) {
    return db.one(sql.create, [name, charityName, amount])
             .then((data) => new Donation(data));
  }
}

module.exports = DonationDAO;









