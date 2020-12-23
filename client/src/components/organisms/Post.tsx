import React from 'react'

import { Base }from '../atoms/Base'
import { Heading } from '../atoms/Heading'
import styled from "styled-components";

export interface PostProps {
  title: string
  body: string
  picture?: string

}

const Post: React.FC<PostProps> = ({title, body, picture}) => {
  return(
    <Base>
      <Title type='blockTitle' tag='h1'>{title}</Title>
      <div>{body}</div>
      { picture ? <div><Pic src={picture} /></div> : null }
    </Base>
  )
}


const Title = styled(Heading)`
  background:linear-gradient(transparent 80%, #00C4CC 0%);
  margin-bottom: 32px;
`
const Pic = styled.img`
  width: 100%;
`
export default Post
