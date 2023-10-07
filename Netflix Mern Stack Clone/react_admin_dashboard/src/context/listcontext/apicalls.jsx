import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListsFailure,
  deleteListsStart,
  deleteListsSuccess,
  getListsStart,
  getListsSuccess,
  getListsFailure,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("http://localhost:8000/api/list/allmovielist/", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("http://localhost:8000/api/list/addlists", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteLists = async (id, dispatch) => {
  dispatch(deleteListsStart());
  try {
    await axios.delete("http://localhost:8000/api/list/delete/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListsSuccess(id));
  } catch (err) {
    dispatch(deleteListsFailure());
  }
};