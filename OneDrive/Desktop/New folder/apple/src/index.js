import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<About  name="Ankur Singh" hobby="youtube"   dish="chinese" />
<About name="Atul Singh"   hobby="instagram" dish="punjabi"/>
<About name="sweta Singh"  hobby="d2h"       dish="italian"/>
<About name="rohit Singh"  hobby="facebook"  dish="sweets"/>

{/* <input type='text' value={}></input>
 */}    
    <App />
  </React.StrictMode>
);


