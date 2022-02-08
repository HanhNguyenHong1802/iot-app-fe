import { getAsyncWithToken } from "../config"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { REACT_APP_BACK_END } from "../../constant"
async function getCookie(name = '@userid') {
  let tmp = await AsyncStorage.getItem(name)
  return tmp
}

export default async function getUserDevices() {
  try {
    const tmp = await getCookie()
    const url = `${REACT_APP_BACK_END}/users/${tmp}`
    const response = await getAsyncWithToken(url)
    return response?.data || {}
  } catch (error) {

  }

}