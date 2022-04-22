import Child from './Child';
import './style.css';
import React, { useState, useRef, useMemo } from 'react';
import { useState } from 'react';

//Parent.js
export default function Parent() {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const useMemoRef = useRef(0);
  const incrementUseMemoRef = () => useMemoRef.current++;
  const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]);

  console.log('Parent Render');

  return (
    <div>
      <div style={{ margin: '15px' }}>
        <h1>React.Memo and useMemo()</h1>
        <main>
          Performance optimization is an important factor in web development.
          React uses “memoization” as an optimization technique to speed up the
          rendering process of the components. It offers React.memo() and
          useMemo() to implement memoization.
        </main>
      </div>
      <hr />
      <button onClick={handleClick}>Increase Count</button>
      <h2>{count}</h2>
      <Child name={'Child Component'} />
      <p>
        <em>
          When we click the Increase Count button, the child component won't be
          re-rendered, and the application will reuse the previous rendered
          output.
        </em>
      </p>
      When should we use React.memo()? It is best to use React.memo() when:
      Components are rendered too frequently and slow down the application.
      Component renders’ cost is high (When the loading time is more than
      100ms). Component keeps re-rendering for the same set of props. However,
      using React.memo() in lightweight components can cause performance
      overheads and unexpected errors. Thus, we should also think about the
      complexity of the component when using React.memo().
      <h3>What is useMemo()?</h3>
      useMemo() is one of the most used React Hooks among developers. It takes a
      function and a dependency array as input and memoizes the value returned
      by that function. The specialty of useMemo() is that it will only
      recalculate the memoized value when one of the dependencies changes. This
      optimization helps avoid costly calculations on each render.
    </div>
  );
}
