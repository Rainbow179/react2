

import {combineReducers} from 'redux';  //合并多个reducers函数
import {AUTH_SUCCESS,AUTH_ERROR} from './action-types';

//定义一个初始化状态的值
const initUserState = {
  username:'',
  type:'',
  _id : '',
  errMsg: '',
  redirectTo:''
};

//产生新的user函数
function user(previousState = initUserState,action) {
  
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...action.data,redirectTo:getRedireactPath(action.data.type,action.data.header)};
    case AUTH_ERROR:
      // return action.data;正常写法
      //更好的写法,可以自定义设置更多的值
      return {...initUserState,...action.data};
    default:
      return previousState;
  }
  
}

// const initYyyState = {};
//
// function yyy(previousState = initYyyState,action) {
//
//   switch (action.type) {
//     default:
//       return previousState;
//   }
//
// }


//定义一个getRedireactPath函数,用来判断type的值以及是否又header
function getRedireactPath (type,header) {
  let path = '';
  
  if(type === 'laoban'){
    
    path = '/laoban';
    
  } else {
     path = '/dashen';
  }
  
  if (!header){
    path += 'info'; //如果没有header值,证明完善页面没有完成,跳转的响应的完善页面(laobaninfo,dasheninfo)
  }
  
  return path;
  
}



//往外暴露的是对象
export default combineReducers({
  user
})
