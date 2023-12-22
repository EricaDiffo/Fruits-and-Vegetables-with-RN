import React from "react";
import { View , StyleSheet, Image, Text} from "react-native";

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.cardImage}>
                <Image source={require('./../ressources/started.png')} style={styles.image} />
            </View>
            <View style={styles.bottom}>
                <Text style={{textAlign: 'center', fontSize: 35, fontWeight: 'bold'}}>Order Groceries and Get delivered in few minutes</Text>
                <View style={styles.button}>
                    <Text style={styles.btnText}>Get Started</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#e6f1ed',
        rowGap: 100
    },
    cardImage: {
        width: '100%',
        height: '35%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    image: {
        width: 250,
        height: 500
    }, 
    bottom: {
        width: '100%',
        height: '40%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }, 
    button: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#06ab69',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        borderRadius: 25,
        backgroundColor: '#06ab69',
    },
    btnText: {
        fontSize: 25, 
        color: '#fff',

    }
});

export default HomeScreen;