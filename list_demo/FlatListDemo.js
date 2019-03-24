import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default class FlatListDemo extends Component {

    json=[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
    ];

    render() {
        return (
            <View style={styles.container}>
                {/*FlatList是单闭合标签,两个属性 data和renderItem, 并且renderItem中参数必须为item 和index*/}
                <FlatList
                    data={this.json}
                    renderItem={({item,index}) => (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item.key}</Text>
                            <Text style={styles.text}>,</Text>
                            <Text style={styles.text}>{index}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        paddingTop:20,
        flex:1
    },
    text: {
        padding:10,
        fontSize:16,
        color:'red'
    },
    item: {
        flexDirection:'row'
    }
})