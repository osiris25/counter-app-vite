import React from 'react';//importacion de react
import ReactDOM from 'react-dom/client';//herramienta para renderizar 
import {HelloWorldApp} from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import './styles.css';
// function App(){//componente
// return (<h1>Hello dude</h1>);
// }
//renderizacion del componente con dom
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    {/* <HelloWorldApp/> */}
    <FirstApp title='hello baby' subTitle='hello 2'/>
</React.StrictMode>
);