import React from 'react';
import { StatusBar } from 'react-native';
import { THEME } from '../../theme'

export const NavBar = () => {
  return (
    <StatusBar backgroundColor={THEME.NAV_COLOR} />
  )
}
