import React, { Component } from 'react';
import {connect} from "react-redux";
import MusicList from "./music-list";
import {addMusic, nextMusic, playMusic, removeMusic} from "../../redux/music.action";
import Player from "./music-player";

const songs = [{
    id: 1,
    title: 'une zik',
    url: 'https://s3-eu-west-1.amazonaws.com/grulitoworld/music/CD1-Plage01.mp3',
},{
    id: 2,
    url: 'https://s3-eu-west-1.amazonaws.com/grulitoworld/music/CD1-Plage02.mp3',
    title: 'une zik2',
},{
    id: 3,
    url: 'https://s3-eu-west-1.amazonaws.com/grulitoworld/music/CD1-Plage03.mp3',
    title: 'une zik3',
},{
    id: 4,
    url: 'https://s3-eu-west-1.amazonaws.com/grulitoworld/music/CD1-Plage04.mp3',
    title: 'une zik4',
}];

function getSong(id){
    return songs.find(s => s.id === id);
}

class Music extends Component {
    constructor(props) {
        super(props);
        this.musicConf = {
            btn1Icon:'icon-control-play',
            btn2Icon:'icon-plus',
            headerTitle:'song title',
            headerAction1:'play',
            headerAction2:'add to playlist',
        };
        this.plConf = {
            btn1Icon:'icon-control-play',
            btn2Icon:'icon-trash',
            headerTitle:'song title',
            headerAction1:'play',
            headerAction2:'remove from playlist',
        };
    }
    render() {
        return (
            <div className={'d-flex justify-content-around'}>
                <MusicList songs={songs} conf={this.musicConf} btn1={this.props.onPlaySong} btn2={this.props.onAddSongClick}/>
                <MusicList songs={this.props.playlist} conf={this.plConf} btn1={this.props.onPlaySong} btn2={this.props.onRemoveFromPlaylist}/>
                <Player song={this.props.currentSong}></Player>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddSongClick: (id, index) => {
            dispatch(addMusic(getSong(id)))
        },
        onPlaySong: (id, index) => {
            dispatch(playMusic(getSong(id)))
        },
        onRemoveFromPlaylist: (id, index) => {
            dispatch(nextMusic());
            dispatch(removeMusic(index));
        }
    };
};

const mapStateToProps = state => {
    return {
        playlist: state.music.songs,
        currentSong: state.music.currentSong
    }
};

export default Music = connect(
    mapStateToProps,
    mapDispatchToProps
)(Music);