import React from 'react'
import { View} from 'react-native';

import {WorkTimeSlider, RestTimeSlider} from '../components/sliders'
import {CombosLevel} from '../components/RadioButtons'


export default function SettingsPage() {
    return (
        <View style= {{flex:1, width:"100%"}}>
            <WorkTimeSlider />
            <RestTimeSlider />
            <CombosLevel />
        </View>
    )
}
