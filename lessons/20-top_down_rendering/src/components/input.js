import React from 'react';
import PureRenderer from '../lib/pure_renderer';

const Input = (props) => <input {...props} />;

Input.displayName = 'Input';

export default Input;
// export default PureRenderer(Input);
