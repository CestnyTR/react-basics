
/*
const App = () => {
    return (
        <>
            <h1>Hello, React!</h1>
        </>
    );
}

export default App;

*/
import { useState } from "react";
import "./index.css";

export default function App() {
    return (
        <>
            <Main />
        </>
    );
}
const messages = ["Heollo, React!", "React is a Framework", "React is a Library"];
const Main = () => {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const prev_btn = () => {
        if (step > 1) setStep(step - 1);
    }
    const next_btn = () => {
        if (step < messages.length) setStep(step + 1);
    }
    return (
        <>
        <button className="set-open-btn" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</button>
            {isOpen && (<main>
                <div className="wrapper">
                    <div className="number-wrapper">
                        <span className={step >= 1 && "active"} >1</span>
                        <span className={step >= 2 && "active"}>2</span>
                        <span className={step >= 3 && "active"}>3</span>
                    </div>
                    <p>{step}:{messages[step - 1]}{""}</p>
                    <div className="button-wrapper">
                        <button onClick={prev_btn}>Previoues</button>
                        <button onClick={next_btn}>Next</button>
                    </div>
                </div>
            </main >)}
        </>
    );
}


