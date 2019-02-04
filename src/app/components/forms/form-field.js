import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class FormField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldValue: ''
    };

    this.fieldDOMNode = React.createRef();
  }

  focusField() {
    this.fieldDOMNode.current.focus();
  }

  handleFieldChange(event) {
    const updatedValue = event.target.value;

    this.setState({
      fieldValue: updatedValue
    });
    this.props.handleValueChanged(this.props.fieldId, updatedValue);
  }

  setField(value) {
    this.setState({
      fieldValue: value
    });
  }

  render() {
    const {
      labelText,
      labelClasses,
      fieldType,
      fieldId,
      fieldClasses
    } = this.props;

    return (
      <div className="form-group">
        <label className={classNames(...labelClasses)}>{labelText}</label>
        <input
          type={fieldType || 'text'}
          id={fieldId}
          name={fieldId}
          className={classNames('form-control', ...fieldClasses)}
          value={this.state.fieldValue}
          onChange={this.handleFieldChange.bind(this)}
          ref={this.fieldDOMNode}
        />
      </div>
    );
  }
}

FormField.defaultProps = {
  fieldClasses: [],
  labelClasses: []
};

FormField.propTypes = {
  fieldClasses: PropTypes.array,
  fieldId: PropTypes.string.isRequired,
  fieldType: PropTypes.string,
  handleValueChanged: PropTypes.func.isRequired,
  labelClasses: PropTypes.array,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default FormField;