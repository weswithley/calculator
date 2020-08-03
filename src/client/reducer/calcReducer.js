// action
import { initState, actionFilterList } from '../action';

// toolkit
import {
  setNewNumItem,
  getCalcAnswer,
  checkIsNewCalcModeOrNot,
  checkIsNewNumModeOrNot,
  checkIsNumListGotValueOrNot,
  replaceOldCalcItem,
  replaceOldNumItem,
  setNewCalcItem
} from '../toolkit';

const calcReducer = (state = initState, action) => {
  let tmpState = {};

  switch (action.type) {
    case actionFilterList.AC:
      return initState

    case actionFilterList.PN:
      let newPNValue = state.value * -1;
      let newPNNumList = [...state.numList];
      newPNNumList[state.numList.length - 1] = newPNValue;
      tmpState = {
        type: state.type,
        value: newPNValue,
        calcList: state.calcList,
        numList: newPNNumList,
        decimalMode: state.decimalMode,
        lastCalcList: state.lastCalcList,
        lastNumList: state.lastNumList
      }
      return tmpState

    case actionFilterList.PERCENT:
      let newPERValue = state.value / 100;
      let newPERValueSplit = String(newPERValue).split('-');
      if (newPERValueSplit.length > 1){
        const newPERValueSplitNum = Number(newPERValueSplit[1])
        newPERValue = newPERValue.toFixed(newPERValueSplitNum);
      }
      let newPERNumList = [...state.numList];
      newPERNumList[state.numList.length - 1] = newPERValue;
      tmpState = {
        type: state.type,
        value: newPERValue,
        calcList: state.calcList,
        numList: newPERNumList,
        decimalMode: state.decimalMode,
        lastCalcList: state.lastCalcList,
        lastNumList: state.lastNumList
      }
      return tmpState

    case actionFilterList.PLUS :
      if (!checkIsNumListGotValueOrNot(state)){
        return initState
      }

      const newPlusCalcItem = setNewCalcItem(state, '+');
      const newPlusCalcList = checkIsNewCalcModeOrNot(state) ? newPlusCalcItem.newCalcList : replaceOldCalcItem(action.calcList, '+');

      tmpState = {
        type: actionFilterList.PLUS,
        value: newPlusCalcItem.newNumList[0] || state.value,
        calcList: newPlusCalcList,
        numList: newPlusCalcItem.newNumList,
        decimalMode: false,
        lastCalcList: !!newPlusCalcList ? newPlusCalcList.slice(newPlusCalcList.length - 1, newPlusCalcList.length) : initState.lastCalcList,
        lastNumList: state.lastNumList
      }
      return tmpState

    case actionFilterList.MINUS :
      if (!checkIsNumListGotValueOrNot(state)) {
        return initState
      }

      const newMinusCalcItem = setNewCalcItem(state, '-');
      const newMinusCalcList = checkIsNewCalcModeOrNot(state) ? newMinusCalcItem.newCalcList : replaceOldCalcItem(action.calcList, '-')

      tmpState = {
        type: actionFilterList.MINUS,
        value: newMinusCalcItem.newNumList[0] || state.value,
        calcList: newMinusCalcList,
        numList: newMinusCalcItem.newNumList,
        decimalMode: false,
        lastCalcList: !!newMinusCalcList ? newMinusCalcList.slice(newMinusCalcList.length - 1, newMinusCalcList.length) : initState.lastCalcList,
        lastNumList: state.lastNumList
      }
      return tmpState

    case actionFilterList.MULTIPLE :
      if (!checkIsNumListGotValueOrNot(state)) {
        return initState
      }

      const newMulCalcItem = setNewCalcItem(state, '*');
      const newMulcalcList = checkIsNewCalcModeOrNot(state) ? newMulCalcItem.newCalcList : (newMulCalcItem.newCalcList.length > action.calcList.length ? newMulCalcItem.newCalcList : replaceOldCalcItem(action.calcList, '*'))

      tmpState = {
        type: actionFilterList.MULTIPLE,
        value: newMulCalcItem.newNumList[newMulCalcItem.newNumList.length -1] || state.value,
        calcList: newMulcalcList,
        numList: newMulCalcItem.newNumList,
        decimalMode: false,
        lastCalcList: !!newMulcalcList ? newMulcalcList.slice(newMulcalcList.length - 1, newMulcalcList.length) : initState.lastCalcList,
        lastNumList: state.lastNumList
      }
      return tmpState

    case actionFilterList.DIVIDED :
      if (!checkIsNumListGotValueOrNot(state)) {
        return initState
      }

      const newDivCalcItem = setNewCalcItem(state, '/');
      const newDivcalcList = checkIsNewCalcModeOrNot(state) ? newDivCalcItem.newCalcList : (newDivCalcItem.newCalcList.length > action.calcList.length ? newDivCalcItem.newCalcList : replaceOldCalcItem(action.calcList, '/'));

      tmpState = {
        type: actionFilterList.DIVIDED,
        value: newDivCalcItem.newNumList[newDivCalcItem.newNumList.length -1] || state.value,
        calcList: newDivcalcList,
        numList: newDivCalcItem.newNumList,
        decimalMode: false,
        lastCalcList: !!newDivcalcList ? newDivcalcList.slice(newDivcalcList.length - 1, newDivcalcList.length) : initState.lastCalcList,
        lastNumList: state.lastNumList
      }
      return tmpState

    case actionFilterList.NUMBER :
      const newNumList = checkIsNewNumModeOrNot(state) ? setNewNumItem(action.numList, action.value) : replaceOldNumItem(action.numList, action.value, state.decimalMode);

      tmpState = {
        type: state.type,
        value: newNumList[newNumList.length -1] || action.value,
        calcList: state.calcList,
        numList: newNumList,
        decimalMode: state.decimalMode,
        lastCalcList: state.lastCalcList,
        lastNumList: !!newNumList ? newNumList.slice(newNumList.length - 1, newNumList.length) : initState.lastNumList
      }
      return tmpState

    case actionFilterList.ANSWER :
      if (!checkIsNumListGotValueOrNot(state)) {
        return initState
      }

      const tmpAns = getCalcAnswer(state)

      tmpState = {
        type: null,
        value: tmpAns[0],
        calcList: initState.calcList,
        numList: tmpAns,
        decimalMode: state.decimalMode,
        lastCalcList: state.lastCalcList,
        lastNumList: state.lastNumList
      }
      return tmpState

    case actionFilterList.POINT:
      if (String(action.value).indexOf('.') > 0){
        return state
      }

      const newPointValue = action.value + '.';
      let numPointList = [...action.numList];
      numPointList[action.numList.length - 1] = newPointValue;

      tmpState = {
        type: action.type,
        value: newPointValue,
        calcList: action.calcList,
        numList: numPointList,
        decimalMode: true,
        lastCalcList: state.lastCalcList,
        lastNumList: state.lastNumList
      }
      return tmpState

    default:
      return state
  }
}

export default calcReducer
