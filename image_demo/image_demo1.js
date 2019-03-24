

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class ImageDemo1 extends Component<Props> {


    render() {

        let url = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}

        return (
            <View>
                {/*图片组件, 先引入Image, 网络上的图片定义宽高,并且指定source*/}
                <Image style={{width:200,height:100}}
                        source={url}
                ></Image>
            </View>
        )
    }

}


const styles = StyleSheet.create({

});


