

import {combineReducers} from 'redux';
import {AUTH_SUCCESS,AUTH_ERROR} from './action-types';

//定义一个初始化状态的值
const initUserState = {
  username:'',
  type:'',
  _id : '',
  errMsg: ''
};


function user(previousState = initUserState,action) {
  
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.data;
    case AUTH_ERROR:
      // return action.data;正常写法
      //更好的写法,可以自定义设置更多的值
      return {...initUserState,...action.data};
    default:
      return previousState;
  }
  
}

const initYyyState = {};

function yyy(previousState = initYyyState,action) {
  
  switch (action.type) {
    default:
      return previousState;
  }
  
}

//往外暴露的是对象
export default combineReducers({
  user
})
