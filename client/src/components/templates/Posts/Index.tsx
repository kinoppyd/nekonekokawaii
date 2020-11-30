import React from 'react'
import styled from 'styled-components'

import Post, { PostProps } from '../../organisms/Post'

export interface PostsTemplateProps {
  posts: PostProps[]
}

const PostsTemplate: React.FC<PostsTemplateProps> = ({posts}) => {
  return(
    <Content>
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

export default PostsTemplate
