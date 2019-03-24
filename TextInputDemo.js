

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';


export default class TextInputDemo extends Component<Props> {
    constructor() {
        super();
        this.state = {
            inputColor:''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>请输入颜色</Text>
                <TextInput
                    style={styles.textinputStyls}
                    onChangeText={(text) => {
                        this.setState({
                            inputColor:text
                        })
                    }}
                />
                <View
                    style={[{backgroundColor: this.state.inputColor},styles.divStyle]}
                />
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    textinputStyls: {
        borderWidth:1,
        borderColor: 'red',
        borderRadius:3,
        height:40,
        padding:5,
        marginLeft:10,
        marginRight:10,
        width:'100%'
    },
    divStyle: {
        width: 200,
        height: 200
    }
});


