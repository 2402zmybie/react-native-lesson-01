
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';

export default class FetchDemo2 extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            movies:[]
        }
    }

    render() {
        if(this.state.isLoading) {
            return (
                <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size={'large'}/>
                </View>
            )
        }
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={this.state.movies}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                    keyExtractor={(item,index) => item.id}
                />
            </View>
        )
    }

    componentDidMount() {
        fetch("https://facebook.github.io/react-native/movies.json")
            .then(resp => resp.json())
            .then(response => {
                console.log(response)
                //ES6结构
                let {movies} = response
                this.setState({
                    isLoading:false,
                    movies:movies
                },function () {
                    console.log("请求完成,状态机更新完毕")
                });
            })
            .catch(e => {
                console.error(e)
            })
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


