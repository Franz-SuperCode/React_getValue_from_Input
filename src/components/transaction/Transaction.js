import "./Transaction.css"
import React, { useState } from 'react';


function Transaction() {
    const [output, setOutput] = useState(0);


    // Beim Klick wird dem "output" der Wert von "inputValue zugeordnet"
    const deposit = () => {
        let inputUser = Number(document.querySelector(".money").value);
        setOutput(output + inputUser);
    };

    const withdrawal = () => {
        let inputUser = Number(document.querySelector(".money").value);
        setOutput(output - inputUser);
    };



    return (
        <div>
            {/* //Nach jeder Änderung im Inputfeld, wird die Funktion aufgerufen */}

            <input className="money" type="number" />
            <button onClick={deposit}>Einzahlen</button>
            <button onClick={withdrawal}>Auszahlen</button>
            <p className="balance">{output}</p>
        </div>
    )
}


export default Transaction;
