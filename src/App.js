import "./App.scss";

import {
  About,
  Header,
  Footer,
  Skills,
  Work,
  GithubStats,
} from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <GithubStats />
      <Footer />
    </div>
  );
}

export default App;
