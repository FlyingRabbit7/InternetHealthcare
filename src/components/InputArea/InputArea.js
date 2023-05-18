import "./InputArea.css";
import React, { useState } from "react";
import request from '../../request/index'
import { Input } from "antd";

const { TextArea } = Input;

function InputArea() {
  const [value, setValue] = useState('');
  const send = () => {
    console.log(value)
    request("post", '/openai/deployments/gpt/completions?api-version=2022-12-01',
      {
        prompt: value,
        // max_tokens: 5
      }
    ).then((res) => {
      console.log(res, '<---res')
    })
  };
  return (
    <div className="container">
      <div className="input-wrap">
        <div className="input-area">
          <TextArea className="text-area" value={value} onChange={(e) => setValue(e.target.value)} placeholder="你可在此输入进行回答" autoSize={{ minRows: 1, maxRows: 4 }} />
        </div>
        <div className="btn-area" onClick={send}>
          <div>发送</div>
        </div>
      </div>
    </div>
  );
}

export default InputArea;
