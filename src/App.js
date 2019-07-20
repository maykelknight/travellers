import React from 'react';
import "./assets/css/main.scss"
import Navbar from './components/common/Navbar'
import CustomRouter from './customRouter'

function App () {
    return (
        <>
            <Navbar/>
            <CustomRouter/>
            <footer className="footer mt100">
                <div className="content has-text-centered">
                    <p>
                        Design and implementation <strong>Michał Czapkowicz</strong>. All rights reserved
                    </p>
                </div>
            </footer>
        </>
    );
}


export default App;
