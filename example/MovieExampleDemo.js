import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator
}from 'react-native'


export default class MovieExampleDemo extends Component {

    // movie = {
    //     title:"Chain Reaction",
    //     thumbnail:"http://img010.hc360.cn/y3/M05/2D/7D/wKhQh1TvmDmEZbWDAAAAAEwP1D0710.jpg",
    //     year: 1996
    // }

    constructor(props) {
        super(props)
        this.state = {
            isLoading:true,
            movie:[]
        }
    }

    render() {
        if(this.state.isLoading) {
            return (
                <View style={styles.indicatorContainer}>
                    <ActivityIndicator size={'large'}/>
                    <Text style={{marginTop:5,fontSize: 14}}>{'数据正在加载中,请稍等'}</Text>
                </View>
            )
        }
        return (
            <View style={{flex:1}}>
                <FlatList
                    ItemSeparatorComponent = {this.flatListSeparator}
                    data={this.state.movie}
                    renderItem={this.renderMovieItem}
                    keyExtractor={(item,index) => item.id}
                />
            </View>
        )
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json")
            .then(resp => resp.json())
            .then(response => {
                console.log(response)
                //得到值
                this.setState({
                    isLoading:false,
                    movie:response.movies
                },() => {
                    console.warn("数据获取,状态机已被更改")
                })
            })
    }

    renderMovieItem({item}) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri:item.posters.thumbnail}}
                    style={styles.imageStyle}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        )
    }

    //FlatList属性 ItemSeparatorComponent得到分割线
    flatListSeparator() {
        return (
            <View style={{backgroundColor:'#ccc',height: 1,marginLeft: 20,marginRight:20}}></View>
        )
    }
}

const styles = StyleSheet.create({
    indicatorContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    container: {
        flexDirection:'row',
        padding:20
    },
    imageStyle: {
        width:50,
        height:80
    },
    rightContainer: {
        marginLeft:10,
        flex:1,
        alignItems:'center'
    },
    title: {
        fontSize:16,
        fontWeight: 'bold',
        marginBottom:8
    }
})