import React from 'react';

const MessageBox = ({ items, children }) => {
  if (children) items = children;
  items = Array.isArray(items) ? items : [items];

  return (
    <>
      {items.map((item, i) => (
        <div key={item + '-' + i}>{item}</div>
      ))}
    </>
  );
};

export default React.memo(MessageBox);
