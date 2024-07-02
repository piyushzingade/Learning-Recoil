import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./stores/atoms/atom";

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
      <Event />
    </div>
  );
}

function Event() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "even" : "odd"}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;