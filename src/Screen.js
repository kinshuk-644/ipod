// import all necessary packages, styles and components
import React from 'react';
import './Screen.css'
import Sidemenu from './Sidemenu';

// a functional component "Screen" which contains "Sidemenu" component inside it
const Screen = (props) => {
    
    // gather the props in variables
    const { activeItem, activePage, audio } = props;

    return (
        <div className='Screen'>

            {/* pass the props to Sidemenu component  */}
            <Sidemenu activeItem={activeItem} activePage={activePage} audio={audio}/>
        </div>     
    );
}

// export the component
export default Screen;