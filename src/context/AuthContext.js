import { createContext, useEffect, useState } from 'react'
import {auth} from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export const AuthContext = createContext()


export function AuthProvider({children}) {

  const [user, setUser] = useState({})

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => setUser(currentUser))

    return () => unsubscribe()
  },[])

  return (
    <AuthContext.Provider value={{
      signUp,
      login,
      logout,
      user
    }}>
      <>{children}</>
    </AuthContext.Provider>
  );
}

