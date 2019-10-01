
export function NewsReducer(state = {}, action) {
    switch (action.type) {
        case 'GET_NEWS':
            return { ...state, loading: true };
        case 'NEWS_RECEIVED':
            return { ...state, articles: action.json[0], loading: false }
        default:
            return state;
    }
};
