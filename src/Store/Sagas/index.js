import { all } from "redux-saga/effects";

import { NewsSaga } from "./NewsSaga";
import { JobsSaga } from "./JobsSaga";

export default function* rootSaga() {
    yield all([
        NewsSaga(),
        JobsSaga()
    ]);
}