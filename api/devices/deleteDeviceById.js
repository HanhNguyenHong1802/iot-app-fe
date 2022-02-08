import { REACT_APP_BACK_END } from "../../constant";
import { deleteAsyncWithToken } from "../config";



export default async function deleteDeviceById(deviceId) {
  const url = `${REACT_APP_BACK_END}/devices/${deviceId}`
  const response = await deleteAsyncWithToken(url)
  return response?.data || []
}