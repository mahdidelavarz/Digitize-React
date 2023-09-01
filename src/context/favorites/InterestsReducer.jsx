const interestsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_INTERESTS':
            {
                const updatedInterestList = [...state.interestList];
                const index = updatedInterestList.findIndex((item) => item.id === action.payload.id);
                if (index < 0) {
                    updatedInterestList.push({ ...action.payload });
                }
                return { ...state, interestList: updatedInterestList, total: state.total + action.payload.price };
            }
        case 'REMOVE_FROM_INTERESTS':
            {
                const updatedList = [...state.interestList];
                const filteredList = updatedList.filter((item) => item.id !== action.payload.id);
                return { ...state, interestList: filteredList };
            }

        default: return state;
    }
}

export default interestsReducer;