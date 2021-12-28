import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import { Card } from "./Components/Card/Card";
import data from "./Assests/data/data";

function App() {
    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                // Pass in entire object
                item={item}
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}

                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
                // Could use spread syntax as alternative
                // {...item}
            />
        );
    });

    return (
        <div className="App">
            <NavBar />
            <Hero />
            <section className="cards-list">{cards}</section>
        </div>
    );
}

export default App;
