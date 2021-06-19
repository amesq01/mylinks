import React from 'react';

import {View, Text } from 'react-native';

import StatusBarPage from '../../Components/StatusBarPage';



export default function MyLinks (){
    return (
        <View>

             <StatusBarPage
                backGroundColor = '#132742'
                barStyle='light-content'
            />
            <Text>
                My Links
            </Text>
        </View>
    )
}