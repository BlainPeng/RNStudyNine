/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var Car = require('./Car.json');
var RNFixedHeaderListView = require('./RNFixedHeaderListView');

class RNStudyNine extends Component {
    render() {
        return (
            <RNFixedHeaderListView data={Car.data}/>
        );
    }
}


AppRegistry.registerComponent('RNStudyNine', () => RNStudyNine);