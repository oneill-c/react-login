import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { styleLibrary } from '../../../constants/style-library';
import FaIcon from '../../../components/icons/fa-icon';

// Internal styled components
const TreeBranch = styled.li`
  padding: 5px 0;
`;

const ExpandCollapseArrow = styled.a`
  display: inline-block;
  width: 15px;
  color: ${styleLibrary.lightText};
  cursor: pointer;
`;

const SubTree = styled.ul.attrs((props) => ({
  className: classNames({ expanded: props.expanded })
}))``;

class TreeNode extends Component {
  constructor(props) {
    const { expanded, autoExpandChildren } = props;

    super(props);

    this.state = {
      expanded: expanded,
      autoExpand: (expanded && autoExpandChildren)
    };
  }

  handleToggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { node, autoExpandChildren } = this.props;
    const { expanded, autoExpand } = this.state;
    const hasChildren = node.children && node.children.length > 0;

    let childNodes = node.children;

    return (
      <TreeBranch>
        <ExpandCollapseArrow onClick={this.handleToggle.bind(this)}>
          {hasChildren && <FaIcon icon={expanded ? 'caret-down' : 'caret-right'}/>}
        </ExpandCollapseArrow>
        {node.name}
        <SubTree expanded={expanded}>
          {hasChildren && childNodes.map((child) => (
            <TreeNode
              key={child.name}
              node={child}
              expanded={autoExpand}
              autoExpandChildren={autoExpandChildren}
            />)
          )}
        </SubTree>
      </TreeBranch>
    );
  }
}

TreeNode.defaultProps = {
  expanded: false,
  autoExpandChildren: true
};

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  expanded: PropTypes.bool,
  autoExpandChildren: PropTypes.bool
};

export default TreeNode;
