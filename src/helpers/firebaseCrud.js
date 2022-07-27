import { updateDoc, doc, arrayUnion } from 'firebase/firestore'
import { db } from '../firebase'

// delete a movie
export const deleteMovie= async(deleteID, shows, user) => {
  try {
    const result = shows.filter(show => show.id !== deleteID)
    await updateDoc(doc(db, 'users', `${user?.email}`), {
      favMovies: result,
    })
  } catch(error) {
    console.log(error);
  }
}

// delete a tv show
export const deleteTvShow= async(deleteID, shows, user) => {
  try {
    const result = shows.filter(show => show.id !== deleteID)
    await updateDoc(doc(db, 'users', `${user?.email}`), {
      favTvShows: result,
    })
  } catch(error) {
    console.log(error);
  }
}

// save a movie
export const saveMovie = async (show, user, fnc)=> {
  if(user?.email) {
    fnc()
    await updateDoc(doc(db, 'users', `${user?.email}`), {
      favMovies: arrayUnion({
        id: show.id,
        title: show.title,
        img: show.poster_path
      })
    })
  } else alert('Login to save your favorite movies')
}

// save a tv show
export const saveTvShow = async (show, user, fnc)=> {
  if(user?.email) {
    fnc()
    await updateDoc(doc(db, 'users', `${user?.email}`), {
      favTvShows: arrayUnion({
        id: show.id,
        title: show.name,
        img: show.poster_path
      })
    })
  } else alert('Login to save your favorite movies')
}
