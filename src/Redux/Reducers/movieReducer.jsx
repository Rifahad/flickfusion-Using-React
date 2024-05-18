const movieReducer =(state=[], action)=>{
  if(action.type == 'Movies'){
    const updateMovies = [...state,action.payload]
    localStorage.setItem('Movies', JSON.stringify(updateMovies))
    console.log(updateMovies)
    return updateMovies
  }
  return state
}

export default movieReducer