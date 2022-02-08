import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_BACK_END } from '../../constant';

let currentCookie = null 


async function getCookieUser(name = '@currentuser') {
  currentCookie = await AsyncStorage.getItem(name)
}

export default async function updateDeviceByIdFetch(deviceId, params = {}) {
  await getCookieUser()
  if (currentCookie !== null) {
    try {
      const url = `${REACT_APP_BACK_END}/devices/${deviceId}`
      await fetch(url, {
        method: 'PUT',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + currentCookie,
          'Accept': 'application/json',
        },
        body: JSON.stringify(params)
      },
      ).then(data => { return data?.data || [] })
        .catch(err => console.log(`err`, err))
    } catch (error) {

    }
  }


}
