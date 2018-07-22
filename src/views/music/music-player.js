import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);

    }
    componentWillReceiveProps(nextProps) {
        if (this.audio) {
            this.audio.src = '';
        }
        if (nextProps.song) {
            this.audio = new Audio(nextProps.song.url);
            this.audio.play();
            this.audio.onended = () => {
                console.log('ended');
                this.props.onAudioEnded(nextProps.song.id);
            }
        }
    }
    render() {
        let title = '--';
        if (this.props.song && this.props.song.title) {
            title = this.props.song.title;
        }
        return (
            <div>
                now playing {title}
            </div>
        );
    }
}
export default Player;