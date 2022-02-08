import { REACT_APP_BACK_END } from "../../constant"
import { postAsyncWithToken } from "../config"

export async function logoutUser() {
  const url = `${REACT_APP_BACK_END}/users/logout`
  const response = await postAsyncWithToken(url)
  return response?.data || []
}