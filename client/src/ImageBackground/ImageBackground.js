import React, { Component } from 'react';
import {img} from 'react-router-dom';

class ImageBackground extends Component {

    render() {
        return (
            <img source={require('./img/avengers.jpg')}
                  style={styles.ImageBackground}>

                  {this.props.children}

            </img>
        )
    }
}

const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});