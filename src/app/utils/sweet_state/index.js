import { createStore, createSubscriber, createHook } from "react-sweet-state";

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
    setLoaded: () => ({ setState }) => {
      setState({
        loaded: true,
      });
    },
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

      let projects = await fetch("/projects");
      projects = await projects.json();

      setState({
        loading: false,
        projects,
      });
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
