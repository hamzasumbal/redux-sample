import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";


const store = configureStore({
    reducer: {
        counter : counterSlice.reducer,
          auth : authSlice.reducer
      },
  });

  export const counterActions = counterSlice.actions;
  export const authActions = authSlice.actions;
// -------------------------------------- Traditional Method -----------------

/* const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};
 */

/* const store = createStore(counterReducer) */

//----------------------------------------------------------------------------------------------------



//--------------Extras----------------------

/* const counterSubsrciber = ()=>{
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubsrciber);


store.dispatch({type : "increment"}) */

//---------------------------------------------------


export default store;
