import React, {useState} from 'react';
import './App.css';
import TextBox from './TextBox';
import axios from 'axios';
//@ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

function Horoscope() {
    //TODO: Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
    const [sun, setSun] = useState('');
    const [moon, setMoon] = useState('');
    const [rising, setRising] = useState('');

    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {sun: sun, moon: moon, rising: rising};

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        axios.post('http://localhost:4567/horoscope', toSend, config)
            .then(response => {
                console.log(response.data);
                setHoroscope(response.data.horoscope);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Interactive Horoscope</h1>
            <TextBox labelContent='Sun Sign' change={setSun} />
            <TextBox labelContent='Moon Sign' change={setMoon} />
            <TextBox labelContent='Rising Sign' change={setRising} />
            <AwesomeButton type='primary' onPress={requestHoroscope}>Hello</AwesomeButton>
            <ul>{horoscope.map(h => <li>{h}</li>)}</ul>
        </div>
    );
}

export default Horoscope;
