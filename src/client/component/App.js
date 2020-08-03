// library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// css
import '../css/style.scss';

// components
import ContainerButtonList from '../container/ContainerButtonList';
import ContainerMonitor from '../container/ContainerMonitor';

// custmize javascript
import { draggableConfig } from '../toolkit';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    let calculatorRef = document.querySelector('.calculator');
    draggableConfig.init(calculatorRef);
  }

  render() {
    return (
      <div className="calculator"
        onTouchStart={(e) => { draggableConfig.dragStart(e) }}
        onTouchMove={(e) => { draggableConfig.dragging(e) }}
        onTouchEnd={(e) => { draggableConfig.dragEnd(e) }}
        onTouchCancel={(e) => { draggableConfig.dragEnd(e) }}
        onMouseDown={(e) => { draggableConfig.dragStart(e) }}
        onMouseMove={(e) => { draggableConfig.dragging(e) }}
        onMouseUp={(e) => { draggableConfig.dragEnd(e) }}
        onMouseOut={(e) => { draggableConfig.dragEnd(e) }}
      >
        <div className="container">
          <ContainerMonitor></ContainerMonitor>
          <ContainerButtonList></ContainerButtonList>
        </div>
      </div>
    );
  }
}
