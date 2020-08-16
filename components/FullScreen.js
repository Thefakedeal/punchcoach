import React from 'react'
import {View} from 'react-native'

export default function FullScreen({children}) {
    return (
        <View style= {{flex:1, width:"100%", backgroundColor: '#090909'}}>
            {children}
        </View>
    )
}
