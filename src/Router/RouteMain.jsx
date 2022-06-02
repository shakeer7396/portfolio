import { Route, Switch } from "react-router-dom";
import About from "../Components/About/About";
import Hero from "../Components/Hero/Hero";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects.jsx";
import Contact from "../Components/Contact/Contact";

export function RouteMain() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Route>
        <Route path="/projects">
     
          <Projects />
          
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/about-me">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}
