import { View, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='chevron-left' size={30} />
                <View style={styles.iconGroup}>
                    <Icon name='download' size={30} />
                    <Icon name='info' size={30} />
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('../../ressources/2.png')} style={{width: 200, height: 200}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        rowGap: 20,
        alignItems: 'center',
        padding: 15
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconGroup: {
        flexDirection: 'row',
        columnGap: 30
    },
    card: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        backgroundColor: '#e6f1ed',
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;