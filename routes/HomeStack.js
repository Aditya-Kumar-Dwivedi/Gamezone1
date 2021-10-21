import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Gamezone',
            headerStyle: { backgroundColor: '#eee' }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#D5D5D5' }
    }
});

export default createAppContainer(HomeStack);