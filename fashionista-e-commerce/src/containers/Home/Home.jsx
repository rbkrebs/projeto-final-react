import React from 'react';
import "./Home.css";


import Produto from '../../components/Produto';

import { useSelector } from 'react-redux';


export default function Home() {


    const store = useSelector(state => state);

    return (

        <div className="home" data-testid="home">
        <span className="app__produtos__quantidade">{store.products.length} items</span>       
        <Produto />
        </div>
      

    )
};