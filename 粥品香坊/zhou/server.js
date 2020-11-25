const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const data = require('./data.json');
let app = express();
let code = '';
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.listen(8085,() => {
	console.log("创建服务器")
})
app.get('/seller',(req,res) => {
	res.send(data.seller)
})
app.get('/goods',(req,res) => {
	res.send(data.goods)
})
app.get('/ratings',(req,res) => {
	res.send(data.ratings)
})



//返回验证码
app.post('/code',(req,res) => {
	if(req.body.username === ''){
		res.send({
			msg: '手机号不能为空',
			code: 0
		})
	}else if(!/^1[34578]\d{9}$/.test(req.body.username)){
		res.send({
			msg: '输入的手机号有误',
			code: 0
		})
	}else{
		code = getCode();
		res.send({
			code: code
		})
	}
})
//验证账号验证码,并返回数据
app.post('/login',(req,res) => {
	if(req.body.username === '' || req.body.code === ''){
		res.send({
			code: 1,
			msg: '用户名或验证码不能为空'
		})
	}else if(/^1[34578]\d{9}$/.test(req.body.username) && req.body.code.toLowerCase() === code.toLowerCase()){
		res.send({
			code: 0,
			msg: '登录成功'
		})
	}else{
		res.send({
			code: 2,
			msg: '用户名或验证码错误'
		})
	}

})

//生成验证码的方法
function getCode(){
	let a = '';
	for(let i = 0;i < 4;){
		let num = Math.floor(Math.random() * 75 + 48);
		if(num >= 48 && num <= 57 || num >= 65 && num <= 90 || num >= 97 && num <= 122){
			a += String.fromCharCode(num);
			i++;
		}
	}
	return a;
}


