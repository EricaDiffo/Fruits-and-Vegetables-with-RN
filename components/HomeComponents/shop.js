import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import boutiqueImage from './../../assets/images/boutique.png';
import boutiqueImage2 from './../../assets/images/boutique2.png';

const Shop = () => {
    return(
        <ScrollView style={styles.shop} horizontal>
            <View style={styles.shopCard}>
                <Image source={boutiqueImage} style={{width: 50, height: 50}} />
                <View>
                    <Text style={{fontSize: 18}}>Xender Shop</Text>
                    <Text style={{fontSize: 18}}>2356 Toltricon Street</Text>
                    <Text>9 A.M - 7 P.M</Text>
                </View>
            </View>
            <View style={styles.shopCard}>
                <Image source={boutiqueImage2} style={{width: 50, height: 50}} />
                <View>
                    <Text style={{fontSize: 18}}>Xender Shop</Text>
                    <Text style={{fontSize: 18}}>2356 Toltricon Street</Text>
                    <Text>9 A.M - 7 P.M</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    shop: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 20
    },
    shopCard: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#ffdadb',
        borderStyle: 'solid',
        borderRadius: 10,
        width: 250,
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        columnGap: 10,
        marginRight: 20
    }
});

export default Shop;