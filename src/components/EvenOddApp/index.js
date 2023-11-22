// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  genrannumber = () => {
    let rand = Math.random() * 100
    rand = Math.floor(rand)
    this.setState(prevState => ({count: prevState.count + rand}))
  }

  checking = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {count} = this.state
    const result = this.checking()

    return (
      <div className="main-container">
        <div className="inner-container">
          <h1>Count {count}</h1>
          <p>Count is {result}</p>
          <button className="btn" onClick={this.genrannumber}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
