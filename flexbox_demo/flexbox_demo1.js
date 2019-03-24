

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class FlexBoxDemo1 extends Component<Props> {


    render() {
        return (
            <View style={{
                //默认是flex-start
                //space-around 子元素两边距离手机边框的距离为 子元素距离的一半
                //space-between 两边的子元素贴紧两端,其他的子元素间隔等分
                // space-evenly 子元素间隔等分
                flex: 1,
                flexDirection:'row',
                justifyContent:'space-evenly'
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        )
    }

}


const styles = StyleSheet.create({

});


