import Main from "../../pages/Main.jsx";
import About from "../../pages/About.jsx";
import Hotels from "../../pages/Hotels";

export const route = {
  main: {
    element: <Main />,
    path: '/'
  },
  about: {
    element: <About />,
    path: '/about'
  },
  hotels: {
    element: <Hotels />,
    path: '/hotels'
  },
}
