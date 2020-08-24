import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import NAVROUTES from '../navRoutes.json'

function SettingsNav({onPress}){
    return (
        <TouchableWithoutFeedback onPress={onPress} style={styles.navButton}>
            <Image style={styles.icon}
            source= {require('../assets/settingsicon.png')}
            />
        </TouchableWithoutFeedback>
    )
}


function InfoNav({onPress}){
    return (
        <TouchableWithoutFeedback onPress={onPress} style={styles.navButton}>
            <Image style={styles.icon}
            source= {require('../assets/info.png')}
            />
        </TouchableWithoutFeedback>
    )
}


export default function NavBar({navigation}) {
    const handleSettingsOnPress = ()=>{
        navigation.navigate(NAVROUTES.SETTINGS)
    }

    const handleInfoOnPress = ()=>{
        navigation.navigate(NAVROUTES.INFO)
    }
    return (
        <View style={styles.nav}>
            <InfoNav onPress = {handleInfoOnPress} />
            <SettingsNav onPress= {handleSettingsOnPress} />
        </View>
    )
}



const styles = StyleSheet.create({
    nav: {
        display: "flex",
        height: 50,
        width: "100%",
        padding: 10,
        // paddingBottom: 5,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    navButton:{
        flex: 1,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    icon:{
        height: '100%',
        resizeMode: "contain"
    }
})