

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class StylesDemo1 extends Component<Props> {


    render() {
        return (
            <View>
                <Text style={styles.red}>{'just red'}</Text>
                <Text style={styles.bigBlue}>{'just big blue'}</Text>
                <Text style={[styles.bigBlue,styles.red]}>{'big blue\n then red'}</Text>
                <Text style={[styles.red,styles.bigBlue]}>{'red\n then big blue'}</Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    red: {
        color: 'red'
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }
});


