import React, { useState, useEffect, useRef } from "react";
import SecondsCounter from "./components/SecondsCounter.jsx";

function App() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(true);
    const [countdownFrom, setCountdownFrom] = useState(null);
    const [alertAt, setAlertAt] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => {
                    const next = countdownFrom !== null ? prev -1 : prev + 1;
                    if (alertAt !== null && next === alertAt) {
                        alert(`¡Alcanzaste el tiempo: ${alertArt} segundos!`);
                    }
                    return next;
                });
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);}, [running, countdownFrom, alertAt]);

        const startCountdown = () => {
            setSeconds(countdownFrom);
            setRunning(true);
};

        const reset = () => {
            setRunning(false);
            setSeconds(0);
            setCountdownFrom(null);
        };

        return (
            <div style={{ textAlign: "center"}}>
                <SecondsCounter seconds={seconds} />

                <div style={{ marginTop: "20px" }}>
                    <button onClick={() => setRunning(false)}>Pausar</button>
                    <button onClick={() => setRunning(true)}>Reaundar</button>
                    <button onClick={reset}>Reiniciar</button>
                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <input
                        type="number"
                        placeholder="Cuenta regresiva desde..."
                        onChange={e => setCountdownFrom(Number(e.target.value))}
                        />
                        <button onClick={startCountdown}>iniciar Regresiva</button>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                            <input
                            type="number"
                            placeholder="Alertar al llegar a..."
                            onChange={e => setAlertAt(Number(e.target.value))}
                            />
                        </div>
                    </div>    
                );                
            }
            export default App;


