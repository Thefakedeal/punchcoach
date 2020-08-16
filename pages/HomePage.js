import React from 'react'
import {Button} from "react-native"

import FullScreen from '../components/FullScreen'

import NAVROUTES from '../navRoutes.json'

export default function HomePage({navigation}) {
    return (
        <FullScreen>
        <Button title={NAVROUTES.SETTINGS} 
        onPress={()=>{
            navigation.navigate(NAVROUTES.SETTINGS)
        }}/>
        </FullScreen>
    )
}
