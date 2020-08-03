export const draggableConfig = {
  ww: 0,
  wh: 0,
  active: false,
  currentX: 0,
  currentY: 0,
  initialX: 0,
  initialY: 0,
  xOffset: 0,
  yOffset: 0,
  divProps: {},
  div: null,
  init: ref => init(ref),
  dragStart: e => dragStart(e),
  dragging: e => dragging(e),
  dragEnd: e => dragEnd(e),
  setTranslate3D: e => setTranslate3D(e)
}

const dragStart = (e) => {
  if (e.type === "touchstart") {
    draggableConfig.initialX = e.touches[0].clientX - draggableConfig.xOffset;
    draggableConfig.initialY = e.touches[0].clientY - draggableConfig.yOffset;
  } else {
    draggableConfig.initialX = e.clientX - draggableConfig.xOffset;
    draggableConfig.initialY = e.clientY - draggableConfig.yOffset;
  }

  draggableConfig.active = true;
}

const dragEnd = (e) => {
  draggableConfig.initialX = draggableConfig.currentX;
  draggableConfig.initialY = draggableConfig.currentY;
  draggableConfig.active = false;
}

const dragging = (e) => {
  if (draggableConfig.active) {

    e.preventDefault();

    if (e.type === "touchmove") {
      draggableConfig.currentX = e.touches[0].clientX - draggableConfig.initialX;
      draggableConfig.currentY = e.touches[0].clientY - draggableConfig.initialY;
    } else {
      draggableConfig.currentX = e.clientX - draggableConfig.initialX;
      draggableConfig.currentY = e.clientY - draggableConfig.initialY;
    }

    // set limitation area.
    if (draggableConfig.currentX < draggableConfig.divProps.width / 2 * -1) {
      draggableConfig.currentX = draggableConfig.divProps.width / 2 * -1;
    }

    if (draggableConfig.currentY < draggableConfig.divProps.height / 2 * -1) {
      draggableConfig.currentY = draggableConfig.divProps.height / 2 * -1;
    }

    if (draggableConfig.currentX > draggableConfig.ww - draggableConfig.divProps.width / 2) {
      draggableConfig.currentX = draggableConfig.ww - draggableConfig.divProps.width / 2;
    }

    if (draggableConfig.currentY > draggableConfig.wh - draggableConfig.divProps.height / 2) {
      draggableConfig.currentY = draggableConfig.wh - draggableConfig.divProps.height / 2;
    }

    draggableConfig.xOffset = draggableConfig.currentX;
    draggableConfig.yOffset = draggableConfig.currentY;

    setTranslate3D(draggableConfig.currentX, draggableConfig.currentY);
  }
}

const setTranslate3D = (xPosition, yPosition) => {
  draggableConfig.div.style.transform = "translate3d(" + xPosition + "px, " + yPosition + "px, 0)";
}

const init = (ref) => {
  draggableConfig.ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  draggableConfig.wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  draggableConfig.div = ref;
  draggableConfig.divProps = ref.getBoundingClientRect();
}

export const newEval = (str) => {
  let fn = Function;
  return new fn('return ' + str)();
}

export const setNewNumItem = (list, value) => {
  let newList = [...list];
  newList.push(value);
  return newList
}

export const toFixedLength = (list) => {
  const newList = list.map((listItem) => {
    let listItemSplit = String(listItem).split('.');
    if (listItemSplit.length > 1) {
      if (String(listItem).length > 8) {
        listItem = listItem.toFixed(6);
      }
      return listItem
    } else {
      if (String(listItem).length > 8) {
        if (listItem >= 99999999) {
          listItem = 99999999;
        } else {
          listItem = Number(String(listItem).slice(0, 8));
        }
      }
      return listItem
    }
  })
  return newList
}

export const getCalcAnswer = (state) => {
  // calc All calculation.
  let { calcList, numList, lastCalcList, lastNumList } = state;
  let result = '';
  let finalResult = [];

  // 1.touch 'ANSWER' with completely calculating.
  if (calcList.length === 0 && lastCalcList.length > 0 && lastNumList.length > 0) {
    numList = [].concat(numList, lastNumList);
    calcList = [].concat(calcList, lastCalcList);
  }

  // 1.touch 'ANSWER' with un-completely calculating.
  if (calcList.length > 0 && calcList.length === numList.length) {
    numList = [].concat(numList, lastNumList);
  }

  for (let i = 0; i < numList.length; i++) {
    if (!!String(numList[i])) {
      result += String(numList[i]);
    }

    if (!!calcList[i]) {
      result += calcList[i];
    }
  }

  finalResult = [newEval(result)];
  finalResult = toFixedLength(finalResult)
  return finalResult;
}

export const getCalcAnswerWithPriority = (state, signal) => {
  // 'MULTIPLE' or 'DIVIDED' calculation priority higher,
  // 'PLUS' or 'MINUS' calculation priority lower.
  const { calcList, numList } = state;
  const multipleIndexOf = calcList.indexOf('*');
  const dividedIndexOf = calcList.indexOf('/');
  const priorityIndexOf = (multipleIndexOf >= 0) ? multipleIndexOf : (dividedIndexOf >= 0 ? dividedIndexOf : -1);

  let finalResult = {
    newNumList: null,
    newCalcList: null
  };

  if (priorityIndexOf >= 0) {
    const calcStr = String(numList[priorityIndexOf]) + calcList[priorityIndexOf] + String(numList[priorityIndexOf + 1]);

    numList.splice(priorityIndexOf, 2);
    finalResult.newNumList = [].concat(numList, [newEval(calcStr)]);

    calcList.splice(priorityIndexOf, 1);
    finalResult.newCalcList = [].concat(calcList, [signal]);
  } else {
    finalResult.newNumList = numList;
    finalResult.newCalcList = [].concat(calcList, [signal]);
  }

  return finalResult;
}

export const checkIsNewCalcModeOrNot = (state) => {
  const { calcList, numList } = state;
  let isNewCalcMode = calcList.length < numList.length;
  return isNewCalcMode
}

export const checkIsNewNumModeOrNot = (state) => {
  const { calcList, numList } = state;
  let isNewNumMode = (calcList.length === numList.length);
  return isNewNumMode
}

export const checkIsNumListGotValueOrNot = (state) => {
  return !!state.numList.length;
}

export const replaceOldCalcItem = (list, value) => {
  let tmplist = null
  tmplist = list.map((item, index) => {
    if (index == list.length - 1) {
      item = value;
      return item
    } else {
      return item
    }
  })
  return tmplist
}

const getIntToDecimalNum = (numListItem, value) => {
  let result = String(numListItem);
  const tmpValue = String(value);
  const IsDecimal = result.indexOf('.') !== -1 ? true : false;

  if (IsDecimal) {
    result = result + tmpValue;
  } else {
    result = result + '.' + tmpValue;
  }
  if (result.length > 8) {
    result = result.slice(0, 8);
  }
  return Number(result)
}

export const replaceOldNumItem = (list, value, decimalMode) => {
  let tmplist = null
  tmplist = list.map((item, index) => {
    if (index == list.length - 1) {
      if (decimalMode) {
        item = getIntToDecimalNum(item, value);
      } else {
        let newTmpValue = String(list[list.length - 1]) + String(value);
        if (newTmpValue.length > 8) {
          newTmpValue = newTmpValue.slice(0, 8);
        }
        item = Number(newTmpValue);
      }
      return item
    } else {
      return item
    }
  })
  return tmplist
}

export const setNewCalcItem = (state, signal) => {
  let newNumList = [];
  let newCalcList = [];

  newCalcList = [].concat(state.calcList, [signal]);

  if (state.calcList.length > 0) {
    if (signal == '+' || signal == '-') {
      newNumList = getCalcAnswer(state);
      newCalcList = [signal];
    }

    if (signal == '*' || signal == '/') {
      const tmpPreAnswer = getCalcAnswerWithPriority(state, signal);
      newNumList = tmpPreAnswer.newNumList;
      newCalcList = tmpPreAnswer.newCalcList;
    }

  } else {
    newNumList = state.numList;
  }

  return { newCalcList, newNumList }
}