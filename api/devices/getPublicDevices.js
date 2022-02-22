import { REACT_APP_BACK_END } from '../../constant';
import { getAsync } from "../config"
export default async function getPublicDevices() {
  let url = `${REACT_APP_BACK_END}/devices/publicDevices`
  const response = await getAsync(url)
  return response?.data || []
}