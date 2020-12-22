import React from 'react'
import styled from 'styled-components'

export const Header: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return(
    <HeaderArea>
      <Logo>nekonekokawaii</Logo>
      {children}
    </HeaderArea>
  )
}

const HeaderArea = styled.header`
  height: 50px;
  padding: 0 4px;
  background-color: #00C4CC;
  display: flex;
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
