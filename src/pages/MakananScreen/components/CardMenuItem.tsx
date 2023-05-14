import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { ImgBaksoItem } from '../../../assets/img/img'
import { Icon } from '@rneui/themed'
import { GlobalStyles } from '../../../helpers/GlobalStyles'
import { Fonts } from '../../../utils/fonts/Fonts'
import { Colors } from '../../../utils/colors/Colors'
import { responsiveFonts } from '../../../helpers/FontsHelper'
import Gap from '../../../components/Gap/Gap'

type CardProps = {
    title: string,
    harga: number,
    id?: number,
    total?: any,
    onPress?: void
}

const CardMenuItem = ({title, harga, id, total}: CardProps) => {
    const data = {
        id: id,
        nama: title,
        harga
    }

    total = data;
    const[jumlah, setJumlah] = React.useState(0);

    const handleClickAddJumlah = () => setJumlah(jumlah+1)
    const handleClickRemoveJumlah = () => setJumlah(jumlah-1)

  return (
    <View style={styles.container}>
     <View style={{flexDirection: 'row',}}>
        <Image source={ImgBaksoItem} resizeMode='cover' style={{
            width: 80,
            height: 80,
            borderRadius: 20
        }} />

        <View style={{marginLeft: 10, alignItems: 'flex-start', marginTop: 5}}>
            <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.SemiBold,
                color: Colors.DarkBlue,
                fontSize: responsiveFonts(15)
            }]}>{title}</Text>
            <Gap height={5} />
            <Text style={[GlobalStyles.customText, {
                fontFamily: Fonts.Medium,
                color: Colors.Grey,
                fontSize: responsiveFonts(13)
            }]}>Rp. {harga}</Text>
        </View>
     </View>

     <View style={{
         justifyContent: 'flex-end',
         marginRight: 5
     }}>
         {jumlah == 0 ? (
            <TouchableOpacity onPress={handleClickAddJumlah} style={{
                backgroundColor: Colors.Secondary,
                borderRadius: 5,
            }}>
                <Icon name='add' color={'white'} />
            </TouchableOpacity>
         ) : 
         jumlah > 0 ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={handleClickRemoveJumlah} style={{
                    backgroundColor: Colors.Secondary,
                    borderRadius: 5,
                }}>
                    <Icon name='remove' color={'white'} />
                </TouchableOpacity>

                <View style={{
                    marginHorizontal: 5
                }}>
                    <Text>{jumlah}</Text>
                </View>
           
                <TouchableOpacity onPress={handleClickAddJumlah} style={{
                    backgroundColor: Colors.Secondary,
                    borderRadius: 5,
                }}>
                    <Icon name='add' color={'white'} />
                </TouchableOpacity>

            </View>
            
         )
         :
         (
             <Text>A</Text>
         )
        }
       
     </View>
    </View>
  )
}

export default CardMenuItem

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between'
    }
})