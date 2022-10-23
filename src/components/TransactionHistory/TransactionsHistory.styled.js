import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 60%;
  height: 100%;
  text-align: center;
`;

export const TableHead = styled.thead`
  background-color: lightskyblue;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  text-transform: capitalize;
  font-size: 25px;
`;

export const TableHeadRow = styled.tr``;
export const TableHeadCell = styled.th``;

export const TableRow = styled.tr`
  :nth-child(n) {
    background-color: white;
  }
  :nth-child(2n) {
    background-color: #d6d9db;
  }
`;

export const TableCell = styled.td``;
