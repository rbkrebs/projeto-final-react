import React from 'react';

import "./App.css";

import Topbar from '../../components/TopBar';
import Produto from '../../components/Produto';

import { useSelector} from 'react-redux';

  
export default function App(){    

    return(
        <div className="app" data-testid="app">
                <Topbar/>
                <Produto/>
            </div>
    )
  };