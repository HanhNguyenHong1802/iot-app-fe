import { REACT_APP_BACK_END } from "../../constant"
import { postAsyncWithToken } from "../config"
import AsyncStorage from '@react-native-async-storage/async-storage';

let current 

async function getCookieUser(name = '@currentuser') {
  current = await AsyncStorage.getItem('@currentuser')
}

export async function logoutUser() {
  try {
    
    await getCookieUser()
    console.log('first')
    if (current !== null) {

      const url = `${REACT_APP_BACK_END}/users/logout`
      await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + current,
          'Accept': 'application/json',
        }
      },
      ).then(data => { console.log('data', data?.statusText); return data?.statusText || '' })
        .catch(err => console.log(`err`, err))


    }
  } catch (error) {

  }
}