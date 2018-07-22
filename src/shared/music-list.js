import React, { Component } from 'react';

class MusicList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const songs = this.props.songs.map((song, id) => {
            return (<div key={id}>
                <span>{song.title}</span>
                <i className={this.props.conf.btn1Icon}
                   onClick={() => this.props.btn1(song.id, id)}
                ></i>
                <i className={this.props.conf.btn2Icon}
                   onClick={() => this.props.btn2(song.id, id)}
                ></i>
            </div>)
        });
        const header = (<div><span>{this.props.conf.headerTitle} | </span>
                <span>{this.props.conf.headerAction1} | </span>
                <span>{this.props.conf.headerAction2}</span></div>)
        return (
            <div>
                {songs}
            </div>
        );
    }
}

export default MusicList;
