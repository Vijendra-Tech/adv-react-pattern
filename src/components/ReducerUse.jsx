import React, { useReducer } from "react";

function updateCountReducer(state, action) {
  const { count } = state;
  const { type } = action;
  switch (type) {
    case "UPDATE": {
      return {
        count: count + 1,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
function ReducerUse() {
  const [state, dispatch] = useReducer(updateCountReducer, {
    count: 0,
  });
  return (
    <div>
      ReducerUse:{state.count}
      <button onClick={() => dispatch({ type: "UPDATE", count: state.count })}>
        Update
      </button>
    </div>
  );
}

export default ReducerUse;
