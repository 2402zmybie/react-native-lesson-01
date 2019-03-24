

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


//闪烁组件
/**
 * state的笔记
 *
 一切界面变化都是状态state变化
 state的修改必须通过setState()方法
     this.state.likes = 100; // 这样的直接赋值修改无效！
     setState 是一个 merge 合并操作，只修改指定属性，不影响其他属性
     setState 是异步操作，修改不会马上生效
 */


class ShokLink extends Component {

    constructor() {
        super();
        this.state = {
            "isShow":true
        }

        //定义定时器 出现闪烁效果
        setInterval(() => {
            //每次调用setState时候,都会重新执行 render 方法重新渲染。这里我们使用定时器来不停调用setState，于是组件就会随着时间变化不停地重新渲染
            this.setState({
                "isShow": !this.state.isShow
            })
        },1000)
    }


    render() {
        //获取isShow的值,控制显示和隐藏
        if(this.state.isShow) {
            return (
                <Text style={{fontSize:16,color:'red'}}>{this.props.text}</Text>
            )
        }else {
            return null;
        }

    }
}

export default class StateDemo1 extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
               <ShokLink text={'Hello'}/>
               <ShokLink text={'World'}/>
               <ShokLink text={'Ling'}/>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        // 主轴排列方式
        // justifyContent: 'center',
        //竖轴排列方式
        alignItems: 'center'
    }
});


