import React from 'react';
import {Header} from './components/Header';
import {Balence} from './components/Balence';
import {IncomeExpence} from './components/IncomeExpence';
import {TransectionList} from './components/TransectionList';
import {AddTransection} from './components/AddTransection';
import './App.css';
import Particles from 'react-particles-js';
import './Bootstrap.min.css';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <div className="opacity">
        <GlobalProvider>
          <Header />
          <Balence />
          <IncomeExpence />
          <TransectionList />
          <AddTransection />
        </GlobalProvider>
      </div>
      <Particles className="particles"
        params={{
	    "particles": {
	        "number": {
	            "value": 150,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "color": {
            "value"	:	"random"
          },
          "line_linked": {
            "enable": true,
            "opacity": 0.05
          },
	        "move": {
	            "direction": "right",
	            "speed": 0.4
	        },
	        "size": {
	            "value": 3
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": false,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	      }} 
      />
    </div>
  );
}

export default App;
