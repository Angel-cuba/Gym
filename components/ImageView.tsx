import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ImageView({placeHolderImageView, selectedImage} : any) {
const imageSource = selectedImage ? {uri: selectedImage} : placeHolderImageView

  return <Image source={imageSource} style={{width: 200, height: 200}} />
}