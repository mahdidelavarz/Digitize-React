import { useContext, useReducer, createContext } from "react";
import interestsReducer from "/InterestsReducer";

const InterestsContext = createContext();
const InterestsContextDispatcher = createContext();
const initialState = {
    interestList: [],
}

const interestsProvider = ({ children }) => {
    const [interestList, dispatch] = useReducer(interestsReducer, initialState);
    return (
        <InterestsContext.Provider value={interestList}>
            <InterestsContextDispatcher.Provider value={dispatch}>
                {children}
            </InterestsContextDispatcher.Provider>
        </InterestsContext.Provider>
    );
}

export default interestsProvider;

export const UseCart = () => useContext(InterestsContext);
export const CartActions = () => useContext(InterestsContextDispatcher);