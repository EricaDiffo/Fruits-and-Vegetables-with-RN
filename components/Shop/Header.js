import { StyleSheet, Text, TextInput, View ,Image} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'


const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.text1}>Your Location</Text>
            <View style={styles.nav}>
                <View>
                    <Text style={styles.text2}>3892 Olen Thomas Drive, NY <Icon name="arrow-down" /></Text>
                    
                </View>
                <View style={styles.profile}>
                    <Image source={require('../../assets/images/moi.jpg')} style={styles.profile}/>
                </View>
            </View>
            <View style={styles.search}>
                <View style={styles.inputGroup}>
                    <Icon name="search" size={20} />
                    <TextInput placeholder="Search foods, groceries" style={styles.input} />
                    <Icon name="microphone" size={20} />
                </View>
                <View style={styles.btn}>
                    <Icon5 name="sliders-simple" color='#fff' size={20} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100vw',
        padding: 15
    },
    nav: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 50,
       // backgroundColor: 'green'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 9999,
        justifyContent: 'space-between',
        width: '70%'
    },
    input: {
        height: '25px',
    },
    btn: {
        width: 50,
        height: 40,
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ae69'
    },
    text1: {
        fontSize: 17,
        color: '#d0d0d0'
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Header;