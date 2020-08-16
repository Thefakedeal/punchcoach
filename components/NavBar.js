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

export default function NavBar({navigation}) {
    const handleSettingsOnPress = ()=>{
        navigation.navigate(NAVROUTES.SETTINGS)
    }
    return (
        <View style={styles.nav}>
            <SettingsNav onPress= {handleSettingsOnPress} />
        </View>
    )
}



const styles = StyleSheet.create({
    nav: {
        display: "flex",
        height: 50,
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: "row",
        alignItems: "flex-start"
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