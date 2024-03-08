import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import {Routes, Route, RedirectFunction as Redirect,} from 'react-router-native'
import LoginPage from '../pages/Login'
const Main = () => { 
    return (
        <View style={{ flexGrow: 1 }}>
            <AppBar/>
            <Routes>
                <Route path='/' exact element={<RepositoryList/>}/>
                <Route path='/signin' exact element={<LoginPage/>} />
            </Routes>
        </View>
    )
}

  
export default Main;