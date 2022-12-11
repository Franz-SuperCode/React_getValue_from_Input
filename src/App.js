// In diese App Datei kommen alle Komponenten. Und diese App Datei wird bei der index.js verlinkt

import "./App.css";
import Transaction from "./components/transaction/Transaction";



function App() {


  return (
    <div className="outDiv">
      <Transaction />
    </div>



  );

}
export default App;
