import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, View, TextInput, Dimensions } from 'react-native';

export default class HorizontalScrollView extends Component {
    render() {
        let widthMax = Dimensions.get('window').width;
        let heightMax = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal = {true}
                pagingEnabled = {true}
                showHorizontalScrollIndicator = {true}
                onMomentumScrollBegin = {() => {
                    //alert('Begin scroll');
                }}
                onMomentumScrollEnd = {() => {
                    //alert('End scroll');
                }}
                onScroll = {(event) => {
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`;
                    console.log(logData);
                }}
                scrollEventThrottle = {10} // update x y 10s 1 lan`
                >
                <View
                    style = {{
                        backgroundColor: '#5f9ea0',
                        flex: 1,
                        width: widthMax,
                        height: heightMax,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text
                        style = {{
                            fontSize: 20,
                            color: 'white'
                        }}>Screen one</Text>
                </View>
                <View
                    style = {{
                        backgroundColor: 'tomato',
                        flex: 1,
                        width: widthMax,
                        height: heightMax,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text
                        style = {{
                            fontSize: 20,
                            color: 'white'
                        }}>Screen two</Text>
                </View>
                <View
                    style = {{
                        backgroundColor: '#663399',
                        flex: 1,
                        width: widthMax,
                        height: heightMax,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text
                        style = {{
                            fontSize: 20,
                            color: 'white'
                        }}>Screen three</Text>
                </View>
            </ScrollView>
        );
    }
}