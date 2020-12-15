import { createStore, createSubscriber, createHook } from "react-sweet-state";
import axios from "axios";

const pathname = window.location.pathname;

const isDark = () => {
  if (pathname === "/" || pathname === "/portfolio" || pathname === "/contact")
    return 0;

  return 1;
};
const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)
    ? true
    : false;

const Store = createStore({
  initialState: {
    isdark: isDark(),
    projects: null,
    loading: false,
    loaded: false,
    isMobile: isMobile(),
    logged: false,
  },
  actions: {
    setLogged: (bool, token) => ({ setState }) => {
      localStorage.setItem("auth-token", token);
      setState({
        logged: bool,
      });
    },
    setIsDark: (mode) => ({ setState }) => {
      setState({
        isdark: mode,
      });
    },
    setProjects: () => async ({ setState, getState }) => {
      if (getState().loading === true) return;

      setState({
        loading: true,
      });

      axios(`${process.env.REACT_APP_URL}/projects`)
        .then(({ data }) =>
          setState({
            loading: false,
            projects: data,
            loaded: true,
          })
        )
        .catch((err) => console.log(err));
    },
    addProject: (obj) => ({ setState, getState }) => {
      setState({
        ...getState(),
        projects: [...getState().projects, obj],
      });
    },
    deleteProject: (_id) => ({ setState, getState }) => {
      const projects = getState().projects.filter(
        (project) => project._id !== _id
      );
      setState({ ...getState(), projects });
    },
    updateProject: (obj) => ({ setState, getState }) => {
      const projects = getState().projects.filter(
        (project) => project._id !== obj._id
      );
      projects.push(obj);

      setState({
        ...getState(),
        projects,
      });
    },
  },
});

export const CounterSubscriber = createSubscriber(Store);
export const useCounter = createHook(Store);
