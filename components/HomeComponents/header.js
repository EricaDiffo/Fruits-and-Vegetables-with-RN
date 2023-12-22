import {View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import moi from '../assets/images/moi.png';

const Header = () => {
    return(
        <View style={styles.header}>
            <Icon name='bars' size={40} />
            <View style={styles.profile}>
            <Image source={require('../../assets/images/moi.jpg')} style={styles.profile}/>
                {/* <Image source={moi} style={{width: 50, height: 50}}/> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    profile: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 50
    }
});

export default Header;