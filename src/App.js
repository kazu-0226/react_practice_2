import { useState, useCallback, useMemo } from "react";
import "./styles.css";

import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [open]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <>
      <div className="App">
        <div>
          <input value={text} onChange={onChangeText} />
          <br />
          <br />
          <button onClick={onClickOpen}>表示</button>
          <ChildArea open={open} onClickClose={onClickClose} />
        </div>
      </div>
    </>
  );
}
