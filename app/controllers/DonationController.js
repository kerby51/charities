const DonationDAO = require('../services/DonationDAO');

class DonationController {
  static getAll(req, res) {
    DonationDAO.all()
               .then((donations) => {
                 res.status(200).json(donations);
               });
  }
  static create(req, res) {
    const donationData = {
      name: req.body.name,
      charityName: req.body.charityName,
      amount: req.body.amount,
    };
    DonationDAO.create(donationData)
               .then((donation) => res.status(200).json(donation));
  }
}

module.exports = DonationController;

