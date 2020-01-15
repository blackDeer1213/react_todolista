import React, { Component, Fragment } from 'react'

export default class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [
        { id: 1, name: '学音乐' },
        { id: 2, name: '学音乐2' },
        { id: 3, name: '学音乐3' },
      ],
      // list: ['学音乐', '学语文', '学英文'],
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={e => this.onTextChange(e)} />
          <button onClick={() => this.onBtnClick()}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => (
              <li key={item.id} onClick={this.deleteItem.bind(this, index)}>{item.name}</li>))
          }
        </ul>
      </Fragment>
    )
  }
  onTextChange(e) {
    let value = e.target.value;
    this.setState({ inputValue: value })
  }
  onBtnClick() {
    // this.refs.title.value=''
    this.setState({
      inputValue: '',
      list: [...this.state.list, { id: this.state.list.length + 1, name: this.state.inputValue }]
    })
  }
  deleteItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
