import React from 'react'
import {Button} from "react-native"

import FullScreen from '../components/FullScreen'
import NavBar from '../components/NavBar';

import NAVROUTES from '../navRoutes.json'

export default function HomePage({navigation}) {
    return (
        <FullScreen>
            <NavBar navigation={navigation} />
        </FullScreen>
    )
}
