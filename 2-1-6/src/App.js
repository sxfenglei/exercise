import React,{Component,useState} from 'react';
import './App.css';

//受控 value和onChange
class InputNumber extends Component {
  constructor(props){
    super(props);
    this.state = { 
      value: props.defaultValue || ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    alert('Input value = ' + this.state.value);
  }
  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">提交</button>
      </form>
    );
  }
}

//非受控 ref
class InputNumber2 extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert('Input value = ' + this.textInput.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={input=>this.textInput=input} />
        <button type="submit">提交</button>
      </form>
    );
  }
}

function App() {
  const [value, setValue] = useState('aaa')
  return (
    <div>
      受控
      <InputNumber value={value} onChange={e => { }} />
      <InputNumber defaultValue={value} onChange={e => { }} />
      非受控
      <InputNumber2 />
    </div>
  )
}

export default App;
