import Home from '../pages/Home';
import Result from '../pages/Result';

const pathUrl = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/user/:user',
    component: Result,
  },
];

export default pathUrl;
