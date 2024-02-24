export const getDataFromLocalStorage = async () => {
    console.log('getfrom function')
    const response = await JSON.parse(window.localStorage.getItem('ArgentBank'))
    const email = response.userEmail
    const password = response.userPassword
    return { email, password }
}
