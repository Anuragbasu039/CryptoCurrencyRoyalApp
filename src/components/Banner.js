import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(https://images.vexels.com/media/users/3/329228/raw/77682d086aea37d3b84d5e813fec4bac-crypto-currency-banner-template.jpg)",
    backgroundSize: "cover", // Ensures the image covers the entire banner
    backgroundPosition: "center", // Centers the image
    [theme.breakpoints.down("sm")]: {
      height: 300, // Smaller height for small screens
    },
  },
  bannerContent: {
    height: "100%", // Use full height of the banner
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 15, // Adjust padding for small screens
    },
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "50%", // Increase height for small screens
    },
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "40%", // Adjust carousel height for small screens
    },
  },
  title: {
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem", // Adjust font size for small screens
    },
  },
  subtitle: {
    color: "red",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem", // Adjust font size for small screens
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography variant="h2" className={classes.title}>
            CryptoCurrency
          </Typography>
          <Typography variant="subtitle2" className={classes.subtitle}>
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
