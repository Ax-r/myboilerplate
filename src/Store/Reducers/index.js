import { combineReducers } from "redux";
import { NewsReducer } from './NewsReducer';
import { JobsReducer } from './JobsReducer';

const rootReducer = combineReducers({
    news: NewsReducer,
    jobs: JobsReducer
});

export default rootReducer;