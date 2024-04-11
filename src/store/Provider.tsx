import Context from "./Context";
import { Dispatch, ReactNode, useReducer } from "react";
import reducer, {initState} from "./Reducer";
import { TProduct } from "../typeProduct/type";

interface ProviderProps {
    children: ReactNode;
  
  }
function Provider({children} :ProviderProps){
    const [state, dispatch]= useReducer(reducer, initState)

        return (
            <Context.Provider value={[state, dispatch]}>
                {children}
            </Context.Provider>
        )

}
export default Provider