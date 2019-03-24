

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default class fetchDemo1 extends Component<Props> {

    getData() {
        fetch('http://localhost:8081/test.json')
            .then((response) => response.json())
            .then(responseJson => {
                console.log(responseJson)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <View
                style={styles.container}>
                <TouchableOpacity>
                    <Text style={{backgroundColor: 'red',width:100,height:50}}
                          onPress = {this.getData}

                    >点我发请求</Text>
                </TouchableOpacity>
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
    }
});


