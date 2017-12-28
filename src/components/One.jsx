import React, { Component } from 'react';
import './one.less';
export default class One extends Component{
  constructor(props) {
    super(props);
}

static b () {
    console.log(this)
}
static defaultProps = {
    a: One.b
}
  static a =4
  render(){
    console.log("dd")
    return <div>
      one component dee
      <div className="test">22</div>
    </div>
  }
}
console.log(One.defaultProps)