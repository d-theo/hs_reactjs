import {combineReducers} from "redux";
import {music} from "./music.reducer";

export const app = combineReducers({
    music,
});