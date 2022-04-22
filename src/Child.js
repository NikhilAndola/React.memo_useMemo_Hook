import React from 'react';

//Child.js
function Child(props) {
  console.log('Child Render');
  return (
    <div>
      <h2>{props.name}</h2>
      <p>
        <i>
          Once the user clicks Increase Count button, the count will increase,
          and it will cause a re-render in the parent component. Here, the value
          change of the count variable doesn't affect the props passed into the
          child variable, and the child component should not re-render.
        </i>
      </p>
      <p>
        <i>
          However, as you can see, the child component’s render method is also
          invoked whenever the parent component is re-rendered. This will
          trigger the child components’ virtual DOM to do a variance check
          against the previous virtual DOM state. But, the real DOM will not
          change because the child component has no changes. Although the real
          DOM does not change, it will take some time to compare with virtual
          DOM to see identical. Therefore, this behaviour can cause significant
          performance issues and increase the loading times in large-scale
          applications. That’s why we need to use React.memo() and useMemo() to
          optimize the React component rendering process.
        </i>
      </p>
      <p>
        <strong>
          React.memo() was introduced with React 16.6 to avoid unnecessary
          re-renders in functional components. It is a higher-order component
          that accepts another component as a prop. It will only render the
          component if there is any change in the props. Let’s now examine the
          above example again to understand how React.memo() works. But, this
          time, we need to wrap the child component with React.memo().
        </strong>
      </p>
    </div>
  );
}

export default React.memo(Child);
