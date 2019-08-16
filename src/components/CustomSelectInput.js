import React from 'react';
import { Field } from 'redux-form';
import InputSelect from './custom-inputs/input-select/InputSelect';
import countries from '../data/countries';
import states from '../data/states';

class CustomSelectInput extends React.Component {
  state = {
    selectedCountry: 'none',
    currentStates: []
  };

  onChangeCountry = e => {
    console.log('onChangeCountry Called' + e.target.value);
    const statesForSelectedCountry = states.get(e.target.value);
    this.setState({
      selectedCountry: e.target.value,
      currentStates: statesForSelectedCountry
    });
  };

  render() {
    return (
      <>
        <Field
          component={InputSelect}
          title="country"
          name="country"
          values={countries}
          onChange={event => this.onChangeCountry(event)}
        />
        <div
          style={{
            display: this.state.selectedCountry === 'none' ? 'none' : 'block'
          }}
        >
          <Field
            component={InputSelect}
            title="state"
            name="state"
            values={this.state.currentStates}
          />
        </div>
      </>
    );
  }
}

export default CustomSelectInput;
