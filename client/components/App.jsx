import React from 'react';
import request from 'superagent';
import DonationForm from './DonationForm.jsx';
import DonationList from './DonationList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { donations: [] };
    this.sendDonation = this.sendDonation.bind(this);
  }
  componentDidMount() {
    this.getDonations();
  }
  getDonations() {
    request.get('/api/donations')
           .then((response) => {
             const donations = response.body;
             this.setState({ donations });
           });
  }
  sendDonation({ name, charity, amount }) {
    request.post('/api/donations')
           .send({ name, charity, amount })
           .then(() => {
             this.getDonations();
           });
  }
  render() {
    return (
      <div id="container">
        <div id="header">
          <h1>GoFundThem</h1>
          <h4>World's #2 Fundraising Site</h4>
        </div>
        <DonationForm sendDonation={this.sendDonation} />
        <DonationList donations={this.state.donations} />

      </div>
    );
  }
}

export default App;
