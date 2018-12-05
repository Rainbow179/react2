//ajax请求模块,用来定义发送ajax模板工具函数


import axios from 'axios';


export default  async function (url,data,method ='GET') {
  
  //定义一个变量 查询字符串
  let qs = '';
  
  //判断data数据是否存在(也有可能不传),处理请求参数
  if(data){
    console.log(data);
    //返回一个数组,数组中包含对象中的所有属性名  Object.keys(data)
    const arr =Object.keys(data);
    
    //遍历这个数组,拿到所有属性名,进行拼串
    arr.forEach(key =>{
      qs +=`${key}=${data[key]}&`
    })
    //去掉最后一个多余的&
    qs = qs.substring(0, qs.length-1);
    
  }
  //判断请求方式
  
  const type = method.toUpperCase();   //定义一个类型方法,全部转化为大写
  if(type === 'GET'){
    //发送请求,将请求参数拼接在一起
     return axios.get(url + '?' +qs);
  }else if (type === 'POST'){
   return axios.post(url,qs,{
      'content-type':'application/x-www-form-urlencoded'  //post请求,要加一个请求头,原生的必须加这个响应头才能发送成功(也会自动加)
    });

  }
}
