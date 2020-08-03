import { initState } from '../action';
import { connect } from 'react-redux';
import Monitor from '../component/Monitor';

const mapStateToProps = (state = initState) => {
  return ({
    type: state.type,
    value: state.value,
    calcList: state.calcList,
    numList: state.numList
  })
}

const ContainerMonitor  = connect(mapStateToProps)(Monitor);
export default ContainerMonitor