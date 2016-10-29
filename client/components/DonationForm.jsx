import React from 'react';

const propTypes = {
  sendDonation: React.PropTypes.func,
  name: React.PropTypes.string,
  charity: React.PropTypes.string,
  amount: React.PropTypes.number,
};

class DonationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localName: this.props.name || '',
      localCharity: this.props.charity || '',
      localAmount: this.props.amount || '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localName: nextProps.name || '',
      localCharity: nextProps.charity || '',
      localAmount: nextProps.amount || '',
    });
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
    console.log('working');
    this.props.sendDonation({
      name: this.state.localName,
      charity: this.state.localCharity,
      amount: this.state.localAmount,
    });
    this.setState({ saved: true });
  }
  isSaved() {
    return this.props.name === this.state.localName &&
          this.props.charity === this.state.localCharity &&
          this.props.amount === this.state.localAmount;
  }
  render() {
    return (
      <div>
        <form className="donation-form" onSubmit={this.handleSubmit}>
          <input
            className="form-name"
            type="text"
            name="localName"
            value={this.state.localName}
            placeholder="your name"
            onChange={this.handleInput}
          />
          <input
            className="form-charity"
            type="text"
            name="localCharity"
            value={this.state.localCharity}
            placeholder="charity of choice"
            onChange={this.handleInput}
          />
          <input
            className="form-amount"
            type="number"
            name="localAmount"
            value={this.state.localAmount}
            placeholder="donation amount"
            onChange={this.handleInput}
          />
          <button className="button" type="submit" value="DONATE!">
            SIGN-UP TO DONATE!
          </button>
        </form>
      </div>
    );
  }
}

DonationForm.propTypes = propTypes;

export default DonationForm;


