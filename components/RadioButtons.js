import React from 'react';

import {TouchableWithoutFeedback, Text} from 'react-native';

export default function radioButton({elements= []}) {
    function selected(id){
        elements.forEach(element =>{
            element.id===id?element.selected=false:true; 
        })
    }
    
    return (
        elements.map(element=>{
            <TouchableWithoutFeedback style={{flex:1,height:30, width:100, backgroundColor:"#fff"}} onPress= {element.handleOnPress && selected(element.id)}  >
                <Text style={{color:"#FFF"}}> {element.name} </Text> 
                <Text> {element.selected?'!!!':'XXX'}</Text>
            </TouchableWithoutFeedback>
        
        })
    )
}

