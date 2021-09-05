import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from "./TransactionItem";
import { Table } from "./Transactions.styled";


const TransactionHistory = ({items}) => {
    return (
        <Table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
    
          <tbody>
            {items.map((item) => {
              return (
                <TransactionItem
                  key={item.id}
                  currency={item.currency}
                  type={item.type}
                  amount={item.amount}
                />
              );
            })}
          </tbody>
        </Table>
      );
    };

    TransactionHistory.propTypes = {
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
      };
      
      export default TransactionHistory;