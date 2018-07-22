import React, { Component } from 'react';
import './music-list.css';

class MusicList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const songs = this.props.songs.map((song, id) => {
            return (<div className={'music-list-line w-100 d-flex row align-items-center'} key={id}>
                <span className={'col-sm-10'}>{song.title}</span>
                <i className={'hoverable col-sm-1 '+this.props.conf.btn1Icon}
                   onClick={() => this.props.btn1(song.id, id)}
                ></i>
                <i className={'hoverable col-sm-1 '+this.props.conf.btn2Icon}
                   onClick={() => this.props.btn2(song.id, id)}
                ></i>
            </div>)
        });
        const header = (<div><span>{this.props.conf.headerTitle} | </span>
                <span>{this.props.conf.headerAction1} | </span>
                <span>{this.props.conf.headerAction2}</span></div>)
        return (
            <div className={'music-list col-sm-4 d-flex flex-column align-items-center'}>
                {songs}
            </div>
        );
    }
}

export default MusicList;
