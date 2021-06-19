import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons } from '@expo/vector-icons';

import Home from './src/pages/Home';
import MyLinks from './src/pages/MyLinks';

const drawer = createDrawerNavigator();

function Routes(){
    return (
      <drawer.Navigator
        drawerContentOptions={{
            activeBackgroundColor: '#2ccbb9',
            activeTintColor: '#fff',
            marginTop: 20,  
            labelStyle:{
                fontSize: 18,   
            }
        }}
      
      >
          <drawer.Screen
            options={{   
                title:'Encurtar links',
                drawerIcon:({focused, size, color})=>(

                    <Ionicons
                    name={focused ? 'cube' : 'cube-outline'}
                    size={size}
                    color={color}
                    />
                    )
                 
            }}
            name='Home'
            component={Home}

            
          />
            
          <drawer.Screen
            name='MyLinks'
            component={MyLinks}
            options={{
                title:'Meus Links',
                drawerIcon:({focused, size, color})=>(
                    <Ionicons
                        name={focused ? 'stats-chart' : 'stats-chart-outline'}
                        size={size}
                        color={color}
                    
                    />
                )
            }}
          />
      </drawer.Navigator>
    )
    
}

export default Routes;