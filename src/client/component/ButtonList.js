import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const changeNum = (props, tmpValue) => {
  props.number(props, tmpValue);
}

const ButtonList = (props) => {
  const { ac, pn, percent, plus, minus, multiple, divided, answer, point } = props;

  return (
    <div className='buttonList'>
      <Button props={props} type={'AC'} text={'AC'} classProps={'blueBG font12'} onClickFunc={() => ac(props)}></Button>
      <Button props={props} type={'PN'} text={'+/-'} classProps={'blueBG font12'} onClickFunc={() => pn(props)}></Button>
      <Button props={props} type={'PERCENT'} text={'%'} classProps={'blueBG font12'} onClickFunc={() => percent(props)}></Button>
      <Button props={props} type={'DIVIDED'} text={'÷'} classProps={'blueBG whiteFont'} onClickFunc={() => divided(props)}></Button>
      <Button props={props} type={'NUMBER'} text={'7'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 7)}></Button>
      <Button props={props} type={'NUMBER'} text={'8'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 8)}></Button>
      <Button props={props} type={'NUMBER'} text={'9'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 9)}></Button>
      <Button props={props} type={'MULTIPLE'} text={'×'} classProps={'blueBG whiteFont'} onClickFunc={() => multiple(props)}></Button>
      <Button props={props} type={'NUMBER'} text={'4'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 4)}></Button>
      <Button props={props} type={'NUMBER'} text={'5'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 5)}></Button>
      <Button props={props} type={'NUMBER'} text={'6'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 6)}></Button>
      <Button props={props} type={'MINUS'} text={'-'} classProps={'blueBG whiteFont'} onClickFunc={() => minus(props)}></Button>
      <Button props={props} type={'NUMBER'} text={'1'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 1)}></Button>
      <Button props={props} type={'NUMBER'} text={'2'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 2)}></Button>
      <Button props={props} type={'NUMBER'} text={'3'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 3)}></Button>
      <Button props={props} type={'PLUS'} text={'+'} classProps={'blueBG whiteFont'} onClickFunc={() => plus(props)}></Button>
      <Button props={props} type={'NUMBER'} text={'0'} classProps={'biggerButton darkGreyBG whiteFont'} onClickFunc={() => changeNum(props, 0)}></Button>
      <Button props={props} type={'POINT'} text={'.'} classProps={'darkGreyBG whiteFont'} onClickFunc={() => point(props)}></Button>
      <Button props={props} type={'ANSWER'} text={'='} classProps={'blueBG whiteFont'} onClickFunc={() => answer(props)}></Button>
    </div>
  )
}

ButtonList.propTypes = {
  ac: PropTypes.func.isRequired,
  pn: PropTypes.func.isRequired,
  percent: PropTypes.func.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
  multiple: PropTypes.func.isRequired,
  divided: PropTypes.func.isRequired,
  answer: PropTypes.func.isRequired,
  point: PropTypes.func.isRequired
}

export default ButtonList
