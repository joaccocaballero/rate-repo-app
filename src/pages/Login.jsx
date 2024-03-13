import React from 'react'
import { Button, Text, TextInput, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import { View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'
import { loginValidationSchema } from '../validationSchemas/login'
import StyledText from '../components/StyledText'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form:{
      margin: 12
    },
    error:{
      color: 'red',
      marginBottom: 20,
      fontSize: 12,
      marginTop: -5
      
    }
})

const FormikInputValue = ({name, ...props})=>{
  const [field, meta, helpers] = useField(name)
  
  return(
    <>
      <StyledTextInput
        error={meta.error} 
        value={field.value}
        onChangeText={value=>helpers.setValue(value)}
        
        {...props}
        />
      {meta.error && <StyledText style={styles.error} >{meta.error}</StyledText>}
    </>
  )
}

export default function LoginPage() {
  return (
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} 
    onSubmit={(values) => console.log(values)} >
      {
        ({handleSubmit})=>{
            return (
                <View style={styles.form}>
                    <FormikInputValue 
                      name='email'
                      placeholder='Email'
                    /> 
                     <FormikInputValue 
                        name='password'
                        secureTextEntry
                        placeholder='Password' 
                    />
                    <Button onPress={handleSubmit} title='Log In'></Button>
                </View>
            )
        }
      }
    </Formik>
  )
}
