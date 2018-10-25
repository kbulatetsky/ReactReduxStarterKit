import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Page2 = ({ header }) => (
  <div>
    <h1>Page 2</h1>
    <p>{header}</p>
  </div>
);

Page2.propTypes = {
  header: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  header: state.page2,
});

export default connect(mapStateToProps, null)(Page2);
