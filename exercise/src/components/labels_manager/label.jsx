import React from 'react';

function getStyle (color) {

  return {
    backgroundColor: color
  };
};

const Label = ({ label, ...props }) => {

  const style = getStyle(label.get('color'));
  const className = label.get('selected') ? 'label selected' : 'label';

  return (

    <div className={className} style={style} {...props}>{label.get('name')}</div>
  )
};

export default Label;
