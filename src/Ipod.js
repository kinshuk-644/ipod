// import all necessary packages, styles and components
import React from 'react';
import Screen from './Screen';
import './Ipod.css';
import ZingTouch from 'zingtouch';
import { render } from 'react-dom';
import sound from './assets/music/Vicetone-Nevada.mp3'

// a class component "Ipod" which contains "Screen" component inside it
class Ipod extends React.Component {

    constructor() {
        
        // first call the constructor of parent class 
        super();

        // state 
        this.state = {
            activeItem: 'NowPlaying',
            activePage: 'Home',
            enter: 0,
            play: true
        }
    }

    // handler function to change the active menu item whenever rotation is performed
    rotateWheel = () => {

        // take the region inside which rotation will be detected
        var containerElement = document.getElementById('controls');
        var activeRegion = new ZingTouch.Region(containerElement);

        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;

        if (self.state.enter < 2) {
            activeRegion.bind(containerElement, 'rotate', function (event) {

                var newAngle = event.detail.distanceFromLast;

                if (newAngle < 0) {
                    change++;

                    // if change in angle is 15 then change the active menu item
                    if (change === 15) {

                        // set change to 0 again
                        change = 0;

                        // case1: when scrolling on home page
                        if (self.state.activePage === 'Home') {

                            // if currently we are on NowPlaying then change to the last option i.e. Settings 
                            if (self.state.activeItem === 'NowPlaying') {
                                self.setState({
                                    activeItem: "Settings"
                                })
                            } 
                            
                            // if currently we are on Music then change to NowPlaying 
                            else if (self.state.activeItem === 'Music') {
                                self.setState({
                                    activeItem: "NowPlaying"
                                })
                            } 
                            
                            // if currently we are on Games then change to Music 
                            else if (self.state.activeItem === 'Games') {
                                self.setState({
                                    activeItem: "Music"
                                })
                            } 
                            
                            // if currently we are on Settings then change to Games 
                            else if (self.state.activeItem === 'Settings') {
                                self.setState({
                                    activeItem: "Games"
                                })
                            }
                        } 
                        
                        // case2: when scrolling on the Music menu item page
                        else if (self.state.activePage === 'Music') {

                            // if currently we are on MyMusic then change to Artists
                            if (self.state.activeItem === 'MyMusic') {
                                self.setState({
                                    activeItem: "Artists"
                                })
                            }
                            
                            // if currently we are on Artists then change back to MyMusic
                            else if (self.state.activeItem === 'Artists') {
                                self.setState({
                                    activeItem: "MyMusic"
                                })
                            }
                        }
                    }
                }

                else {
                    change++;

                    // if change in angle is 15 then change the active menu item
                    if (change === 15) {

                        // set change to 0 again
                        change = 0;

                        // case1: when scrolling on home page
                        if (self.state.activePage === 'Home') {

                            // if currently we are on NowPlaying then change to Music
                            if (self.state.activeItem === 'NowPlaying') {
                                self.setState({
                                    activeItem: "Music"
                                })
                            } 
                            
                            // if currently we are on Music then change to Games
                            else if (self.state.activeItem === 'Music') {
                                self.setState({
                                    activeItem: "Games"
                                })
                            } 
                            
                            // if currently we are on Games then change to Settings
                            else if (self.state.activeItem === 'Games') {
                                self.setState({
                                    activeItem: "Settings"
                                })
                            } 
                            
                            // if currently we are on Settings then change back again to top i.e. NowPlaying
                            else if (self.state.activeItem === 'Settings') {
                                self.setState({
                                    activeItem: "NowPlaying"
                                })
                            }
                        } 
                        
                        // case2: when scrolling on the Music menu item page
                        else if (self.state.activePage === 'Music') {

                            // if currently we are on MyMusic then change to Artists
                            if (self.state.activeItem === 'MyMusic') {
                                self.setState({
                                    activeItem: "Artists"
                                })
                            }
                            
                            // if currently we are on Artists then change back to MyMusic
                            else if (self.state.activeItem === 'Artists') {
                                self.setState({
                                    activeItem: "MyMusic"
                                })
                            }
                        }
                    }
                }
            });
        }

        else
            console.log("Not allowed to enter")
    }

    // handler function when middle button is clicked
    changePage = () => {

        if (this.state.activeItem === 'Music') {
            this.setState({
                activeItem: 'MyMusic',
                activePage: this.state.activeItem
            })
        }

        else {
            this.setState({
                activeItem: this.state.activeItem,
                activePage: this.state.activeItem
            })
        }

    }

    // handler function when Menu button is clicked 
    changePageToHomeScreen = () => {

        if (this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artists') {
            this.setState({
                activeItem: 'Music',
                activePage: 'Home'
            })
        } else {
            this.setState({
                activeItem: this.state.activeItem,
                activePage: 'Home'
            })
        }
    }

    // just after the component is mounted 
    componentDidMount(){
        let audio = document.getElementsByClassName("audio-element")[0];
        
        this.setState({
            audio : audio,
        });
    }

    render() {

        return (
            <div className='Ipod' id='ipod'>
                <audio className="audio-element">
                        <source src={sound}></source>
                </audio>

                {/* pass props to Screen component  */}
                <Screen activeItem={this.state.activeItem} activePage={this.state.activePage} audio={this.state.audio}/>

                {/* div for ipod controller  */}
                <div className='Controls' id='controls' onMouseOver={this.rotateWheel}>
                    <div className='Top' onClick={this.changePageToHomeScreen}>
                        MENU
                    </div>

                    <div className='Left'>
                        <img alt='prev' src='https://res.cloudinary.com/dilxqj69w/image/upload/v1640687263/002-rewind-button_k8tvu5.png' ></img>
                    </div>

                    <div className='Middle' onClick={this.changePage}>

                    </div>

                    <div className='Right'>
                        <img alt='next' src='https://res.cloudinary.com/dilxqj69w/image/upload/v1640687263/003-forward-button_xszjvs.png'></img>
                    </div>

                    <div className='Bottom'>
                        <img alt='pause' src='https://res.cloudinary.com/dilxqj69w/image/upload/v1640687263/001-pause-play_brt1ql.png'></img>
                    </div>

                    <div id='interaction'></div>
                </div>

            </div>
        );
    }

}

// export the component
export default Ipod;