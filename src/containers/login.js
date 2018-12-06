//引入

import {connect} from 'react-redux';


//引入UI组件
import Login from '../components/login';
//引入action creators
import {login} from '../redux/actions';



//暴露容器组件

export default connect (
  state=>({user:state.user}),
  {login}
)(Login);
