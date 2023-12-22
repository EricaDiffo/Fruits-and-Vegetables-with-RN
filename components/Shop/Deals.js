import { Image, StyleSheet, Text, View } from "react-native"

const Deals = () => {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text2}>Deals</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.title2}>50% OFF</Text>
                    <Text style={styles.title3}>On Grocery Combo packs </Text>
                    {/* <Image source={require('../../ressources/veg.jpg')}style={styles.image} />  */}
                    <View style={styles.btn}>
                        <Text style={{color: '#1ca56f', fontWeight: 'bold'}}>Shop now</Text>
                    </View>
                </View>
                <Image />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    seeAll: {
        fontSize: 18,
        color: 'rgb(0, 174, 105)'
    },
    card: {
        width: '100%',
        backgroundColor: '#def3ea',
        padding: 40,
        borderRadius: 20
    },
    title2: {
        fontSize: 37,
        fontWeight: 'bold'
    },  
    title3: {
        fontSize: 20
    },
    image:{
        width: 100,
        height: 100,
        backgroundColor:'#def3ea',
    },
    btn: {
        backgroundColor: '#fff',
        width: 80,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text2: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});

export default Deals;