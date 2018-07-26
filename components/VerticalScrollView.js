import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, View, TextInput, Dimensions } from 'react-native';

export default class VerticalScrollView extends Component {
    render() {
        let matchWidth = Dimensions.get('window').width;
        return (
            <ScrollView
                // in ios
                // maximumZoomScale = {3}
                // minimumZoomScale = {0.2}
                keyboardDismissMode = 'on-drag'
                contentContainerStyle = {{
                    paddingLeft: 20,
                }}>
                <Image
                    source = {require('../images/one.jpg')}
                    style = {{
                        width: matchWidth,
                        height: matchWidth*736/1308
                    }}>

                </Image>
                <Text
                    style = {{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',
                        backgroundColor: 'green'
                    }}>This a text</Text>
                <TextInput
                    style = {{
                        padding: 10,
                        margin: 10,
                        borderWidth: 1
                    }}
                    placeholder = 'Enter text'/>
                <Image
                    source = {require('../images/two.jpg')}
                    style = {{
                        width: matchWidth,
                        height: matchWidth*736/1308
                    }}>
                </Image>
                <Image
                    source = {require('../images/three.jpg')}
                    style = {{
                        width: matchWidth,
                        height: matchWidth*736/1308
                    }}>
                </Image>
                <Image
                    source = {require('../images/one.jpg')}
                    style = {{
                        width: matchWidth,
                        height: matchWidth*736/1308
                    }}>
                </Image>
                <Image
                    source = {require('../images/two.jpg')}
                    style = {{
                        width: matchWidth,
                        height: matchWidth*736/1308
                    }}>
                </Image>
                <Image
                    source = {require('../images/three.jpg')}
                    style = {{
                        width: matchWidth,
                        height: matchWidth*736/1308
                    }}>
                </Image>
            </ScrollView>
        );
    }
}