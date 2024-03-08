import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'

import StyledText from './StyledText'
import Constants from  'expo-constants'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'
import { TouchableWithoutFeedback } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableHighlight } from 'react-native-web'

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        
      },
      scroll:{  
        paddingBottom: 15,
      },
      text: {
          color: theme.appBar.textSecondary,
          paddingHorizontal: 10,
      },
      active:{
        color: theme.appBar.textPrimary,
      }
})

function AppBarTab({ children ,to}) {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]
  
  return(
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}


const AppBar = () => {
  const { pathname } = useLocation()
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        <AppBarTab to='/signin'>Sign In</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
