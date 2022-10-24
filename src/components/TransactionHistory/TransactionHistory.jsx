import PropTypes from 'prop-types';
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
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
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
  ).isRequired,
};
