/** Fetch Data from local storage */
export const getDataFromLocalStorage = async () => {
    console.log('getfrom function')
    const response = await JSON.parse(window.localStorage.getItem('ArgentBank'))
    return {
        email: response?.userEmail,
        password: response?.userPassword,
        token: response?.userToken,
    }
}

export const saveInLocalStorage = (email, password, token, rememberMe) => {
    console.log('saveIn function')
    let dataToSave = {}
    rememberMe
        ? (dataToSave = {
              userEmail: email,
              userPassword: password,
              userToken: token,
          })
        : (dataToSave = { userToken: token })
    const payload = JSON.stringify(dataToSave)
    window.localStorage.setItem('ArgentBank', payload)
}
