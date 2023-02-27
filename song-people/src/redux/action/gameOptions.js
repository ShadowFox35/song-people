export function levelNumRedicer(num) {
  return {
    type: 'CHANGE_LEVEL',
    value: num,
  };
}

export function scoreRedicer(num) {
  return {
    type: 'CHANGE_SCORE',
    value: num,
  };
}
