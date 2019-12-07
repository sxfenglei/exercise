import React from 'react';
import Myconfirm from './Myconfirm';

function App() {
  let value = '标题', content = '测试内容';

  let showMyconfirm = ()=>{
    // Myconfirm.confirmModal()
  }
  return (
    <div>
      <button onClick={showMyconfirm}>myConfirm显示</button>
      <Myconfirm title={value} content={content} />
    </div>
  )
}

export default App;
