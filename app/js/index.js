import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './page';

const page = TestPage();
const app_container = document.getElementById('app');
ReactDOM.render(page, app_container);
