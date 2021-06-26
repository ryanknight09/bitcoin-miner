const reducer = (state, action) => {
  const { minedBitcoins, time } = state;

  switch (action.type) {
    case "start-game": {
      return { ...state, isRunning: true };
    }

    case "stop-game": {
      return { ...state, isRunning: false };
    }

    case "coin-clicked": {
      return { ...state, minedBitcoins: minedBitcoins + 1 };
    }

    case "reset": {
      return { ...state, minedBitcoins: 0, time: 30 };
    }

    case "decrement-time": {
      return { ...state, time: time - 1 };
    }

    default:
      return state;
  }
};

export default reducer;
