/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
//导入案例 TextInput
// import TextInput from './TextInputDemo1';
//导入案例 TextInput2
import TextInputDemo from './TextInputDemo'
//fetch案例1
import FetchDemo1 from './fetch_demo/fetch_demo1'
//Image组件案例
import ImageDemo1 from './image_demo/image_demo1'
//props组件案例
import PropsDemo1 from './props_demo/props_demo1'
//state组件案例
import StateDemo1 from './state_demo/state_demo1'
//style案例
import StylesDemo1 from './styles_demo/styles_demo1'
//flex案例
import FlexDemo1 from './flex_demo/flex_demo1'
//flexBoxan案例
import FlexBoxDemo1 from './flexbox_demo/flexbox_demo1'
//flexBox案例2
import FlexBoxDemo2 from './flexbox_demo/flexbox_demo2'
//TextInput案例3
import TextInputDemo3 from './textinput_demo/TextInputDemo3'
//触摸事件
import PressActionDemo1 from './press_demo/PressActionDemo1'
import TouchableDemo from './press_demo/TouchableDemo'
//ScrollerView
import IScrolledDownAndWhatHappenedNextShockedMe from './scrollview_demo/ScrollerViewDemo1'
//FlatList
import FlatListDemo from './list_demo/FlatListDemo'
//SectionList
import SectionListDemo from './list_demo/SectionListDemo'
//fetch2 FlatList
import FetchDemo2 from './fetch_demo/fetch_demo2'
//电影列表案例
import MovieExampleDemo from './example/MovieExampleDemo'

AppRegistry.registerComponent(appName, () => MovieExampleDemo);
