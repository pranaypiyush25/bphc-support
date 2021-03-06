import React from "react";
import ReactRoundedImage from "react-rounded-image";
import bphc from "../../img/inside-bphc.jpg";
import MyPhoto from "../../img/inside-bphc.jpeg";
import {
  TextField,
  Button,
  Typography,
  Paper,
  makeStyles,
  InputAdornment,
  Grid,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  main: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50vw",
    alignItems: "center",
    margin: "50px",
    zIndex: "10"
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: theme.spacing(2),
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));

function Account() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Paper className={classes.paper} variant="outlined">
        <Grid
          container
          className={`${classes.root} ${classes.form}`}
          spacing={6}
          direction="column"
          justify="space-around"
        >
          <Grid item xs={12}>
            <Typography variant="h4">Profile</Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactRoundedImage
              image={MyPhoto}
              roundedColor="#321124"
              imageWidth="250"
              imageHeight="250"
              roundedSize="10"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Name:</InputAdornment>
                ),
              }}
              fullWidth
              autoComplete="off"
              value="Pranay Piyush"
              size="small"
            />
            <TextField
              name="Email"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Email:</InputAdornment>
                ),
              }}
              fullWidth
              autoComplete="off"
              value="f20180369@hyderabad.bits-pilani.ac.in"
              size="small"
            />
            <TextField
              name="Hostel"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Hostel:</InputAdornment>
                ),
              }}
              fullWidth
              autoComplete="off"
              size="small"
            />
            <TextField
              name="Room No."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Room No.</InputAdornment>
                ),
              }}
              fullWidth
              autoComplete="off"
              size="small"
            />
            <TextField
              name="Phone No."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Phone No.</InputAdornment>
                ),
              }}
              fullWidth
              autoComplete="off"
              size="small"
            />
            <div className={classes.fileInput}></div>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Account;
