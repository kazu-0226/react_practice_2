import { useState } from "react";
import "./styles.css";

import { ChildArea } from "./ChildArea";

export default function App() {
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  // const onClickCountUp = () => {
  //   setCount(count + 1);
  // };

  const onChangeText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onClickOpen = () => setOpen(!open);

  return (
    <>
      <div className="App">
        {/* <div>
          <p>カウント</p>
          <p>{count}</p>
          <button onClick={onClickCountUp}>カウントアップ</button>
        </div> */}
        <div>
          <input value={text} onChange={onChangeText} />
          <br />
          <br />
          <button onClick={onClickOpen}>表示</button>
          <ChildArea open={open} />
        </div>
      </div>
    </>
  );
}
