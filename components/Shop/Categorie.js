import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


const Categorie = () => {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text2}>Categories</Text>
                <Text style={styles.seeAll}>see all</Text>
            </View>
            <ScrollView style={styles.productList} horizontal>
                <View style={styles.product}>
                    <View style={styles.cardProduct}>
                        <Image source={require('../../ressources/brocolli.jpg')} style={styles.image} />
                    </View>
                    <Text style={styles.text3}>Vegetables</Text>
                </View>
                <View style={styles.product}>
                    <View style={styles.cardProduct}>
                        <Image source={require('../../ressources/lait.jpg')} style={styles.image}/>
                    </View>
                    <Text style={styles.text3}>Dairies</Text>
                </View>
                <View style={styles.product}>
                    <View style={styles.cardProduct}>
                        <Image source={require('../../ressources/meats.jpg')} style={styles.image}/>
                    </View>
                    <Text style={styles.text3}>Meats</Text>
                </View>
                <View style={styles.product}>
                    <View style={styles.cardProduct}>
                        <Image source={require('../../ressources/orange.jpg')} style={styles.image}/>
                    </View>
                    <Text style={styles.text3}>Fruits</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    seeAll: {
        fontSize: 18,
        color: 'rgb(0, 174, 105)'
    },
    productList: {
        
    },
    product: {
        alignItems: 'center',
        marginRight: 20
    },
    cardProduct: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:50,
        height: 50,
    },
    text2: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    text3: {
        fontSize: 16,
    }
});

export default Categorie;