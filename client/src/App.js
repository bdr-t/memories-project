import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          {/* <Route path="/posts/:id" exact component={PostDetails} /> */}
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
