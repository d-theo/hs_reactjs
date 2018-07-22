import {ADD_MUSIC, NEXT_MUSIC, PLAY_MUSIC, REMOVE_MUSIC} from "./music.action";

const defaultState = {
    currentSong: null,
    songs: []
};
export function music(state=defaultState, action) {
    switch (action.type) {
        case ADD_MUSIC:
            return Object.assign({}, state, {songs: state.songs.concat([action.payload])});;
        case REMOVE_MUSIC:
            return Object.assign({},
                state,
                {songs: state.songs.filter((s,i) => i != action.payload)},
                {currentSong: action.payload}
            );
        case PLAY_MUSIC:
            return Object.assign({},
                state,
                {songs: [action.payload].concat(state.songs)},
                {currentSong: action.payload}
            );
        case NEXT_MUSIC:
            const i = state.songs.indexOf(state.currentSong);
            return Object.assign({},
                state,
                {currentSong: state.songs[i+1]}
            );
        default: return state;
    }
}