import React from 'react'

import { TimerValues } from '../contexts/timerValues'

import FullScreen from '../components/FullScreen'
import NavBar from '../components/NavBar';
import Clock from '../components/Clock'
import Rounds from '../components/Rounds'


export default function HomePage({navigation}) {
    return (
        <FullScreen>
            <NavBar navigation={navigation} />
            <TimerValues>
            <Rounds />
            <Clock/>
            </TimerValues>
        </FullScreen>
    )
}
