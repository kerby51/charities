import React from 'react';

const propTypes = {
  sendDonation: React.PropTypes.func,
};

class DonationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      charityName: '',
      amount: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.sendDonation(this.state);
    this.setState({
      name: '',
      charityName: '',
      amount: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="your name"
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="charityName"
            value={this.state.charityName}
            placeholder="your charity of choice"
            onChange={this.handleInput}
          />
          <input
            type="number"
            name="amount"
            value={this.state.amount}
            placeholder="donation amount"
            onChange={this.handleInput}
          />
          <input type="submit" value="DONATE" />
        </form>
      </div>
    );
  }
}

DonationForm.propTypes = propTypes;

export default DonationForm;

