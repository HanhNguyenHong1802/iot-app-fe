import { REACT_APP_BACK_END } from "../../constant"
import { postAsync } from "../config"

export default async function signup(data) {
  const url = `${REACT_APP_BACK_END}/users`
  const response = await postAsync(url, data)
  return response?.data || []
}