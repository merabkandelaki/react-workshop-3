import "./App.css";
import Card from "./components/Card";
import Row from "./components/Row";
import { products } from "./data/data";
import { rows } from "./data/data";

function App() {
  return (
    <>
      <main className="container">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </main>
      <section className="container">
        <div className="block-listing">
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </div>
        <div className="banner"></div>
      </section>
    </>
  );
}

export default App;
