export const isAuthenticated = () => {
    if (typeof window == "undefined")
        return false
    if (sessionStorage.getItem('jwt'))
        return true
    else
        return false
}

export const setJWT = (token) => {
    if(typeof window !== "undefined")
        sessionStorage.setItem('jwt', JSON.stringify(token))
}

export const setUser= (user) => {
    if(typeof window !== "undefined")
        sessionStorage.setItem('user', JSON.stringify(user))
}

export const getJWT = () => {
    if(sessionStorage.getItem('jwt'))
        return JSON.parse(sessionStorage.getItem('jwt'))
}

export const getUser = () => {
    if(sessionStorage.getItem('user'))
        return JSON.parse(sessionStorage.getItem('user'))
}

export const signOut = () => {
    if(typeof window !== "undefined")
        sessionStorage.removeItem('jwt')
}