import { Image } from 'react-native'
import React from 'react'

export default function ImageView({placeHolderImageView, selectedImage, width, height, radius} : any) {
const imageSource = selectedImage ? {uri: selectedImage} : {uri: placeHolderImageView}

  return <Image source={imageSource} style={{width: width, height: height, borderRadius: radius, margin: 10}} />
}