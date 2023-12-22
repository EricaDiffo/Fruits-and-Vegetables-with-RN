import { StyleSheet, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Icon name="home" size={30} color='#333' />
            <Icon name="heart" size={30} color='#333' />
            <Icon name="shopping-bag" size={30} color='#fff' style={styles.btn} />
            <Icon name="list" size={30} color='#333' />
            <Icon5 name="bell" size={30} color='#333' />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#01aa67',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    }
});

export default Footer;