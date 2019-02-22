import React from 'react';
import { TextInput, Text, View } from 'react-native';

const InputField = ({
  name,           // field name - required
  customStyle,
  onChangeText,   // event
  value,          // field value
  disabled,
  placeholder,
  errors,         // this array prop is automatically passed down to this component from <Form />
}) => {
  return (
    <View>
      <TextInput
        value={value && value}
        onChangeText={onChangeText ? (val) => onChangeText(val) : null}
        placeholder={placeholder ? placeholder : ""}
        disabled={disabled}
        style={customStyle ? customStyle : {}}
      />

      { errors && errors.length > 0 && errors.map((item, index) =>
          item.field === name && item.error ?
            <Text key={`${index}`} style={{ color: 'red', marginLeft: 25, marginTop: 5 }}>
              {item.error}
            </Text>
          : null
        )
      }
    </View>
  );
}

export default InputField;