import {View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Icon name='home' size={40} color={'pink'} />
            <Icon name='search' size={35} color={'grey'}/>
            <Icon name='shopping-cart' size={40}  color={'grey'}/>
            <Icon name='user' size={40}  color={'grey'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Footer;