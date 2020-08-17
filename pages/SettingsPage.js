import React from 'react'


import {WorkTimeSlider, RestTimeSlider,RoundsSlider} from '../components/sliders'
import {CombosLevel, SpeedSettings} from '../components/RadioButtons'

import FullScreen from '../components/FullScreen'

export default function SettingsPage() {
    return (
        <FullScreen>
            <WorkTimeSlider />
            <RestTimeSlider />
            <RoundsSlider />
            <CombosLevel />
            <SpeedSettings/>
        </FullScreen>
    )
}
