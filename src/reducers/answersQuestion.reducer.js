const answerQuestionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ANSWER_QUESTION':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export default answerQuestionReducer;