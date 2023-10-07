export const getListsStart = () => ({
    type: "GET_LISTS_START",
  });
  
  export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
  });
  
  export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
  });
  
  export const createListStart = () => ({
    type: "CREATE_MOVIE_START",
  });
  
  export const createListSuccess = (list) => ({
    type: "CREATE_List_SUCCESS",
    payload: list,
  });
  
  export const createListFailure = () => ({
    type: "CREATE_List_FAILURE",
  });
  
  export const updateListStart = () => ({
    type: "UPDATE_List_START",
  });
  
  export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_List_SUCCESS",
    payload: movie,
  });
  
  export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE",
  });
  
  export const deleteListsStart = () => ({
    type: "DELETE_LISTS_START",
  });
  
  export const deleteListsSuccess = (id) => ({
    type: "DELETE_LISTS_SUCCESS",
    payload: id,
  });
  
  export const deleteListsFailure = () => ({
    type: "DELETE_LISTS_FAILURE",
  });