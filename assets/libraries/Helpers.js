import {
    Alert,
    ActivityIndicator,
    AppRegistry,
    Platform,
    AsyncStorage
} from 'react-native';

import {
    StackNavigator, NavigationActions
} from 'react-navigation';

export async function RequestHelper(url, method, bodyParameter){
    var data = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: (bodyParameter == null) ? null : JSON.stringify(bodyParameter)
    });
    return data.json();
}

export async function GetToken() {
    var token_ = await AsyncStorage.getItem("accessToken");
    return token_;
};

export function setInitialRoute(targetRoute, props) {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: targetRoute }),
        ]
    });
    props.navigation.dispatch(resetAction);
};