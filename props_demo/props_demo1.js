

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


class LotsofGrantings extends Component {
    render() {
        return (
            <Text style={{fontSize:16,color:'red'}}>{this.props.text}</Text>
        )
    }
}

export default class PropsDemo1 extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
               <LotsofGrantings text={'Hello'}/>
                <LotsofGrantings text={'World'}/>
                <LotsofGrantings text={'Ling'}/>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        // 主轴排列方式
        // justifyContent: 'center',
        //竖轴排列方式
        alignItems: 'center'
    }
});


