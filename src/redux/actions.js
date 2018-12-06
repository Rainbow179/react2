//  包含多个用来创建action的action creators
// 同步  返回值 action 对象;  异步处理  返回值是函数  diapatch =>{xxx}


//引入
import {reqRegister} from '../api';
import {reqLogin} from '../api';
import {AUTH_SUCCESS,AUTH_ERROR}from './action-types';


//定义同步action creator 来创建action对象
export const authSuccess =data =>({type:AUTH_SUCCESS,data});
export const authError =data =>({type:AUTH_ERROR,data});


//定义异步的register的action creator,函数
export const register = ({username,password,repassword,type}) =>{
  
  //做表单验证,是一个同步的action对象
  if(!username){
      return authError ({errMsg:'请输入用户名'})
  } else if (!password){
     return authError ({errMsg:'请输入密码'})
  } else if (password !== repassword) {
    return authError ({errMsg:'两次密码不一致,请重新输入'})
  }
  
  
  
  return dispatch =>{
    //做异步任务,发送ajax请求
    reqRegister({username,password,type})
      .then(({data})=>{
        //请求成功,更新数据;并不代表注册成功,只是代表请求过程中网络没有问题
        if(data.code === 0){
          //注册成功,更新状态,因为数据要保存在redux中,第一个data代表相应回来的数据,第二个代表响应回来的数据中的data
          dispatch(authSuccess(data.data)) //authSuccess(data.data)代表action对象中的数据
        }else{
         //注册失败,更新状态,分发失败的action 对象
          dispatch(authError({errMsg:data.msg})); //全部都写成对象好维护,以前是  authError({data.data)
        }
      })
      .catch(err =>{
        //请求失败
        dispatch(authError({errMsg:'网络不稳定,请刷新重试~'}));
      })
    
  }
}

//定义异步的login的action creator,函数
export const login =({username,password}) =>{
  
  //表单验证
  
  if (!username){
    return authError({errMsg:'请输入用户名'})
  }else if (!password) {
    return authError({errMsg:'请输入密码'})
  }
  
  //定义dispatch函数,并返回dispatch的值.用来发送请求,请求包括成功和失败的状态,成功的状态又份成功和失败两种
  
  return dispatch =>{
    
    //发送请求
    reqLogin({username,password})
      .then(({data}) => {
        //成功登陆的状态
        if(data.code === 0){
        //登陆成功
          dispatch(authSuccess(data.data));
        
        } else {
        //登陆失败
          dispatch(authError({errMsg:data.msg}))
        }
      })
      .catch(({data}) =>{
        //失败登陆的状态
        dispatch(authError({errMsg:'网络有问题,请刷新重试'}))

      })
  
  
  
  }
  
  
  
}
