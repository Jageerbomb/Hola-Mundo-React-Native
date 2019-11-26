import React, {Component} from 'react';
import{StyleSheet, View, ActivityIndicator} from 'react-native';

export default class Preload extends Component {
    render() {
        return(
            <View style={style.preLoaderView}>
                <ActivityIndicator color="#fff" size="large"></ActivityIndicator>
            </View>
        )
    }
}

const style = StyleSheet.create({
    preLoaderView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#009929'
    }
})