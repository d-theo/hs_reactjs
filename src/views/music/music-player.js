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
            <div className={'d-flex col-sm-4 flex-column justify-content-center align-items-center'}>
                <h4>now playing</h4>
                <span>{title}</span>
            </div>
        );
    }
}
export default Player;