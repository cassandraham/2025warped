import './App.css';
import List from './components/List/List';
const bandsWashington = require("./data/blue.json");
const bandsLongBeach = require("./data/yellow.json");
const bandsOrlando = require("./data/red.json");

function App() {

  return (
    <div className="App">
      <List bands={bandsWashington} color="#79b8f0"></List>
      <List bands={bandsLongBeach} color="#eed47d"></List>
      <List bands={bandsOrlando} color="#eaa9a5"></List>
    </div>
  );
}

export default App;
