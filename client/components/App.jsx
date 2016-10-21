import React from 'react';
import request from 'superagent';
import DonationForm from './DonationForm.jsx';


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
  sendDonation({ name, charityName, amount }) {
    request.post('/api/donations')
           .send({ name, charityName, amount })
           .then(() => {
             this.getDonations();
           });
  }
  render() {
    return (
      <div id="container">
        <h1>WELCOME</h1>
        <DonationForm sendDonation={this.sendDonation} />

      </div>
    );
  }
}

export default App;
