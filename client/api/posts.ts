import { AxiosInstance } from 'axios'
import client from './client'

export const createPost = (title: string, body: string) => {
  return client.post('posts', {title, body})
}