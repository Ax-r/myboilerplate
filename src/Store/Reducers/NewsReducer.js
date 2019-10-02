
export function NewsReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_NEWS':
            return { ...state, loading: true };
        case 'ERR_NEWS':
            return { ...state, loading: false, error: action.error };
        case 'NEWS_SRC':
            return { ...state, sources: action.json[0], loading: false }
        case 'NEWS_RECEIVED':
            return { ...state, articles: action.json[1], loading: false }
        default:
            return state;
    }
};
