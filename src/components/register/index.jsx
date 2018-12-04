import React,{Component} from 'react';

import {NavBar,WingBlank, WhiteSpace, List, InputItem, Radio, Button} from 'antd-mobile';


import Logo from '../logo';

const Item = List.Item;



class Register extends Component{
  render(){
    
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem>确认密码:</InputItem>
            <WhiteSpace/>
            <Item>
              用户类型:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>老板</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary">注册</Button>
            <WhiteSpace/>
            <Button>已有账号</Button>
            
          </List>
        </WingBlank>
        
        
      </div>
      
    
    )
  }
}

export default Register;