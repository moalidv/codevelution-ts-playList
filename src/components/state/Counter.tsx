import { useReducer } from "react";

type CounterProps = {
  count: number;
};

type updatAction = {
  type: "increment" | "decrement";
  payload: number;
};

type resetActin = {
  type: "reset";
};

type ActionProps = updatAction | resetActin;

const initialState = { count: 1 };

function reducer(state: CounterProps, action: ActionProps) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};
