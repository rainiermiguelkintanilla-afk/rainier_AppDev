import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CustomTextInput = ({
  placeholder,
  label,
  labelStyle,
  value,
  onChangeText,
  containerStyle,
  textStyle,
  secureTextEntry,
  autoCapitalize = 'none',
  autoCorrect = false,
  keyboardType,
  textContentType,
  autoComplete,
  importantForAutofill,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        textContentType={textContentType}
        autoComplete={autoComplete}
        importantForAutofill={importantForAutofill}
        style={[
          textStyle,
          {
            width: '100%',
            borderBottomWidth: 1,
          },
        ]}
      />
    </View>
  );
};

export default CustomTextInput;
