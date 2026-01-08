import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import GlobalStyle from "./globalStyles";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact></Contact>
    </div>
  );
}

export default App;
