import { createTheme, ThemeProvider, useTheme } from "@mui/system";

const customTheme = (outerTheme) => 
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        MuiOutlinedInput: {
            styleOverrides: {
              notchedOutline: {
                borderColor: 'var(--TextField-brandBorderColor)',
              },
              root: {
                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                  borderColor: 'var(--TextField-brandBorderHoverColor)',
                },
                [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                  borderColor: 'var(--TextField-brandBorderFocusedColor)',
                },
              },
            },
          },
    })