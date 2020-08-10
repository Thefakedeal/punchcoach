import React from 'react'
import { View} from 'react-native';

import {WorkTimeSlider, RestTimeSlider} from '../components/sliders'


export default function SettingsPage() {
    return (
        <View style= {{width:"100%"}}>
            <WorkTimeSlider />
            <RestTimeSlider />
        </View>
    )
}
