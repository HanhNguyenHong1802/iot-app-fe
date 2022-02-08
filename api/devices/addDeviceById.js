import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_BACK_END } from '../../constant';

let current = null
let currentCookie = null 

async function getCookie(name = '@userid') {
  current = await AsyncStorage.getItem(name)
}

async function getCookieUser(name = '@currentuser') {
  current = await AsyncStorage.getItem(name)
}

export default async function addDeviceByIdFetch(params = {}) {
  await getCookieUser()
  await getCookie()
  if (current !== null && currentCookie !== null) {
    try {
      const url = `${REACT_APP_BACK_END}/users/${current}/devices`
      await fetch(url, {
        method: 'POST',
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
