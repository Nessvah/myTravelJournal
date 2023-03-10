import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";
import "./AppMin.css";

function App() {
  const cards = data.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}

export default App;
