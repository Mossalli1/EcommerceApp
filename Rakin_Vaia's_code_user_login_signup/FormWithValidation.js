import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, FlatList, View } from 'react-native';
import { RkTextInput, RkButton, RkText } from 'react-native-ui-kitten';

import Rules from './Rules';
import Messages from './Messages';

export default class FormWithValidation extends Component {
  state = {
    errors: [],
    deviceLocale: this.props.deviceLocale || 'en', // ex: en, fr
    rules: Rules, // rules for Validation
    messages: Messages,
    stateFields: Object.keys(this.props.FieldRules),
  };
  // Method to return errors on a specific field
  getErrorsInField(fieldName) {
    const foundError = this.state.errors.find(
      err => err.fieldName === fieldName,
    );
    if (!foundError) {
      return [];
    }
    return foundError.messages;
  }

  validate() {
    // Reset errors
    this._resetErrors();
    // Iterate over inner state
    this.state.stateFields.map((field, index) => {
      const rules = this.props.FieldRules[field];
      if (rules) {
        // Check rule for current field
        this._checkRules(
          field,
          rules,
          this.props.getStateValue(field),
          this.props.Fields[index],
        );
      }
    });
    return this.isFormValid();
  }

  // Method to check rules on a spefific field
  _checkRules(fieldName, rules, value, fieldNameProper) {
    for (const key of Object.keys(rules)) {
      const isRuleFn = typeof this.state.rules[key] === 'function';
      const isRegExp = this.state.rules[key] instanceof RegExp;
      if (
        (isRuleFn && !this.state.rules[key](rules[key], value)) ||
        (isRegExp && !this.state.rules[key].test(value))
      ) {
        this._addError(fieldName, key, rules[key], fieldNameProper);
      }
    }
  }

  // Add error
  // ex:
  // [{ fieldName: "name", messages: ["The field name is required."] }]
  _addError(fieldName, rule, value, fieldNameProper) {
    const errMsg = this.state.messages[this.state.deviceLocale][rule]
      .replace('{0}', fieldNameProper)
      .replace('{1}', value);
    const [error] = this.state.errors.filter(
      err => err.fieldName === fieldName,
    );
    // error already exists
    if (error) {
      // Update existing element
      const index = this.state.errors.indexOf(error);
      error.messages.push(errMsg);
      this.state.errors[index] = error;
    } else {
      // Add new item
      this.state.errors.push({
        fieldName,
        messages: [errMsg],
      });
    }
  }

  // Reset error fields
  _resetErrors() {
    this.setState({ errors: [] });
  }

  // Method to check if the field is in error
  isFieldInError(fieldName) {
    return (
      this.state.errors.filter(err => err.fieldName === fieldName).length > 0
    );
  }

  isFormValid() {
    return this.state.errors.length === 0;
  }

  validateAndSubmit = () => {
    this.validate();
    this.state.stateFields.map(field => {
      if (this.isFieldInError(field)) {
        this.props.setStateValue(
          `${field}ErrorMessage`,
          this.getErrorsInField(field),
        );
      } else {
        this.props.setStateValue(`${field}ErrorMessage`, '');
      }
      return null;
    });
    if (this.isFormValid()) {
      this.props.submit();
    }
  };

  render() {
    const { stateFields } = this.state;
    return (
      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="padding"
      >
        <FlatList
          style={styles.form}
          data={this.props.Fields}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View>
              <RkTextInput
                onChangeText={value =>
                  this.props.onChangeText(stateFields[index], value)
                }
                value={this.props.getStateValue(stateFields[index])}
                // returnKeyType="next"
                keyboardType={
                  stateFields[index] === 'email' ? 'email-address' : 'default'
                }
                secureTextEntry={
                  stateFields[index].includes('password') ||
                  stateFields[index].includes('Password')
                }
                autoFocus={index === 0}
                rkType="ogin"
                placeholder={item}

              />
              <RkText rkType="medium errorMessage">
                {this.props.getStateValue(`${stateFields[index]}ErrorMessage`)}
              </RkText>
            </View>
          )}
        />
        <RkText style={styles.otherErrorMessages} rkType="medium errorMessage">
          {this.props.getStateValue('cognitoErrorMessage')}
        </RkText>
        <RkButton
          rkType="stretch"
          style={styles.button}
          contentStyle={{ color: 'white' }}
          onPress={this.validateAndSubmit}
        >
          {this.props.button}
        </RkButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  form: {
    marginTop: 30,
  },
  otherErrorMessages: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'black',
    marginHorizontal: '15%',
    marginBottom: 40,
  },
});
