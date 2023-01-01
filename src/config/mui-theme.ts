import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    projectTypeColours?: Record<string, string>;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1df0ec",
    },
  },
  components: {
    MuiPopper: {
      defaultProps: {
        style: {
          color: "#e9eaf2",
          padding: "5px",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          "@media (max-width: 600px)": {
            minHeight: "64px",
          },
        },
      },
    },
  },
});

export default theme;
