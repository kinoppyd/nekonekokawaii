import axios from 'axios'
import axiosCookieJarSupport from 'axios-cookiejar-support'
import { CookieJar } from 'tough-cookie'

axiosCookieJarSupport(axios)
const element: HTMLMetaElement =  document.getElementsByName('csrf-token')[0] as HTMLMetaElement
axios.defaults.headers.common['X-CSRF-Token'] = element.content
const cookieJar = new CookieJar()

const client = axios.create({jar: cookieJar})

export default client