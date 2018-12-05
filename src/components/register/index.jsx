//引入

import React,{Component} from 'react';
import {NavBar,WingBlank, WhiteSpace, List, InputItem, Radio, Button} from 'antd-mobile';

import Logo from '../logo';
import {reqRegister} from '../../api';

//定义变量

const Item = List.Item;



//设置

class Register extends Component{
  
  //定义初始状态
  state = {
    laoban:true,
    username:'',
    password:'',
    repassword:''
  }
  
//   //最初的写法
//   //设置handleRadio,获得单选项按钮,是老板还是大神
//   handleRadio = type =>{
//     if(type === 'laoban'){
//       this.setState ({
//         isBossChecked : true
//       } )
//     }else {
//       this.setState ({
//         isBossChecked : false
//       })
//     }
// }
//   //设置用户名事件,定义一个value,拿到用户输入的用户名的值,e为传入的参数,用于拿到用户输入的值
//   handleUserName = e =>{
//     const value = e.target.value.trim();
//     this.setState({
//       username:value
//     })
//   }
//   //设置密码事件
//   handlePassWord = e =>{
//     const value = e.target.value.trim();
//     this.setState({
//       password:value
//     })
//   }
//   //设置确认密码事件
//   handleRePassWord = e =>{
//     const value = e.target.value.trim();
//     this.setState({
//       repassword:value
//     })
//   }
//
  
  //更改后的写法 用户名  密码  单选项
  handleChange = (type,value)=>{
    this.setState({
      [type]:value
    })
  }
  
  
  //定义注册事件
  register = async() =>{
    //收集表单数据
    const {laoban,username,password,repassword} =this.state;
    
    //发送ajax
    console.log(laoban,username,password,repassword);
    
    //引用reqRegister方法,将函数改成async函数,用await接收返回数据
    const user = await reqRegister({username,password,type : laoban ? 'laoban' : 'dashen'});
    console.log(user);

  }
  
  //给已有账号按钮绑定一个事件,点击跳转到登陆页面
  //push 和replace 都能跳转地址,push有历史纪录,replace没有历史纪录,在移动端,一般前往前页面的箭头,所以用replace
  
  goLogin =() =>{
    this.props.history.replace('/login');
  
  }
  
  
  
  
  
  render(){
    
    const {laoban} = this.state;
    
    
    
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={val=>this.handleChange('username',val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem onChange={val=>this.handleChange('password',val)} type="password">密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem onChange={val=>this.handleChange('repassword',val)} type="password">确认密码:</InputItem>
            <WhiteSpace/>
            <Item>
              用户类型:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!laoban} onChange={this.handleChange.bind(null,'laoban',false)}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={laoban} onChange={this.handleChange.bind(null,'laoban',true)}>老板</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>注册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账号</Button>
            
          </List>
        </WingBlank>
        
        
      </div>
      
    
    )
  }
}

export default Register;