import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomePage from './src/HomePage';
import SecondPage from './src/SecondPage';
const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    Second: SecondPage
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

// export default HomePage;
