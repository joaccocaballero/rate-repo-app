import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";
import { StyleSheet } from "react-native";

const parseThousands = (value) => {    
    return value >= 100
    ? `${(value / 1000).toFixed(1)}k`
    : value;
}


const RepositoryStats = (props) => { 
    return(
        <View style={styles.container}>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
                <StyledText>Stars </StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>   
                <StyledText>Forks </StyledText>  
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{props.reviewCount}</StyledText>  
                <StyledText>Reviews </StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{props.ratingAverage}</StyledText>
                <StyledText>Rating </StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default RepositoryStats;