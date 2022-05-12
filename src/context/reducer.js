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


const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "please provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertType: "", alertText: "" };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    const { user, token } = action.payload;
    return {
      ...state,
      isLoading: false,
      user,
      token,
      showAlert: true,
      alertType: "success",
      alertText: "Successfully login!",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    const text = action.payload.msg;
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: text,
      isLoading: false,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    const initialState = {
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
    };
    return {...state, ...initialState, user: null, token: null };
  }
  if (action.type === HANDLE_CHANGE) {
    const { name, value } = action.payload;
    return { ...state, [name]: value };
  }
  if (action.type === HANDLE_FILE_CHANGE) {
    return { ...state, uploadedFile: action.payload };
  }
  if (action.type === UPLOAD_FILE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPLOAD_FILE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      imageUrl: action.payload.image_url,
      uploadedFile: "",
      showAlert: true,
      alertType: "success",
      alertText: "file successfully uploaded",
    };
  }
  if (action.type === UPLOAD_FILE_ERROR) {
    const text = action.payload.msg;
    return {
      ...state,
      showAlert: true,
      isLoading: false,
      alertType: "danger",
      alertText: text,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      uploadedFile: "",
      imageUrl: "",
      githubUrl: "",
      appUrl: "",
      title: "",
      description: "",
      editProjectId: "",
    };
    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === CREATE_PROJECT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Project added successfully",
    };
  }
  if (action.type === CREATE_PROJECT_ERROR) {
    const text = action.payload.msg;
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: text,
    };
  }
  if (action.type === GET_PROJECT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_PROJECT_SUCCESS) {
    const projects = action.payload.projects;
    return {
      ...state,
      isLoading: false,
      projects,
      filteredproject: [...projects],
    };
  }
  if (action.type === SET_EDIT_PROJECT) {
    const project = state.projects.find(
      (project) => project._id === action.payload.id
    );

    const { imageUrl, appUrl, githubUrl, title, description, _id } = project;
    return {
      ...state,
      imageUrl,
      appUrl,
      githubUrl,
      title,
      description,
      isEditing: true,
      editProjectId: _id,
    };
  }
  if (action.type === EDIT_PROJECT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "project updated successfully!",
    };
  }
  if (action.type === EDIT_PROJECT_ERROR) {
    const text = action.payload.msg;
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: text,
    };
  }
  if (action.type === DELETE_PROJECT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === FILTER_PROJECTS) {
    let tempProject = [...state.projects];
    if (action.payload) {
      tempProject = state.projects.filter((project) =>
        project.title.toLowerCase().match(action.payload.toLowerCase())
      );
    }

    return { ...state, filteredproject: tempProject };
  }
  throw new Error(`no such action as: ${action.type}`);
};

export default reducer;
