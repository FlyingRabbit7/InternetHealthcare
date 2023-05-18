const devBaseUrl = 'https://boolunion.openai.azure.com'
const proBaseUrl = 'http:xxx//xxxx.xx.com'
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl
export const TIMEOUT = 5000