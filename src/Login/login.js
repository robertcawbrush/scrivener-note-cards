import { StyleSheet, Text, View } from 'react-native';

const LoginComponent = () => {

    // init google
    const google = null

   // do something with this

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

}

export default LoginComponent