import React, { useContext, useEffect, useReducer } from "react";
import {
  CLEAR_ALERT,
  CLEAR_VALUES,
  CREATE_PROJECT_BEGIN,
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_SUCCESS,
  DELETE_PROJECT_BEGIN,
  DISPLAY_ALERT,
  EDIT_PROJECT_BEGIN,
  EDIT_PROJECT_ERROR,
  EDIT_PROJECT_SUCCESS,
  FILTER_PROJECTS,
  GET_PROJECT_BEGIN,
  GET_PROJECT_SUCCESS,
  HANDLE_CHANGE,
  HANDLE_FILE_CHANGE,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  SET_EDIT_PROJECT,
  TOGGLE_SIDEBAR,
  UPLOAD_FILE_BEGIN,
  UPLOAD_FILE_ERROR,
  UPLOAD_FILE_SUCCESS,
} from "./action";
import axios from "axios";
import reducer from "./reducer";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

export const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  showAlert: false,
  alertType: "",
  alertText: "",
  isLoading: false,
  showSidebar: false,
  title: "",
  githubUrl: "",
  appUrl: "",
  imageUrl: "",
  description: "",
  uploadedFile: "",
  isEditing: false,
  editProjectId: "",
  projects: [],
  filteredproject: []
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const publicUrl = process.env.REACT_APP_PUBLIC_URL
  

  const authFetch = axios.create({
    baseURL: `${publicUrl}/api/v1`,
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addToLocalstorage = (data) => {
    const { user, token } = data;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };
  const removeFromLocalstorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const loginUser = async (userDetails) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post(`${publicUrl}/api/v1/auth/login`, userDetails);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
      addToLocalstorage(response.data);
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeFromLocalstorage();
  };
  const handleChangeGlobal = (data) => {
    dispatch({ type: HANDLE_CHANGE, payload: data });
  };
  const handleFileChange = (data) => {
    dispatch({ type: HANDLE_FILE_CHANGE, payload: data });
  };
  const uploadFileToServer = async () => {
    dispatch({ type: UPLOAD_FILE_BEGIN });
    try {
      const formData = new FormData();
      formData.append("file", state.uploadedFile);
      const response = await authFetch.post(
        "/project/uploadFile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: UPLOAD_FILE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: UPLOAD_FILE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };
  const createProject = async () => {
    dispatch({ type: CREATE_PROJECT_BEGIN });
    try {
      const { imageUrl, appUrl, githubUrl, title, description } = state;
      await authFetch.post("/project", {
        imageUrl,
        appUrl,
        title,
        githubUrl,
        description,
      });
      dispatch({ type: CREATE_PROJECT_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      dispatch({
        type: CREATE_PROJECT_ERROR,
        payload: { msg: error.response.data.msg },
      });
      if (error.response.status === 401) {
        setTimeout(() => {
          logoutUser();
        }, 3010);
      }
    }

    clearAlert();
  };

  const getProject = async () => {
    dispatch({ type: GET_PROJECT_BEGIN });
    try {
      const response = await authFetch("/project");
      dispatch({ type: GET_PROJECT_SUCCESS, payload: response.data });
    } catch (error) {
      
    }
  };

  const setEditProject = (id) => {
    dispatch({ type: SET_EDIT_PROJECT, payload: { id } });
  };

  const editProject = async () => {
    dispatch({ type: EDIT_PROJECT_BEGIN });

    try {
      const { imageUrl, appUrl, githubUrl, title, description, editProjectId } =
        state;
      await authFetch.patch(`/project/${editProjectId}`, {
        imageUrl,
        appUrl,
        githubUrl,
        title,
        description,
      });
      dispatch({ type: EDIT_PROJECT_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      dispatch({
        type: EDIT_PROJECT_ERROR,
        payload: { msg: error.response.data.msg },
      });
      if (error.response.status === 401) {
        setTimeout(() => {
          logoutUser();
        }, 3010);
      }
    }
    clearAlert();
  };
  const deleteProject = async (id) => {
    dispatch({ type: DELETE_PROJECT_BEGIN });
    try {
      await authFetch.delete(`/project/${id}`);
      getProject();
    } catch (error) {
      
      logoutUser();
    }
  };

  const filterProject = (searchDetails) => {
    dispatch({type: FILTER_PROJECTS, payload: searchDetails})
  }

  useEffect(() => {
    getProject()
    // eslint-disable-next-line
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        loginUser,
        toggleSideBar,
        logoutUser,
        handleChangeGlobal,
        handleFileChange,
        uploadFileToServer,
        createProject,
        clearValues,
        getProject,
        setEditProject,
        editProject,
        deleteProject,
        filterProject
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
