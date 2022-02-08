import { REACT_APP_BACK_END } from "../../constant"
import { getAsyncWithToken } from "../config"

export async function getUserInfo() {
  const url = `${REACT_APP_BACK_END}/users/currentuser`
  const response = await getAsyncWithToken(url)
  return response?.data || []
}