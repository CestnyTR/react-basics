import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import tourData from "./tourData";
function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>);

}

const Header = () => {
    return (
        <header>
            <h1>City Tours</h1>
            <p>Discover the world's most amazing cities</p>
        </header>
    );
}
const Main = () => {
    const tours = tourData;
    return (
        <main>
            {tours ? (
                tourData.map((tour) => (
                    <Tour tourObj={tour} key={tour.id} />
                ))
            ) : <h1> No Tours Available</h1>}
        </main>
    );
}
const Tour = ({ tourObj }) => {
    const { title, desc, image, price, tourIsUp } = tourObj;
    return (
        <section className={`tourWrapper ${tourIsUp && "grey"}`}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
            {tourIsUp ? <p className="tourIsUp">{tourIsUp}</p> : <p className="price">Price: ${price}</p>}

        </section>
    );
}


// const Main = () => {
//     return (
//         <main>
// {tourData.map((tour) => (
//     <Tour
//         key={tour.id}
//         name={tour.title}
//         Explantion={tour.desc}
//         Link={tour.image}
//     />
//      ))}
//         </main>
//     );
// }
// const Tour = (props) => {
//     return (
//         <section className="tourWrapper">
//             <img src={props.Link} alt={props.name} />
//             <h2>{props.name}</h2>
//             <p>{props.Explantion}</p>
//         </section>
//     );
// }

const Footer = () => {
    const hour = new Date().getHours();
    const openingHours = 8;
    const closeHoures = 20;
    const isOpen = hour >= openingHours && hour <= closeHoures ? true : false;
    return (
        <footer>
            {isOpen ? (
                <Order closeHoures={closeHoures} />
            ) : (
                <div className="order">
                    <p> We are close until {openingHours}.00</p>
                </div>
            )}

            <p>&copy; 2023 City Tours. All rights reserved.</p>
        </footer>
    );
}


const Order = ({ closeHoures }) => {
    return (
        <div className="order">
            <p> We are open until {closeHoures}.00</p>
            <button className="order-btn"> Order</button>
        </div>
    )
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);