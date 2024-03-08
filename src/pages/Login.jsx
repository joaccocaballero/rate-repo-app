import React from 'react'
import { Button, Text, TextInput, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import { View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form:{
      margin: 12
    },
})

const FormikInputValue = ({name, ...props})=>{
  const [field, meta, helpers] = useField(name)
  
  return(
    <StyledTextInput
      value={field.value}
      onChangeText={value=>helpers.setValue(value)}
      {...props}
    />
    {meta.error && <StyledText style={  } }
  )
}

export default function LoginPage() {
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => {console.log(values)}} >
      {
        ({handleChange, handleSubmit, values})=>{
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
