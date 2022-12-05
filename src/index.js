import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import Routing from "./routes/Root";
import './styles/index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routing />
 	</BrowserRouter>
	
)