import auth from '@react-native-firebase/auth'


export const logoutUser = () => {
  auth().signOut()
}

export const signUpUser = async ({ name, email, password }) => {
  try {
    const user = await auth()
      .createUserWithEmailAndPassword(email, password)
    auth().currentUser.updateProfile({
      displayName: name,
    })
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const user = await auth()
      .signInWithEmailAndPassword(email, password)

      return {user};
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const sendEmailWithPassword = async (email) => {
  try {
    await auth().sendPasswordResetEmail(email)
    return {}
  } catch (error) {
    return {
      error: error.message,
    }
  }
}