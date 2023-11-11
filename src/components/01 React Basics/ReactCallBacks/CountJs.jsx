import React from "react";

const CountJs = ({ count }) => {
  console.log('2-CountJs');
  return (
    <>
      <h3>The Count is:{count}</h3>
    </>
  );
};

export default React.memo(CountJs);
