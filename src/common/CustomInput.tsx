import React, {useState} from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from './Colors';
import Eye from '../assets/eye.svg';
import EyeClose from '../assets/eye_close.svg';
interface CustomTextInputProps extends TextInputProps {
  showToggleIcon?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  showToggleIcon = false,
  secureTextEntry,
  value,
  onChangeText,
  ...rest
}) => {
  const [hidePassword, setHidePassword] = useState<boolean>(
    secureTextEntry ?? false,
  );
  const [realValue, setRealValue] = useState<string>(value ?? '');
  const [maskedValue, setMaskedValue] = useState<string>('');

  const handleTextChange = (text: string) => {
    // If deleting characters
    if (text.length < maskedValue.length) {
      setRealValue(realValue.slice(0, -1));
      setMaskedValue(maskedValue.slice(0, -1));
      onChangeText?.(realValue.slice(0, -1));
    } else {
      const newChar = text[text.length - 1];
      const updated = realValue + newChar;
      setRealValue(updated);
      setMaskedValue(maskedValue + '*');
      onChangeText?.(updated);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.placeholder}
          secureTextEntry={false} // keep off to allow custom masking
          value={secureTextEntry && hidePassword ? maskedValue : value}
          onChangeText={
            secureTextEntry && hidePassword ? handleTextChange : onChangeText
          }
          {...rest}
        />
        {showToggleIcon && secureTextEntry && (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            {hidePassword ? (
              <EyeClose width={24} height={20} />
            ) : (
              <Eye width={24} height={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.accent,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.black,
  },
  icon: {
    marginLeft: 8,
  },
});

export default CustomTextInput;
