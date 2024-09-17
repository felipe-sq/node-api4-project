import React from "react";
import { Button, TextField, Grid, Paper, Typography, Link } from "@material-ui/core";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password:"", authflag:1 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ username: event.state.username, password: event.state.password });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      axios.post('http://localhost:5500/api/login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(res => {
        console.log(res);
        alert("You have successfully logged in!");
        // this.props.history.push("/home");
      }).catch(err => {
        console.log(err);
        alert("You have not logged in!");
      });
    } else {
      alert('Incorrect Credentials!');
    }
  }
  render() {
    return (
    <div>
      <Grid container spacing={0} justifyContent="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
            className="login-form"
          >
          <Paper
            variant="elevation"
            elevation={2}
            className="login-background"
          >
        <Grid item>
          <Typography component="h1" variant="h5">
            Login
          </Typography><br/>
        </Grid>
        <Grid item>
          <form onSubmit={this.handleSubmit}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              type="text"
              placeholder="Username"
              fullWidth
              name="username"
              variant="outlined"
              value={this.state.username}
              onChange={(event) =>
              this.setState({
              [event.target.name]: event.target.value,
              })
              }
              required
              autoFocus
            />
          </Grid>
          <Grid item>
            <TextField
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              variant="outlined"
              value={this.state.password}
              onChange={(event) =>
              this.setState({
              [event.target.name]: event.target.value,
              })
              }
              required
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="button-block"
            >
            Submit
            </Button>
          </Grid>
        </Grid>
        </form>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            Forgot Password?
          </Link>
        </Grid>
        </Paper>
        </Grid>
      </Grid>
      </Grid>
      </div>
    );
  }
}
export default Login;