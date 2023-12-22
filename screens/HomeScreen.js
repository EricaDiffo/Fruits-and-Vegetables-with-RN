import {View, Text, StyleSheet} from 'react-native';
import Header from './../components/HomeComponents/header';
import Title from './../components/HomeComponents/title';
import FruitList from './../components/HomeComponents/fruitList';
import Cards from './../components/HomeComponents/cards';
import Shop from './../components/HomeComponents/shop';
import Footer from './../components/HomeComponents/footer';

const HomeScreen = ({navigaton}) => {
  return(
    <View style={styles.container}>
      <Header />
      <Title />
      <FruitList />
      <Cards />
      <View>
        <Text style={{fontSize: 30}}>Nearby Shop</Text>
      </View>
      <Shop />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    flex: 1,
    padding: 20,
    display: 'flex',
    alignItems: 'stretch',
    rowGap: 30,
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden'
  }
});

export default HomeScreen;