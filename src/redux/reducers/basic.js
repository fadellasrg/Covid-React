const initialState = {
    list: [],
    listLoading: true,
    listError: false,
    errMessage: null
}

const basicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_ALL_COUNTRIES_PENDING":
            return {...state, listLoading: true}
        case "GET_ALL_COUNTRIES_FULFILLED":
            return {...state, listLoading: false, list: action.payload}
        case "GET_ALL_COUNTRIES_REJECTED":
            return{...state, listLoading: false, listError: true, errMessage: 'Error'}
        default:
            return state
    }
}

export default basicReducer