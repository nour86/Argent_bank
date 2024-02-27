const ABStorageTemplate = {
    email: '',
    password: '',
    token: '',
    username: '',
}

/** Fetch Data from local storage, if storage doest not exist we itinialize it */
export const getDataFromLocalStorage = async () => {
    const ArgentBankStorage = window.localStorage.getItem('ArgentBank')
    console.log('getfrom function')
    let response = ''
    ArgentBankStorage === null
        ? (response = initializeLocalStorage())
        : (response = await JSON.parse(ArgentBankStorage))

    return response
}

const initializeLocalStorage = async () => {
    const ArgentBankStorage = window.localStorage.getItem('ArgentBank')
    const payload = JSON.stringify(ABStorageTemplate)
    window.localStorage.setItem('ArgentBank', payload)
    return payload
}

export const updateLocalStorage = async (rememberMe, props) => {
    const ArgentBankStorage = window.localStorage.getItem('ArgentBank')
    const old_data = await JSON.parse(ArgentBankStorage)
    let new_data = {}
    props.forEach((prop) => (new_data = { ...new_data, ...prop }))

    let updated_data = { ...old_data, ...new_data }

    if (!rememberMe) {
        updated_data.email = ''
        updated_data.password = ''
    }
    console.log(updated_data)
    const payload = JSON.stringify(updated_data)
    window.localStorage.setItem('ArgentBank', payload)
}
export const removeTokenFromLocalStorage = async () => {
    const ArgentBankStorage = window.localStorage.getItem('ArgentBank')
    const old_data = await JSON.parse(ArgentBankStorage)

    const updated_data = { ...old_data, ...{ token: '' } }

    const payload = JSON.stringify(updated_data)
    window.localStorage.setItem('ArgentBank', payload)
}
