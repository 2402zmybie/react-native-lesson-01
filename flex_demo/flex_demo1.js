

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class FlexDemo1 extends Component<Props> {


    render() {
        return (
            // 如果去掉 container中的flex为1 ,父view不再拥有尺寸,子组件无法再撑开
            <View style={styles.container}>
                <Text style={{backgroundColor: 'red',flex: 1}}>{'just red'}</Text>
                <Text style={{backgroundColor: 'purple',flex: 2}}>{'just big blue'}</Text>
                <Text style={{backgroundColor: 'yellow',flex: 3}}>{'big blue\n then red'}</Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    red: {
        color: 'red'
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }
});


