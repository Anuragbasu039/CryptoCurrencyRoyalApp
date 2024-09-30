import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import logo from "../assets/Crypto.png"; // Import the logo image

const useStyle = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  logo: {
    height: 40, // Set the height of the logo
    marginRight: 10, // Add some margin between the logo and title
    cursor: "pointer",
  },
}));
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const classes = useStyle();
  const history = useNavigate();
  const { currency, setCurrency } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            {/* Add the logo here */}
            <img
              src={logo}
              style={{width: 100, height:100}}
              alt="CryptoRoyal Logo"
              className={classes.logo}
              onClick={() => history("../")} // Navigate to home on logo click
            />
            <Typography
              onClick={() => history("../")}
              className={classes.title}
            >
              <h2>CryptoRoyal App</h2>
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
