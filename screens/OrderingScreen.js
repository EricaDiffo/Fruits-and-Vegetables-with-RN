import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Header from "../components/OrderingComponents/Header";
import Title from "../components/OrderingComponents/Title";
import Panier from "../components/OrderingComponents/Panier";
import Total from "../components/OrderingComponents/Total";

const OrderingScreen = () => {
    return(
        <View style={styles.container}>
            <Header />
            <Title />
            <Panier />
            <Total />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        rowGap: 30,
        width: '100vw',
    }
});

export default OrderingScreen;