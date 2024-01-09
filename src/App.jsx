import './App.css';
import * as React from 'react';
import { Home} from './components/Home/Home';
import { School } from './components/School/School';
import { Cpu } from './components/Cpu/Cpu';
import { Formation } from './components/Formation/Formation';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
       <Home id = "home"/>
       <Cpu/>
       <School id = "school"/>
       <Formation/>
       <Projects id = "projects"/>
       <Contact id = "contact"/>
    </div>
  );
}

export default App;
