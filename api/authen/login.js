import { REACT_APP_BACK_END } from "../../constant"
import { postAsync } from "../config"

export default async function login(params) {
  const url = `${REACT_APP_BACK_END}/users/login`
  const response = await postAsync(url, params)
  return response?.data || []
}