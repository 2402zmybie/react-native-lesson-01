import React,{ Component } from 'react'
import { View,Alert, AppRegistry,Platform,StyleSheet,Text,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback } from 'react-native'

export default class TouchableDemo extends Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long press the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlaycolor={'white'}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                    /*onPress={this._onPressButton}*/
                    background={Platform.OS === 'android'? TouchableNativeFeedback.SelectableBackground() : ''}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableHighlight
                    onLongPress={this._onLongPressButton}
                    /*onPress={this._onPressButton}*/
                    underlayColor="white"
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>

                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        //定义侧轴方向 侧轴居中
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})