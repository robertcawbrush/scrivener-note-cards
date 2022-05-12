import { StyleSheet, Text, View } from 'react-native';

const HomeComponent = () => {

    // init google
    const google = null

   // do something with this

    return (
        <View style={styles.container}>
            <Text>YOU ARE AT HOME</Text>
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

HomeComponent.proptypes = {

}

export default HomeComponent