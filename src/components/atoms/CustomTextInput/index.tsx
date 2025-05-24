import React, {useState} from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../common/Colors';
import { IMAGES } from '../../../common/images'
import { Fonts } from '../../../common/fonts';

interface CustomTextInputProps extends TextInputProps {
  showToggleIcon?: boolean;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
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
  const [isFocused, setIsFocused] = useState<boolean>(false); // track focus

  const handleTextChange = (text: string) => {
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
      <View
        style={[
          styles.inputWrapper,
          isFocused && { borderColor: Colors.primary }, 
          !isFocused && { borderColor: 'transparent' }, 
        ]}
      >
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.lightgrey}
          secureTextEntry={false}
          value={secureTextEntry && hidePassword ? maskedValue : value}
          onChangeText={
            secureTextEntry && hidePassword ? handleTextChange : onChangeText
          }
          onFocus={() => setIsFocused(true)}      
          onBlur={() => setIsFocused(false)} 
          {...rest}
        />
        {showToggleIcon && secureTextEntry && (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            {hidePassword ? (
              <IMAGES.EyeClose width={24} height={20} />
            ) : (
              <IMAGES.Eye width={24} height={20} />
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
    borderRadius: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderColor: 'transparent', 
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.Regular,
  },
});
