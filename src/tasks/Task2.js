import React, { useState } from "react";


function Task2() {
    const [exp, setExp] = useState("");
    const [history, setHistory] = useState("");

    const add = (event) => {
        setExp(exp + event.target.id);
    };

    const calc = () => {
        try {
            let m = eval(exp);
            setExp(m);
            setHistory(history + '\n' + exp);
        } catch (err) {
            setExp("Error");
        }
    };

    const clear = () => {
        setExp("");
    };

    return (
        <main className="task2--main">
            <div class="task2--container">
                <div id="screen">
                    <div className="camera"></div>
                    <p className="history">{history}</p>
                    <div className="exp">
                        <h2>{exp}</h2>
                    </div>
                </div>
                <div id="keys">
                    <div id="left">
                        <div className="key" id="7" onClick={add}>7️⃣</div>
                        <div className="key" id="8" onClick={add}>8️⃣</div>
                        <div className="key" id="9" onClick={add}>9️⃣</div>
                        <div className="key" id="4" onClick={add}>4️⃣</div>
                        <div className="key" id="5" onClick={add}>5️⃣</div>
                        <div className="key" id="6" onClick={add}>6️⃣</div>
                        <div className="key" id="1" onClick={add}>1️⃣</div>
                        <div className="key" id="2" onClick={add}>2️⃣</div>
                        <div className="key" id="3" onClick={add}>3️⃣</div>
                        <div className="key" id="0" onClick={add}>0️⃣</div>
                        <div className="key" id="." onClick={add}>⊡</div>
                        <div className="key" id="calc" onClick={calc}>🟰</div>
                    </div>
                    <div id="right">
                        <div className="key" id="back" onClick={clear}>🔙</div>
                        <div className="key" id="/" onClick={add}>➗</div>
                        <div className="key" id="*" onClick={add}>✖</div>
                        <div className="key" id="-" onClick={add}>➖</div>
                        <div className="key" id="+" onClick={add}>➕</div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Task2;
