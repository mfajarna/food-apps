import * as React from "react";
import { Dimensions, Platform } from 'react-native';

const{width, height} = Dimensions.get('window');

const responsiveFonts = (fontSize: number) => {
    const responsiveFontSize: number = fontSize * (Math.min(width, height) / 450);

    return Platform.OS === 'ios' ? fontSize : responsiveFontSize;
}

const capitalizeFonts = (str: string) => {
    return str.toUpperCase( );
}


export {responsiveFonts, capitalizeFonts}

