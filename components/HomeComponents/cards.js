import { ScrollView, Button, View, Text, StyleSheet, Image ,TouchableOpacity} from "react-native";
 import orangeImage from './../../assets/images/orange.png';
import raisainImage from './../../assets/images/raisain.png';
 import strawberry from './../../assets/images/fraise.png';
import pineapple from './../../assets/images/ananas.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const Cards = () => {
    return(
        <ScrollView style={styles.cards} horizontal>
            <View style={styles.card}>
            <Image source={orangeImage} style={{width: 100, height: 120}} />
                <View style={styles.information}>
                    <Text style={{fontSize: 23, color: '#f3ba85', fontWeight: '700'}}>Orange</Text>
                    <Text style={{fontSize: 23, color: '#f3ba85', fontWeight: '700'}}>$10</Text>
                </View>
                {/* <TouchableOpacity onPress={() => navigation.navigate('OrderingScreen')}> */}
                <View style={styles.button}>
                    <Text style={{color: '#fff', fontSize: 20}}>ADD</Text>
                </View>
                {/* </TouchableOpacity> */}
                <View style={styles.like}>
                    <Icon name='heart' size={25} color='#f3ba85' />
                </View>
            </View>
            <View style={styles.card2}>
                <Image source={raisainImage} style={{width: 100, height: 120}} />
                <View style={styles.information}>
                    <Text style={{fontSize: 23, color: '#515988', fontWeight: '700'}}>Grape</Text>
                    <Text style={{fontSize: 23, color: '#515988', fontWeight: '700'}}>$12</Text>
                </View>
                <View style={styles.button2}>
                    <Text style={{color: '#fff', fontSize: 20}}>ADD</Text>
                </View>
                <View style={styles.like}>
                    <Icon name='heart' size={25} color='purple' />
                </View>
            </View>
            <View style={styles.card3}>
                <Image source={pineapple} style={{width: 100, height: 120}} />
                <View style={styles.information}>
                    <Text style={{fontSize: 23, color: '#fffc00', fontWeight: '700'}}>Pineapple</Text>
                    <Text style={{fontSize: 23, color: '#fffc00', fontWeight: '700'}}>$13</Text>
                </View>
                <View style={styles.button3}>
                    <Text style={{color: '#fff', fontSize: 20}}>ADD</Text>
                </View>
                <View style={styles.like}>
                    <Icon name='heart' size={25} color='yellow' />
                </View>
            </View>
            <View style={styles.card4}>
                <Image source={strawberry} style={{width: 100, height: 120}} />
                <View style={styles.information}>
                    <Text style={{fontSize: 23, color: 'pink', fontWeight: '700'}}>strawberry</Text>
                    <Text style={{fontSize: 23, color: 'pink', fontWeight: '700'}}>$15</Text>
                </View>
                <View style={styles.button4}>
                    <Text style={{color: '#fff', fontSize: 20}}>ADD</Text>
                </View>
                <View style={styles.like}>
                    <Icon name='heart' size={25} color='pink' />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cards: {
        display: 'flex',
        flexDirection: 'row',
    },
    card: {
        width: 300,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#faeac9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'relative',
        marginRight: 20
    },
    card2: {
        width: 300,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#d9defe',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'relative'
    },
    card3: {
        width: 300,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#fcfa61',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'relative',
        marginLeft:20,
    },
    card4: {
        width: 300,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#fa927b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'relative',
        marginLeft: 20,
    },
    information: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
    },
    button: {
        width: 150,
        borderRadius: 9999,
        backgroundColor: '#f79d11',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    button2: {
        width: 150,
        borderRadius: 9999,
        backgroundColor: '#3547a9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    button3: {
        width: 150,
        borderRadius: 9999,
        backgroundColor: 'yellow',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    button4: {
        width: 150,
        borderRadius: 9999,
        backgroundColor: 'pink',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    like:{
        position: 'absolute',
        top: 15,
        left: '80%',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Cards;