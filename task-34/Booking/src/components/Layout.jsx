import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import {Header} from "./Header";
import {ThemeProvider, createTheme, CssBaseline, Container} from "@mui/material";
import {orange} from "@mui/material/colors";
import store from "../redux/store.js";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    }
  }
})

export default function Layout() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container component="main" sx={{ marginTop: '20px' }}>
          <Outlet />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}
