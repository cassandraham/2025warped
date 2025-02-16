import './App.css';
import List from './components/List/List';
import { useState, useEffect } from 'react';
const bandsWashington = require("./data/blue.json");
const bandsLongBeach = require("./data/yellow.json");
const bandsOrlando = require("./data/red.json");

function App() {

  const [predictionsBlue, setPredictionsBlue] = useState({});
  const [predictionsYellow, setPredictionsYellow] = useState({});
  const [predictionsRed, setPredictionsRed] = useState({});
  useEffect(() => {
    const storedPredictions = localStorage.getItem('warpedPredictions');

    const predictions = storedPredictions && JSON.parse(storedPredictions);
    if (predictions && predictions["blue"]) {
      setPredictionsBlue(predictions["blue"]);
    }
    if (predictions && predictions["yellow"]) {
      setPredictionsYellow(predictions["yellow"]);
    }
    if (predictions && predictions["red"]) {
      setPredictionsRed(predictions["red"]);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {

      const updatedPredictions = {
        "blue": predictionsBlue,
        "yellow": predictionsYellow,
        "red": predictionsRed
      }
      window.localStorage.setItem('warpedPredictions', JSON.stringify(updatedPredictions));

    }
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [predictionsBlue, predictionsRed, predictionsYellow]);

  return (
    <div className="App">
      <List bands={bandsWashington} predictions={predictionsBlue} setPredictions={setPredictionsBlue} color="#79b8f0"></List>
      <List bands={bandsLongBeach} predictions={predictionsYellow} setPredictions={setPredictionsYellow} color="#eed47d"></List>
      <List bands={bandsOrlando} predictions={predictionsRed} setPredictions={setPredictionsRed} color="#eaa9a5"></List>
    </div>
  );
}

export default App;
