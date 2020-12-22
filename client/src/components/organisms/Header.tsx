import React from 'react'
import styled from 'styled-components'

import { Header } from '../atoms/Header'
import { Session } from '../../../interfaces/session'

export const LoginHeader: React.FC<{session?: Session}> = ({session}) => {
  return(
    <Header>
      <Box>
        {
          session
          ? <Icon src={session.avatar} />
          : <a href="/auth/google_oauth2">Login</a>
        }
      </Box>
    </Header>
  )
}

const  Box = styled.div`
  margin: 0 0 0 auto;
  padding: 8px;
`
const Icon = styled.img`
  width: 40px;
  height: 40px;
`

export default LoginHeader