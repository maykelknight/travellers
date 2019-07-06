import React from 'react';
import "./assets/css/main.scss"
import Navbar from './components/common/Navbar'
import CustomRouter from './customRouter'

function App () {
    return (
        <>
            <Navbar/>
            <CustomRouter/>
        </>
    );
}


export default App;
