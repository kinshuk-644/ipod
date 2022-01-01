// import all necessary packages, styles and components
import React from 'react';

// a class component "Settings" which renders some content(image)
class Settings extends React.Component {

    render() {
        return (
            <div style={styles.settings} >

                <div style={styles.titleBar}>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', padding: '0rem 1rem' }}>iPod</p>
                </div>
                <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <img style={styles.image} src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png" />
                </div>
            </div>
        );
    }

}

// styles for this component
const styles = {
    settings: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    image: {
        width: '45%',
        height: '62%',
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
export default Settings;