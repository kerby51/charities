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
        <form className="donation-form" onSubmit={this.handleSubmit}>
          <input
            className="form-name"
            type="text"
            name="name"
            value={this.state.name}
            placeholder="your name"
            onChange={this.handleInput}
          />
          <input
            className="form-charity"
            type="text"
            name="charityName"
            value={this.state.charityName}
            placeholder="charity of choice"
            onChange={this.handleInput}
          />
          <input
            className="form-amount"
            type="number"
            name="amount"
            value={this.state.amount}
            placeholder="donation amount"
            onChange={this.handleInput}
          />
          <input className="button" type="submit" value="DONATE" />
        </form>
      </div>
    );
  }
}

DonationForm.propTypes = propTypes;

export default DonationForm;

