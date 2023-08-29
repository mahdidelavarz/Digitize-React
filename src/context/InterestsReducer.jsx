const interestsReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_INTERESTS:
            {
                const updatedInterestList = [...state.interestList];
                const index = updatedInterestList.findIndex((item) => item.id === action.payload.id);
                if (index < 0) {
                    updatedInterestList.push({ ...action.payload });
                }
                return { ...state, cart: updatedCart, total: state.total + action.payload.price };
            }

        default: return state;
    }
}

export default interestsReducer;