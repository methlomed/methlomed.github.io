// main.js app.js become as entry point
import regeneratorRuntime from 'regenerator-runtime';
import './script/component/app-bar.js';
import main from './script/view/main.js';
import './script/component/foot-bar.js';

document.addEventListener("DOMContentLoaded", main);