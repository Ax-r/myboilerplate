import { put, takeLatest } from 'redux-saga/effects';

function* fetchNews() {
    const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json());
    yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}

export function* NewsSaga() {
    console.log("fetch news")
    yield takeLatest('GET_NEWS', fetchNews)
}
