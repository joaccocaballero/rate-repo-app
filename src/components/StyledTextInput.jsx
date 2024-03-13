import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 5
    },
    error: {
        borderColor: 'red'
    }
})


export default function StyledTextInput({ style={}, error, ...props }) {
    const inputStyle = [
        styles.textInput,
        style,
        error && styles.error
    ]
    
    return (
    <TextInput style={inputStyle}  placeholderTextColor="#7a7a7a"  {...props}/>
  )
}
