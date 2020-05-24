import { firebase, googleAuthProvider } from './fireBase'

export const startLogin = () => {
    return () => {
        firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const logOut = () => {
    return () => {
        firebase.auth().signOut()
    }
}