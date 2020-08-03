export const initState = {
  type: null,
  value: 0,
  calcList: [],
  numList: [],
  decimalMode: false,
  lastCalcList: [],
  lastNumList: []
}

export const reducerList = {
  CALC: 'calcReducer'
}

export const actionFilterList = {
  AC: 'AC',
  PN: 'PN',
  PERCENT: 'PERCENT',
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  MULTIPLE: 'MULTIPLE',
  DIVIDED: 'DIVIDED',
  ANSWER: 'ANSWER',
  POINT: 'POINT',
  NUMBER: 'NUMBER'
}

export const ac = props => {
  const { value, calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'AC',
    value,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}

export const pn = props => {
  const { value, calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'PN',
    value,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}

export const percent = props => {
  const { value, calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'PERCENT',
    value,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}

export const plus = props => {
  const { value, calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'PLUS',
    value,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}

export const minus = props => {
  const { value, calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'MINUS',
    value,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}

export const multiple = props => {
  const { value, calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'MULTIPLE',
    value,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}

export const divided = props => {
  const { value, calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'DIVIDED',
    value,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}

export const answer = props => {
  const { value, calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'ANSWER',
    value,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}

export const point = props => {
  const { value, calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'POINT',
    value,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}

export const number = (props, tmpValue) => {
  const { calcList, numList, decimalMode, lastCalcList, lastNumList } = props;
  return ({
    type: 'NUMBER',
    value: tmpValue,
    calcList,
    numList,
    decimalMode,
    lastCalcList,
    lastNumList
  })
}