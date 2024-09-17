import './App.css';
import React, { useState, useEffect } from 'react';
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import { Nav, Navbar } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom';
import Signup from './components/SignupForm';
import Login from './components/LoginForm';


function url(path) {
  return process.env.NODE_ENV === 'development' ? `http://localhost:5500${path}` : path;
}

function App() {
 const [data, setData] = useState("Waiting for data to load!");
 
  useEffect(() => {
    fetch(url('/api/users'))
      .then(res => res.json())
      .then(apiData => setData(apiData.data))
      .catch(err => console.error(err));
  }, []);

  // console.log(data);

  return (
    
    <div className="App">
      <header className="App-header">
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justifyContent="center" wrap="wrap">
            <Grid item>
              <Typography variant="h4">Node User API App</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar><br/>
      <Toolbar>
        <Grid container justifyContent="center" wrap="wrap">
          <Grid item>
            <Typography variant="h5">Current API Status: {data}</Typography>
          </Grid>
        </Grid>
      </Toolbar>
        <Navbar collapseOnSelect expand="sm">
          <Navbar.Brand className="home-nav-btn" href='/' defaultactivekey="/">
            <Button
              variant="contained"
              color="success"
              type="submit"
              className="button-block"
            >Home
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-btn" href="/login">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="button-block"
              >Login
              </Button>
            </Nav.Link>
            <Nav.Link className="nav-btn" href="/signup">
              <Button
              variant="contained"
              color="primary"
              type="submit"
              className="button-block"
              >Signup
              </Button>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
    </Switch>
    </div>
  );
}

export default App;
