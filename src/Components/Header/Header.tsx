import React from 'react';

import {HeaderContainer} from './style'

interface IProps {
  title: string
}

const Header: React.FC<IProps> = ({title}) => {
 return (
   <HeaderContainer>
     <h1>{title}</h1>

   </HeaderContainer>
 )
}

export default Header;