import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component<{}> {
    render(){
        return(
            <View style ={styles.container}>
            <Image
                style={{width: 80, height: 80}}
                source={require('../img/logo3.png')}
            />
            <Text style={styles.LogoText}>Share & Meet</Text>
           
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    LogoText : {
        marginVertical: 15,
        fontSize:18,
        color:'rgba(255,255,255,0.7)'
    }
  });