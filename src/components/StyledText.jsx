import React from "react";
import theme  from "../theme";
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.normal,
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    subHeading: {
        fontSize: theme.fontSizes.subHeading
    },
    colorPrimary:{
        color: theme.colors.primary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    align: {
        textAlign: 'center'
    }
})

export default function StyledText({children, color, align, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subHeading' && styles.subHeading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.align,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps} >{children}</Text>
    )
}
