module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // it should be the last plugin in the array
    // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started#:~:text=%2C%0A%20%20%7D%3B-,CAUTION,-react%2Dnative%2Dreanimated
    'react-native-reanimated/plugin',
  ],
};
