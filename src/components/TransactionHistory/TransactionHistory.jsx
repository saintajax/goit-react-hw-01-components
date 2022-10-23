import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';
import {
  TransactionTable,
  TableHead,
  TableHeadRow,
  TableRow,
  TableBody,
  TableCell,
  TableHeadCell,
} from './TransactionsHistory.styled';
import { Box } from '../Box/Box';

export const TransactionHistory = ({ items }) => (
  <Box height="100%">
    <TransactionTable>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(transaction => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TransactionTable>
  </Box>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
