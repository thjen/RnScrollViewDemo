import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, View, ViewPagerAndroid,TextInput, Dimensions } from 'react-native';

export default class ViewPager extends Component {
    render() {
        return (
            <ViewPagerAndroid
                style = {{
                    flex: 1
                }}
                initialPage = {0}
                onPageScrollStateChanged = {(state) => {
                    console.log(`scroll state: = ${state}`);
                }}
                onPageSelected = {(event) => {
                    console.log(`page: = ${event.nativeEvent.position}`)
                }}>
                <View
                    style = {{backgroundColor: 'lightseagreen'}}>
                    <Text
                        style = {{
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>Page one</Text>
                </View>
                <View
                    style = {{backgroundColor: 'palevioletred'}}>
                    <Text
                        style = {{
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>Page two</Text>
                </View>
                <View
                    style = {{backgroundColor: 'salmon'}}>
                    <Text
                        style = {{
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>Page three</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}