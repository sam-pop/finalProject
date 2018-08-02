import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "./components/Grid";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Container>
      <Header />
      <Route exact path="/" component={Home} />
    </Container>
  </Router>
);

export default App;
