import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";

const Item = () => {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text2}>Popular items</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <ScrollView style={styles.items} horizontal>
                <View style={styles.card}>
                    <View style={styles.cardImage}>
                        <Image source={require('../../ressources/brocolli.jpg')} style={styles.image} />
                        <Icon name='heart' color='red' size={25} style={styles.like} />
                    </View>
                    <View style={styles.cardFooter}>
                        <View>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Brocolli</Text>
                            <Text style={{fontSize: 16}}>$1.25</Text>
                        </View>
                        <View style={styles.btn}>
                            <Icon name="shopping-bag" size={20} color='#fff' />
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImage}>
                        <Image source={require('../../ressources/carrot.jpg')} style={styles.image} />
                        <Icon name='heart' color='red' size={25} style={styles.like} />
                    </View>
                    <View style={styles.cardFooter}>
                        <View>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Carotte</Text>
                            <Text style={{fontSize: 16}}>$1.25</Text>
                        </View>
                        <View style={styles.btn}>
                            <Icon name="shopping-bag" size={20} color='#fff' />
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImage}>
                        <Image source={require('../../ressources/tomate.jpg')} style={styles.image} />
                        <Icon name='heart' color='red' size={25} style={styles.like} />
                    </View>
                    <View style={styles.cardFooter}>
                        <View>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tomate</Text>
                            <Text style={{fontSize: 16}}>$1.25</Text>
                        </View>
                        <View style={styles.btn}>
                            <Icon name="shopping-bag" size={20} color='#fff' />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        overflow: 'hidden'
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
    items: {
        width: '100vw'
    },
    card: {
        backgroundColor: '#fff',
        height: 200,
        width: 160,
        borderRadius: 20,
        padding: 10,
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'strech',
        marginRight: 15
    },
    cardImage: {
        borderBottomColor: '#000',
        borderStyle: 'solid',
        borderBottomWidth: 1,
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#00ac67',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    image: {
        width: 110,
        height: 120
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    like: {
        position: 'absolute',
        top: 20,
        left: 110
    },
    text2: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});

export default Item;