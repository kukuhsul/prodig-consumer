// particular component to test (visually)

import React from 'react';
import {render} from 'react-dom';

import {HelloAgain} from 'prodig';

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <HelloAgain />,
  root,
);
