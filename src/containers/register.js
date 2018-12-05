

import {connect} from 'react-redux';

//引入UI组件

import Register from '../components/register';

//引入action creators
import {register} from '../redux/actions';


//暴露容器组件

export default connect (
  state => ({user:state.user}), //state是通过reducers传递的,是一个对象 ,所以要.user才能拿到
  {register}  //可以记住第二个参数就是这么传,标签属性传进去,定义的方法

)(Register); //UI组件的名字,要用上面数据的UI组件