import AllItems from "./AllItems";
import Contexts from "./Contexts";
import Selecteditem from "./SelectedItems";

import './index.css';

function App() {
  return (
  <div className="app">
 <Contexts>
    <AllItems/>
    <Selecteditem/>
 </Contexts>
  
  </div>
  );
}

export default App;
