import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';


export default class SectionListDemo extends Component {

    sections=[
        {title: 'D', data: ['Devin']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
    ];

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.sections}
                    renderSectionHeader={({section}) => (
                        <View>
                            <Text style={styles.header}>{section.title}</Text>
                            <View style={styles.line}></View>
                        </View>
                    )}
                    renderItem={({item}) => (
                        <Text style={styles.content}>{item}</Text>
                    )}
                    keyExtractor={(item,index) => index}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {

    },
    header: {
        paddingTop:2,
        paddingLeft:10,
        color:'red',
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom:2,
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    line: {
        backgroundColor:'#ccc',
        height:1
    },
    content: {
        padding:10,
        color: 'pink',
        fontSize:12,
        height:44
    }
})