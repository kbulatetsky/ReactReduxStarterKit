import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as homeActions from './home.actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.testAction1 = this.testAction1.bind(this);
    this.testAction2 = this.testAction2.bind(this);
    this.testAction3Thunk = this.testAction3Thunk.bind(this);
  }

  testAction1() {
    const { actions } = this.props;
    actions.testAction1();
  }

  testAction2() {
    const { actions } = this.props;
    actions.testAction2();
  }

  testAction3Thunk() {
    const { actions } = this.props;
    actions.testAction3Thunk();
  }

  render() {
    const { header } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>{header}</p>
        <input type="button" value="Test Action 1" onClick={this.testAction1} />
        <input type="button" value="Test Action 2" onClick={this.testAction2} />
        <input type="button" value="Test Action 3 Thunk" onClick={this.testAction3Thunk} />
      </div>
    );
  }
}

Home.propTypes = {
  header: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  header: state.home,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(homeActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
