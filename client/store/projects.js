import axios from 'axios';
const initialState = [];

const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
const ADD_PROJECT = 'ADD_PROJECT';

// Actions
const getAllProjects = projects => {
  return {
    type: GET_ALL_PROJECTS,
    projects
  }
};

const addProject = project => {
  return {
    type: ADD_PROJECT,
    project
  }
};

export const getAllProjectsThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/projects');
      dispatch(getAllProjects(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export const addProjectThunk = (project) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`/api/projects`, project);
      const newData = await axios.get('/api/projects');
      dispatch(addProject(data));
      dispatch(getAllProjects(newData.data));
    } catch (error) {
      console.log(error);
    }
  }
}

// Reducer function
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return action.projects;;
    case ADD_PROJECT:
      return [...state, action.project];
    default:
      return state;
  }
}
