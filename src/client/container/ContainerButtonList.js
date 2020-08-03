import { connect } from 'react-redux';
import { initState, ac, pn, percent, plus, minus, multiple, divided, answer, point, number } from '../action';
import ButtonList from '../component/ButtonList';

const mapStateToProps = (state = initState) => ({
  type: state.type,
  value: state.value,
  calcList: state.calcList,
  numList: state.numList,
  decimalMode: state.decimalMode,
  lastCalcList: state.lastCalcList,
  lastNumList: state.lastNumList
})

const mapDispatchToProps = dispatch => ({
  ac: props => dispatch(ac(props)),
  pn: props => dispatch(pn(props)),
  percent: props => dispatch(percent(props)),
  plus: props => dispatch(plus(props)),
  minus: props => dispatch(minus(props)),
  multiple: props => dispatch(multiple(props)),
  divided: props => dispatch(divided(props)),
  answer: props => dispatch(answer(props)),
  point: props => dispatch(point(props)),
  number: (props, tmpValue) => dispatch(number(props, tmpValue))
})

const ContainerButtonList =  connect(mapStateToProps, mapDispatchToProps)(ButtonList);
export default ContainerButtonList
