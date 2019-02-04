import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './actions';
import TreeNode from './components/tree-node';
import FaIcon from '../../components/icons/fa-icon';

import { MainSidebar, HierarchyUnordered } from './styled';

class Sidebar extends Component {
  componentDidMount() {
    this.props.getHierarchy();
  }

  render() {
    const { hierarchy } = this.props;

    return (
      <MainSidebar>
        {hierarchy && Object.keys(hierarchy).length > 0
          ?
          <HierarchyUnordered>
            <TreeNode
              node={hierarchy[0]}
              expanded={true}
              autoExpandChildren={false}
            />
          </HierarchyUnordered>
          :
          <FaIcon
            icon="circle-notch"
            spin
            styles={{ fontSize: '20px', marginTop: 8, marginLeft: 8 }}
          />
        }
      </MainSidebar>
    );
  }
}

Sidebar.propTypes = {
  getHierarchy: PropTypes.func.isRequired,
  hierarchy: PropTypes.array
};

export default connect(
  state => ({ hierarchy: state.sidebar.hierarchy }),
  dispatch => bindActionCreators(Object.assign({}, actionCreators), dispatch)
)(Sidebar);
