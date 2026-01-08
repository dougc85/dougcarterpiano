import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import GlobalStyle from "./globalStyles";
import Projects from "./components/Projects/Projects";
import Gigs from "./components/Gigs/Gigs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <About />
        <Projects />
        <Gigs />
      </main>
      <Contact></Contact>
    </div>
  );
}

export default App;
