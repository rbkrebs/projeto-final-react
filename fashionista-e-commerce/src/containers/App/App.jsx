import React from 'react';

import Topbar from '../../components/TopBar';


import Article from '../../components/Article';

import { useSelector} from 'react-redux';

  
export default function App(){

    const store = useSelector(state => state);
    console.log(store);


    return(
        <div data-testid="app">
                <Topbar/>
                <Article/>
            </div>
    )
  };