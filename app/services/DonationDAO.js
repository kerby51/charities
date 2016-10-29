const db = require('../config/db');
const sql = require('../config/sqlProvider').donations;
const Donation = require('../models/Donation');

class DonationDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Donation(row));
  }
  static create({ name, charity, amount }) {
    return db.one(sql.create, [name, charity, amount])
             .then((data) => new Donation(data));
  }
}

module.exports = DonationDAO;









