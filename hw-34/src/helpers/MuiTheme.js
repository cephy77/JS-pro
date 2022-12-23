import { createTheme } from "@mui/material";
const MuiTheme = createTheme({
  palette: {
    common: {
      black: "#283739",
      white: "#f5f5f5",
    },
    primary: {
      light: "#5db8c7",
      main: "#228896",
      dark: "#005b68",
      contrastText: "#f5f5f5",
    },
    secondary: {
      light: "#ddf863",
      main: "#a9c52f",
      dark: "#769400",
      contrastText: "#283739",
    },
    info: {
      main: "#283739",
      dark: "#001113",
      contrastText: "#a9c52f",
    },
  },
  typography: {
    fontFamily:
      "source-code-pro, 'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace",
  },
});

export default MuiTheme;
