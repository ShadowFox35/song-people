const ininialState = {
  levelNum: 0,
  score: 0,
};

export default function gameOptionsRedicer(state = ininialState, action) {
  switch (action.type) {
    case 'CHANGE_LEVEL':
      return { ...state, levelNum: action.value };
    case 'CHANGE_SCORE':
      return { ...state, score: action.value };
    default:
      return state;
  }
}
