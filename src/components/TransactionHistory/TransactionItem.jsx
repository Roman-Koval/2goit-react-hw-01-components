import PropTypes from 'prop-types';
import { TableData } from './Transactions.styled';

const transactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </tr>
  );
};

transactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default transactionItem;