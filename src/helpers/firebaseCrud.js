import { updateDoc, doc, arrayUnion } from 'firebase/firestore'
import { db } from '../firebase'

// delete movie
export const deleteMovie= async(deleteID, movies, user) => {
  try {
    const result = movies.filter(movie => movie.id !== deleteID)
    await updateDoc(doc(db, 'users', `${user?.email}`), {
      favMovies: result
    })
  } catch(error) {
    console.log(error);
  }
}

// save a movie
export const saveMovie = async (movie, user, fnc)=> {
  if(user?.email) {
    fnc()
    await updateDoc(doc(db, 'users', `${user?.email}`), {
      favMovies: arrayUnion({
        id: movie.id,
        title: movie.title,
        img: movie.poster_path
      })
    })
  } else alert('Login to save your favorite movies')
}
