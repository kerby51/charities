import React from 'react';
import DonationForm from './DonationForm.jsx';

const propTypes = {
  donations: React.PropTypes.array,
  sendDonation: React.PropTypes.func,
};

class DonationList extends React.Component {
  render() {
    const donationElements = this.props.donations.map((donation, idx) => {
      return (
        <div key={idx} className="donation-box">

            <p className="donation-elements" id="amount">${donation.amount} - <span id="charityName">{donation.charity}</span></p>
            <p className="donation-elements" id="person">{donation.name}</p>


        </div>
      );
    });
    return (
      <div>
        <h3 className="donations-header">DONATIONS</h3>
        <ul className="donation-list">
          {donationElements.reverse()}
        </ul>
      </div>
    );
  }
}

DonationList.propTypes = propTypes;

export default DonationList;


