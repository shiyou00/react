import React,{useState} from 'react';
import './App.css';
import { ClassComponent } from "./components/ClassComponent";
import { FuncComponent } from "./components/FuncComponent";


function App() {

  const [user,setUser] = useState("Dan");

  return (
    <div className="App">
      <>
        <label>
          <b>选择用户： </b>
          <select
            value={user}
            onChange={e => setUser(e.target.value)}
          >
            <option value="Dan">Dan</option>
            <option value="Sophie">Sophie</option>
            <option value="Sunil">Sunil</option>
          </select>
        </label>
        <h1>Welcome to {user}’s profile!</h1>
        <p>
          <ClassComponent user={user} />
          <b> (class)</b>
        </p>
        <p>
          <FuncComponent user={user} />
          <b> (function)</b>
        </p>
        <p>
          Can you spot the difference in the behavior?
        </p>
      </>
    </div>
  );
}

export default App;
