export const ADD_MUSIC = 'ADD_MUSIC';
export const PLAY_MUSIC = 'PLAY_MUSIC';
export const REMOVE_MUSIC = 'REMOVE_MUSIC';
export const NEXT_MUSIC = 'NEXT_MUSIC';

export function addMusic(music) {
    return {
        type: ADD_MUSIC,
        payload: music
    };
}
export function playMusic(music) {
    return {
        type: PLAY_MUSIC,
        payload: music
    };
}
export function removeMusic(index) {
    return {
        type: REMOVE_MUSIC,
        payload: index
    };
}
export function nextMusic() {
    return {
        type: NEXT_MUSIC
    };
}