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
        <li key={idx}>
          <DonationForm
            sendDonation={this.props.sendDonation}
            name={donation.name}
            charityname={donation.charityname}
            amount={donation.amount}
          />
        </li>
      );
    });
    return (
      <ul id="donation-elements">
        {donationElements}
      </ul>
    );
  }
}

DonationList.propTypes = propTypes;

export default DonationList;


// import React from 'react';
// import BillPost from './BillPost.jsx';

// const propTypes = {
//   billPosts: React.PropTypes.array,
//   handlePosting: React.PropTypes.func,
//   handleRemove: React.PropTypes.func,
//   calculateTotal: React.PropTypes.func,
// };

// class BillList extends React.Component {
//   render() {
//     const billElements = this.props.billPosts.map((billPost, idx) => {
//       return (
//         <li key={idx}>
//           <BillPost
//             handleRemove={this.props.handleRemove}
//             handlePosting={this.props.handlePosting}
//             amount={billPost.amount}
//             description={billPost.description}
//             dueDate={billPost.dueDate}
//             id={billPost.id}
//           />
//         </li>
//       );
//     });
//     return (
//       <ul id="bill-elements">
//         {billElements}
//       </ul>
//     );
//   }
// }

// BillList.propTypes = propTypes;

// export default BillList;
