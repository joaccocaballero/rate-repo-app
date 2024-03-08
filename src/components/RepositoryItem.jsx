import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";
import RepositoryStats from "./RepositoryStats";

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, language}) => {
    return (
        <View style={{flexDirection: 'row', paddingBottom: 2}}>
            <View style={{paddingRight: 10}}>
                <Image style={styles.image} source={{uri: ownerAvatarUrl}} />
            </View>
            {/*flex: 1 makes the view take the remaining space*/}
            <View style={{flex: 1, justifyContent: 'center'}}>
                <StyledText fontWeight='bold' fontSize='subHeading' blue >{fullName}</StyledText>
                <StyledText color='secondary'>{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
        </View>
    )
}


const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props}/>
            <RepositoryStats {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language: {
       padding: 4,
       color: theme.colors.white,
       backgroundColor: '#09f',
       alignSelf: 'flex-start',
       borderRadius: 4,
       overflow: 'hidden',
       marginTop: 4,
       marginBottom: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem;