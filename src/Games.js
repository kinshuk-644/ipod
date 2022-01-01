// import all necessary packages, styles and components
import React from 'react';

// a class component "Games" which renders some content(image)
class Games extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >
                <div style={styles.titleBar}>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', padding: '0rem 1rem' }}>iPod</p>
                </div>
                <div style={{width : '100%' , height : '90%'}}>
                    <img style={styles.image} src="https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=7f0718a8a5451b88475559f0819a35cd" />
                </div>
                
            </div>
        );
    }
    
}

// styles for this component
const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'100%',
        height:'90%',
        alignSelf : 'center'
    },
    titleBar: {
        height: '20%',
        width: '100%',
        borderRadius: '12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        display: 'flex',
        flexDirecton: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

// export the component
export default Games;