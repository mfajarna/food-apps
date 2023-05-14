import { StyleSheet, Text, TextInput, View } from 'react-native'
import * as React from 'react'
import { Icon } from '@rneui/themed'
import { Colors } from '../../utils/colors/Colors'
import { responsiveFonts } from '../../helpers/FontsHelper'
import { Platform } from 'react-native'
import { Fonts } from '../../utils/fonts/Fonts'
import Gap from '../Gap/Gap'
import { GlobalStyles } from '../../helpers/GlobalStyles'

type Props = {
    placeholder: string,
    title: string,
    type?: string,
    restProps?: any,
    lengthPassword?: any
}


const InputAuth = ({placeholder, title, type, lengthPassword, ...restProps}: Props) => {

    const[showPassword, setShowPassword] = React.useState<boolean>(true);
    const toggleBtn = () => setShowPassword(state => !state);
    let textWarning = '';

    {
        lengthPassword == undefined ? textWarning :
        lengthPassword == 0 ? textWarning = '':
        lengthPassword < 6 ? textWarning = 'Password kurang dari 5 karakter!' :
        textWarning = ''
    }


    React.useEffect(() => {

    }, [lengthPassword])

    const renderIcon = () => {
        if(showPassword){
            return(
                <Icon
                    name='visibility'
                    type='material'
                    color={'black'}
                    size={20}
                    onPress={toggleBtn}
                    containerStyle={{
                        marginRight: 5
                    }}
                />
            )
        }else{
            return(
                <Icon
                    name='visibility-off'
                    type='material'
                    color={'black'}
                    size={20}
                    onPress={toggleBtn}
                    containerStyle={{
                        marginRight: 5
                    }}
                />
            )
        }
    }

    const renderTextInput = () => {
        switch(type){
            case 'password':
                    return(
                        <View>
                            <View style={styles.containerInput}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder={placeholder}
                                    placeholderTextColor={Colors.Grey}
                                    secureTextEntry={showPassword}
                                    {...restProps}
                                />
                
                                    {renderIcon()}
                                    
                            </View>
                            <Text style={[GlobalStyles.customText, {
                                fontFamily: Fonts.Medium,
                                fontSize: responsiveFonts(13),
                                color: 'red',
                                marginTop: 3,
                                marginLeft: 3
                            }]}>{textWarning}</Text>
                        </View>
                    )

            case 'konfirmasi-password':
                return(
                    <View>
                        <View style={styles.containerInput}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={placeholder}
                                placeholderTextColor={Colors.Grey}
                                secureTextEntry={showPassword}
                                {...restProps}
                            />
            
                                {renderIcon()}
                                
                        </View>
                    </View>
                )

            default: 
                    return(
                        <View style={styles.containerInput}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={placeholder}
                                placeholderTextColor={Colors.Grey}
                                {...restProps}
                            />
                        </View>
                    )
        }
    }

  return (
    <View>
        <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.SemiBold,
                color: Colors.Black,
                fontSize: responsiveFonts(15),
                letterSpacing: 0.3
            }]}>{title}</Text>
        <Gap height={8} />
        {renderTextInput()}
    </View>
  )
}

export default InputAuth

const styles = StyleSheet.create({
    containerInput:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: `${Colors.Grey}`,
        borderRadius: 20,
        color: Colors.Black,
        paddingHorizontal: 3,
    },
    textInput:{
        fontFamily: `${Fonts.Regular}`,
        color: `${Colors.Black}`,
        fontSize: responsiveFonts(14),
        flex: 1,
        padding: Platform.OS === "ios" ? 13 : 8,
    }
})