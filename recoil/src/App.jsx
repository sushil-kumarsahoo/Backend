import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("count is rerendered");
  return (
    <div>
      <CountRender />
      <Button />
    </div>
  );
}
function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
