import React from 'react';
import { NativeModules, } from 'react-native';

const DEFAULT_OPTIONS = {
  mediaType: 'photo',
  videoQuality: 'high',
  quality: 1,
  maxWidth: 0,
  maxHeight: 0,
  includeBase64: false,
  saveToPhotos: false,
};

export const launchCamera = (CameraOptions, Callback) => {
  NativeModules.ImagePickerManager.launchCamera(
    { ...DEFAULT_OPTIONS, ...CameraOptions },
    Callback,
  );
}

export const launchImageLibrary = (ImageLibraryOptions, Callback,) => {
  NativeModules.ImagePickerManager.launchImageLibrary(
    { ...DEFAULT_OPTIONS, ...ImageLibraryOptions },
    Callback,
  );
}