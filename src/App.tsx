import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <Section
        title="Top Albums"
        apiUrl="https://qtify-backend.labs.crio.do/albums/top"
        type="album"
      />

      <Section
        title="New Albums"
        apiUrl="https://qtify-backend.labs.crio.do/albums/new"
        type="album"
      />

      <Section
        title="Songs"
        apiUrl="https://qtify-backend.labs.crio.do/songs"
        type="songs"
      />
    </div>
  );
}

export default App;