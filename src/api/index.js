//定义所有请求函数

import ajax from './ajax';

//
// //定义一个接口前缀,正常请求的配置
// const prefix = 'http://localgost:4000';

//代理服务器需要的配置
const prefix ='';

//定义注册的请求  发送 url   数据  请求方式;返回值是promise对象,包含请求回来的数据
//data是对象的方式传递

 export const reqRegister = data  => ajax(`${prefix}/register`,data,'POST');
