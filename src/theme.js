import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
		background: {
			default: "#070c1e"
		},
		focused: {
			color: "#1D1916"
		}
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  },
	focused: {
		color: "#1D1916",
	},
  components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "rgba(7, 12, 30, 0.8)",
					boxShadow: "none",
					padding: "24px",
					backdropFilter: "blur(9.5px)"
				},
			}
		},
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
		MuiTextField: {
			styleOverrides: {
				root: {
					border: "0",
					borderRadius: "8px",
					"&.Mui-focused": {
						color: "#1D1916"
					}
				},
				input: {
					fontSize: "16px",
					lineHeight: "18px",
					color: "#070c1e",
					padding: "16px 12px"
				},
				inputLabel: {
					fontSize: "16px",
					color: "#070c1e",
				}
			}
		},
		MuiBackdrop: {
			styleOverrides: {
				root: {
					background: "rgba(7, 12, 30, 0.7)",
					backdropFilter: "blur(9.5px)"
				}
			}
		},
		MuiInput: {
			styleOverrides: {
				root: {
					"&::after": {
						borderColor: "rgba(164, 131, 111, 1)",
					}
				}
			}
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontSize: "16px",
					lineHeight: "18px",
					color: "#070c1e",
					":after": {
						borderColor: "#fff8f2",
					},
					":before": {
						borderBottom: "1px solid rgba(164, 131, 111, 0.5) !important",
					}
				}
			}			
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					fontSize: "16px",
					color: "#070c1e",
					fontWeight: "600",
					"&.Mui-focused": {
						color: "#1D1916"
					}
				}
			}
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					"&.Mui-expanded": {
						margin: 0,
					}
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					"&:hover": {
						background: "transparent !important",
					}
				}
			}
		}
  },
});

export default theme;
