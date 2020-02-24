import React, { Component } from 'react';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { Text, View } from 'react-native';
   
export default class dialog extends React.Component {
   render(){
    return (
   <View>
      <Text>Hello world2!</Text>
      <Menu>
        <MenuTrigger text='Select action' />
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Save`)} text='Save' />
          <MenuOption onSelect={() => alert(`Delete`)} >
            <Text style={{color: 'red'}}>Delete</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
        </MenuOptions>
      </Menu>
    </View>)
    }
}