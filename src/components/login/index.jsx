import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import {NavBar,WingBlank, WhiteSpace, List, InputItem,Button} from 'antd-mobile';

import './index.less';
import Logo from '../logo';


class Login extends Component{
  
  static propTypes = {
    user : PropTypes.object.isRequired,
    login : PropTypes.func.isRequired
  }
  
  
  //初始化状态
  state ={
    username:'',
    password:''
  }
  
  //定义一个handleChange方法,给各个input和按钮用
  handleChange = (type,value) =>{
    //更新状态
    this.setState ({
      [type] : value
    })
  }
  
  
  //定义一个login方法,给登陆按钮中的事件调用
  login = async ()=>{
    //收集表单数据
    const {username,password} = this.state;
    //发送ajax
    console.log(username,password);
    //调用容器组件传递的更新状态的方法
    this.props.login({username,password});
  }
  
  //定义一个goRegister方法,给没有账号按钮调用,点击跳转到注册页面
  goRegister = () => {
    this.props.history.replace('/register');
  }
  
  //设置
  render (){
    
    const {errMsg,redirectTo}=this.props.user;
    
    if (redirectTo) {
      return <Redirect to={redirectTo}/>
    }
    
    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <p className="err-msg">{errMsg}</p>
        <WhiteSpace/>
        <WingBlank>
          <List>
            <InputItem onChange={val=>this.handleChange('username',val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={val=>this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.login}>登陆</Button>
            <WhiteSpace/>
            <Button onClick={this.goRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login;