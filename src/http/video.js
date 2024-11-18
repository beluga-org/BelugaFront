import { api } from '@/http/api-client'

export async function getAllVideosByUser(userId) {
  const response = await api.get(`api/video/user/${userId}`)

  const data = await response.json()

  return data.result
}
