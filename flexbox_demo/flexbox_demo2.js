

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class FlexBoxDemo2 extends Component<Props> {


    // render() {
    //     //justifySelf 可突破父布局的横向布局
    //     return (
    //         <View style={{
    //             flex: 1,
    //             flexDirection:'column',
    //             justifyContent:'space-evenly'
    //         }}>
    //             <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //             <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    //             <View style={{height: 50, backgroundColor: 'steelblue',justifySelf:'stretch'}} />
    //         </View>
    //     )
    // }

    render() {
        //alignItems :决定侧轴的布局 ; 侧轴布局的参数有flex-start、center、flex-end以及stretc
        //注意 使用stretch,子元素在侧轴上面不能有固定的尺寸
        return (
            <View style={{
                flex: 1,
                flexDirection:'column',
                justifyContent:'space-evenly',
                alignItems:'stretch'
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{height: 50, backgroundColor: 'skyblue'}} />
                <View style={{height: 50, backgroundColor: 'steelblue'}} />
            </View>
        )
    }

}


const styles = StyleSheet.create({

});


