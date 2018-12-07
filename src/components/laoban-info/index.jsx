
//老板页面的布局

import React, {Component} from 'react';

import HeaderSelector from '../header-selector'
import {NavBar,InputItem,Button,TextareaItem} from 'antd-mobile';


class LaobanInfo extends Component {
  
  //初始化状态
  state = {
    header:'',
    post:'',
    company:'',
    salary:'',
    info:'',
  }
  
  //定义handleChange方法,来收集所有类型以及对应的值
  handleChange = (type,value) =>{
    this.setState({
      [type]:value
    })
  }
  
  //定义一个方法,来更新header的状态,更新的方法要给子组件用
  setHeader =header=>{
    this.setState({
      header
    })
  }
  
  
  
  render () {
   
    
    return (
      
      <div>
        <NavBar>老板信息完善页面</NavBar>
        <HeaderSelector setHeader = {this.setHeader}/>
        <InputItem onChange={val=>{this.handleChange('post',val)}}>招聘职位:</InputItem>
        <InputItem onChange ={val=>{this.handleChange('company',val)}}>公司名称:</InputItem>
        <InputItem onChange ={val=>{this.handleChange('salary',val)}}>职位薪资:</InputItem>
        <TextareaItem title="职位要求:" rows={3} onChange ={val=>{this.handleChange('info',val)}} />
        <Button type="primary">保存</Button>
      </div>
    
    )
  }
}

export default LaobanInfo;