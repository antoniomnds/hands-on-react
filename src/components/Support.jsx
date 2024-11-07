import { useReducer, useEffect } from "react";

const pageTitle = document.title;

const Support = () => {
  const [count, setCount] = useReducer(count => count+1, 0);

  useEffect(() => {
    count && (document.title = `${pageTitle} - ${count}`)
  }, [count]);

  return (
    <button className="outline" onClick={setCount}>
      {count === 0 ? "Click to support" : `Supported ${count} times`}
    </button>
  );
}

export default Support;
