// import all necessary packages, styles and components
import React from 'react';
import './Sidemenu.css';
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import MyMusic from './MyMusic';
import Artists from './Artists';
import NowPlaying from './NowPlaying';

// a functional component "Sidemenu" which renders components based on conditions
const Sidemenu = (props) => {

    // gather the props in variables
    const { activeItem, activePage, audio } = props;

    return (
        <div className='Sidemenu'>

            {activePage === 'Home' ? <Home activeItem={activeItem} /> : null}
            {activePage === 'NowPlaying' ? <NowPlaying activeItem={activeItem} /> : null}
            {activePage === 'Music' ? <Music activeItem={activeItem} /> : null}
            {activePage === 'Games' ? <Games /> : null}
            {activePage === 'Settings' ? <Settings /> : null}
            {activePage === 'MyMusic' ? <MyMusic audio={audio} /> : null}
            {activePage === 'Artists' ? <Artists /> : null}

        </div>
    );
}

// export the component
export default Sidemenu;