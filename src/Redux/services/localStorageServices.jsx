/** Fetch Data from local storage, if storage doest not exist we itinialize it */
export const getDataFromLocalStorage = async () => {
    console.log('getfrom function')
    let ArgentBankStorage = window.localStorage.getItem('ArgentBank')
    let response = ''
    ArgentBankStorage === null
        ? (response = initializeLocalStorage())
        : (response = await JSON.parse(ArgentBankStorage))

    return response
}

const initializeLocalStorage = async () => {
    const template = {
        email: '',
        password: '',
        token: '',
        username: '',
        isAuth: 'false',
    }
    const payload = JSON.stringify(template)
    window.localStorage.setItem('ArgentBank', payload)
    return template
}

export const updateLocalStorage = async (rememberMe, props) => {
    const old_data = await JSON.parse(window.localStorage.getItem('ArgentBank'))
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
