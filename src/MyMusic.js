// import all necessary packages, styles and components
import React from 'react';
import sound from './assets/music/Vicetone-Nevada.mp3'

// a class component "MyMusic" which renders some content(music playing page)
class MyMusic extends React.Component {

    constructor() {
        super();
        this.state = {
            isMounted: true
        }
    }

    componentDidMount() {
        let self = this;
        self.props.audio.play();

        self.props.audio.addEventListener("timeupdate", function () {
            if (self.state.isMounted) {
                var pos = self.props.audio.currentTime / self.props.audio.duration;
                self.updateTime();
                let fill = document.getElementById("fill");
                if (fill !== null) {
                    fill.style.width = pos * 100 + "%";
                }
            }
        })

    }


    updateTime = () => {
        this.setState({
            audio: this.props.audio
        })
    }

    componentWillUnmount() {
        this.state.isMounted = false;
    }

    render() {
        let audio = this.props.audio;
        return (
            <div style={styles.myMusicContainer}>
                <div style={styles.titleBar}>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', padding: '0rem 1rem' }}>iPod</p>
                </div>

                <div style={styles.info}>
                    <img style={styles.image} src="https://i.ytimg.com/vi/5QP_W-yAlRc/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCpLHgNm_V-UjyJPtDABZPolnNOBA"></img>
                    <div style={styles.subInfo}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Vicetone - Nevada</h4>
                        <p style={{ marginBottom: '0' }}>Cozi Zuehlsdorff</p>
                    </div>

                </div>

                <div style={styles.statusBar}>
                    <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                </div>

            </div>
        );
    }

}

// styles for this component
const styles = {
    myMusicContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        height: '75%',
        width: '45%',
        alignSelf: 'center'
    },
    info: {
        height: '70%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    statusBar: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    subInfo: {
        alignSelf: 'center'
    },
    seekBar: {
        width: '70%',
        height: '20%',
        border: '1px solid grey',
        cursor: 'pointer',
        alignSelf: 'center',
        display: 'flex',
    },
    fill: {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime: {
        margin: '0',
        alignSelf: 'center'
    },
    dur: {
        margin: '0',
        alignSelf: 'center'
    },
    titleBar : {
        height:'20%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between',
        alignItems: 'center'
    }
}

// export the component
export default MyMusic;