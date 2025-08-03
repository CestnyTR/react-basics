import { useState } from 'react';
import Effect from './Effect';
import './index.css';
export default function App() {
    const [show, setShow] = useState(true);
    return (
        <div className="App">
            <button onClick={() => setShow(!show)}>{show ? "show" : "hide"}</button>
            {show && <Effect />}

        </div>
    );
}
