import React from 'react';

class InputSelect extends React.Component {
  render() {
    const {
      input,
      title,
      values,
      meta: { touched, error }
    } = this.props;
    return (
      <div className="select-input-container">
        <label className="title">{title}</label>
        <div className="input-container">
          <select {...input}>
            {values.map(option => {
              const { value, text } = option;
              return <option value={value}>{text}</option>;
            })}
          </select>

          {touched && error && <span className="error">{error}</span>}
        </div>
      </div>
    );
  }
}

export default InputSelect;
