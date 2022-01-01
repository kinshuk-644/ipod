// import all necessary packages, styles and components
import React from 'react';
import { ListGroup } from 'react-bootstrap';

// a class component "Music" which renders menu items and selects one as active at a time
class Music extends React.Component {

    render() {
        return (
            <div style={styles.musicScreen} id='music-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <div style={styles.titleBar}>
                        <p style={{ fontSize: '30px', fontWeight: 'bold', padding: '0rem 1rem' }}>iPod</p>
                    </div>
                    <ListGroup style={{ borderRadius: '0' }}>
                        <ListGroup.Item style={{fontSize : '25px' ,border:'0',padding: '0.6rem 1rem'}} className={this.props.activeItem==='MyMusic'?'active':''}>
                            My Music {this.props.activeItem==='MyMusic'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ fontSize : '25px' ,border:'0',padding: '0.6rem 1rem'}} className={this.props.activeItem === 'Artists' ? 'active' : ''}>
                            Artists {this.props.activeItem === 'Artists' ? <span style={{ float: 'right', fontWeight: 'bold' }}>&gt;</span> : ''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'>
                </div>
            </div>
        );
    }

}

// styles for this component
const styles = {
    musicScreen: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirecton: 'row'
    },
    menuList: {
        height: '100%',
        width: '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex: '1'
    },
    imageContainer: {
        height: '100%',
        width: '50%',
        backgroundImage: 'url("https://archziner.com/wp-content/uploads/2020/07/air-jordan-hoodie-worn-by-man-wearing-purge-mask-with-neon-lights-super-cool-wallpapers-holding-pink-smoke-bomb.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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
export default Music;