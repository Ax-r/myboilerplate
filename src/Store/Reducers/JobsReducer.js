
export function JobsReducer(state = {}, action) {
    switch (action.type) {
        case 'GET_JOBS':
            return { ...state, loading: true };
        case 'JOBS_RECEIVED':
            return { ...state, offers: action.json[0], loading: false }
        default:
            return state;
    }
};
