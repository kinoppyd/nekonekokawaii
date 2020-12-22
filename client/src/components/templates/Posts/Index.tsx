import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, PrimaryButton, Textarea } from 'smarthr-ui'

import Post, { PostProps } from '../../organisms/Post'
import { createPost } from '../../../../api/posts'
import { Session } from '../../../../interfaces/session'

export interface PostsTemplateProps {
  posts: PostProps[]
  session?: Session
}

const PostsTemplate: React.FC<PostsTemplateProps> = ({posts, session}) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = () => {
    createPost(title, body)
    .then(() => {document.location.reload()})
  } 

  return(
    <Content>
      {
        session
          ? <List>
            <li>
              <p>タイトル</p>
              <Input type="text" onChange={(e) => setTitle(e.target.value)} />
            </li>
            <li>
              <p>本文</p>
              <Textarea onChange={(e) => setBody(e.target.value)} />
            </li>
            <li>
              <PrimaryButton onClick={handleSubmit}>submit</PrimaryButton>
            </li>
          </List>
          : null
      }
      {posts.map(post => (
        <Post {...post} />
      ))}
    </Content>
  )
}

const Content = styled.div`
  margin: 32px 10%;
  min-width: 800px;
`
const List = styled.ul`
  padding: 0 24px;
  list-style: none;

  & > li:not(:first-child) {
    margin-top: 16px;
  }
`

export default PostsTemplate
