
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';



export default class TextInputDemo1 extends Component<Props> {

    constructor() {
        super();
        this.state = {
            text:""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>输入框输入的值为:</Text>
                <Text>人民币: {this.state.text}</Text>
                <TextInput style={styles.textinputStyls}
                    value={this.state.text}
                   //定义获得焦点后弹出 数字类型的键盘
                   keyboardType='numeric'
                   placeholder={'请输入要赚的钱'}
                   onChangeText = {(text) => {
                        this.setState({
                            text:text
                        })
                    }}
                   //失去焦点
                    onBlur = {() => {
                        alert("输入框失去焦点")
                    }}
                   //获得焦点
                   onFocus = {() => {
                       alert("输入框获得焦点")
                   }}

                />
            </View>
        );
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
    }
});
