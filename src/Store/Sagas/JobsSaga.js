import { put, takeLatest } from 'redux-saga/effects';

function* fetchJobs() {
    const json = yield fetch('https://www.themuse.com/api/public/jobs?page=1&descending=true')
        .then(response => response.json());
    yield put({ type: "JOBS_RECEIVED", json: json.results, });
}

export function* JobsSaga() {
    yield takeLatest('GET_JOBS', fetchJobs)
}
