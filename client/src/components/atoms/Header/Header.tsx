import React from 'react'
import styled from 'styled-components'

export const Header: React.FC<{}> = () => {
  return(
    <HeaderArea>
      <Logo>nekonekokawaii</Logo>
    </HeaderArea>
  )
}

const HeaderArea = styled.header`
  height: 50px;
  padding: 0 4px;
  background-color: #00C4CC;
`

const Logo = styled.span`
  margin: 0px 4px;
  text-align:center;
  font-weight:normal;
  color:#EEE;
  font-size:42px;
  letter-spacing:-4px;
`

export default Header
