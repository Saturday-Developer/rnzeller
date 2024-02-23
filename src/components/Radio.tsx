import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface RadioProps{
    selected: boolean;
    onPress: () => void;
    children: React.ReactNode;
}

const Radio = ({selected, onPress, children}: RadioProps) => {
    return (
        <View>
        <Pressable onPress={onPress} style={[styles.container, selected && styles.selectedBackground]}>
            <View style={styles.outerCircle}>
            {
                selected && (
                    <View style={styles.innterCircle} />
                )
            }
            </View>
            {children}
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    selectedBackground:{
        backgroundColor: '#C6FCFf'
    },
    container:{
        flexDirection: 'row', alignItems: 'center', marginBottom: 10
    },
    outerCircle: {
        height: 20, width: 20, borderRadius: 10, borderWidth: 1, borderColor: '#87CEFA', alignItems: 'center', justifyContent: 'center',marginRight: 10
    },
    innterCircle: {
        height: 16, width: 16, borderRadius: 8, borderWidth: 1, borderColor: '#87CEFA', backgroundColor: '#87CEFA'
    }
})

export default Radio