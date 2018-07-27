import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "./components/Grid";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const App = () => (
  <Router>
    <Container>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Container>
  </Router>
);

export default App;
