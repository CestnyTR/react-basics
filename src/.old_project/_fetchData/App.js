import { useEffect, useState } from 'react';
import './index.css';
import Header from './component/header/Header';
import Main from './component/main/Main';
import axios from 'axios';
export default function App() {
    const [user, setUser] = useState("");
    //! This is an example of using useEffect to fetch data when the component mounts.
    /*
    const getData = () => {
        fetch("https://randomuser.me/api/")
            .then((response) => response.json()
                .then((data) => {
                    setUser(data.results[0]);
                    console.log(data.results[0]);
                }));
    }
    const getData = async () => {
        try {
            const res = await fetch("https://randomuser.me/api/");
            const data = await res.json();
            setUser(data.results[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
*/
    const getData = async () => {
        try {
            const { data } = await axios("https://randomuser.me/api/");
            setUser(data.results[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <Header user={user} />
            <Main {...user} getData={getData} />
        </div>
    );
}
