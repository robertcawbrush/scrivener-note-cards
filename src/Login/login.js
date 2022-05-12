import { StyleSheet, Text, View, Button } from 'react-native';
import Proptypes from 'prop-types'

const LoginComponent = ({ navigation }) => {

    // init google
    const google = null

   // do something with this
    // () => navigation.navigate('Home')

    return (
        <View style={styles.container}>
            <Text>Login Text</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

LoginComponent.proptypes = {
navigation: Proptypes.object.isRequired,
}

export default LoginComponent