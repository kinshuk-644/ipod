// import all necessary packages, styles and components
import React from 'react';
import artistImage from './assets/images/Kinshuk.png';

// a class component "Artists" which renders some content
class Artists extends React.Component {

    render() {
        return (
            <div style={styles.artistsContainer}>

                <div style={styles.titleBar}>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', padding: '0rem 1rem' }}>iPod</p>
                </div>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>

                    <div style={styles.subInfo}>
                        <h2 style={{ marginBottom: '0.5rem' }}>IPod.js</h2>
                        <p style={{ marginBottom: '0', fontSize : '18px' }}> React Project</p>
                        <p style={{ fontSize: '18px' }}>Made by : Kinshuk Taya</p>
                    </div>

                </div>

            </div>
        );
    }

}

// styles for this component
const styles = {
    artistsContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    imageContainer: {
        height: '65%',
        width: '28%',
        borderRadius: '50%',
        backgroundImage: `url(${artistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf: 'center'
    },
    image: {
        width: '2rem',
        height: '2rem'
    },
    info: {
        height: '70%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    subInfo: {
        alignSelf: 'center'
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
export default Artists;