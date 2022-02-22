import { REACT_APP_BACK_END } from "../../constant"
import { getAsyncWithToken } from "../config"


export default async function getDeviceById(deviceId) {
  const url = `${REACT_APP_BACK_END}/devices/${deviceId}`
  const response = await getAsyncWithToken(url)
  return response?.data || {}
}