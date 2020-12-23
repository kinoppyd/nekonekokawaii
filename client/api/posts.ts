import { AxiosInstance } from 'axios'
import client from './client'

export const createPost = (title: string, body: string, picture?: {data: string, name: string}) => {
  return client.post('posts', {title, body, picture})
}