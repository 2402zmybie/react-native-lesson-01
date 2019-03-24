import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

//吃货星球翻译 输入的字符全部翻译为水果
export default class TextInputDemo3 extends Component{

    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={"请输入要翻译的文字,以空格结尾"}
                    onChangeText={(text) => {
                        this.setState({
                            text:text
                        })
                    }}
                />
                <Text>{this.state.text.split(' ').map(word => word && '🍕').join(' ')}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        color:'red',
        flexDirection:'column'
    }
})
