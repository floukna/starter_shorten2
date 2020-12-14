import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Snowfall from "react-snowfall";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Lottie from "react-lottie";
import FadeIn from "react-fade-in";

import loadingData from "./loading/loading.json";

import IndexPage from "./pages/index";
import ShortUrlPage from "./pages/shorturl";

const defaultOptions: any = {
  loop: true,
  autoplay: true,
  animationData: loadingData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Snowfall />
      <Switch>
        <Route path="/" exact>
          {loading ? (
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          ) : (
            <FadeIn>
              <IndexPage />
            </FadeIn>
          )}
        </Route>
        <Route path="/:shortId" exact>
          <ShortUrlPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
