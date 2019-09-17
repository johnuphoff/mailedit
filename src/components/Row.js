import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import Table from './Table';

const Row = ({ children }) => (
  <Table width={600}>
    <TableRow>{children}</TableRow>
  </Table>
);

Row.defaultProps = {
  children: null
};

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
