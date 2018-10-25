import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Page1 = ({ header }) => (
  <div>
    <h1>Page 1</h1>
    <p>{header}</p>
  </div>
);

Page1.propTypes = {
  header: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  header: state.page1,
});

export default connect(mapStateToProps, null)(Page1);
