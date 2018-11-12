<!-- login.vue -->
<template>
<div class="wapper">
	<div class="login">
    <h2>欢 迎 登 陆 ！</h2>
		 <el-form :rules="rules" label-position='left' size='small'>
		    <el-form-item  label="用户名" label-width="100px" prop="username">
		      <el-input type="username"></el-input>
		    </el-form-item>
		    <el-form-item  label="密码" label-width="100px" prop="password">
		      <el-input  type="password"></el-input>
		    </el-form-item>
		  </el-form>

			<el-button class="btn" @click='login'>登录</el-button>
			<el-button class="btn" @click='login'>注册</el-button>
     </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
             rules:{
             	username:[{
             		required:true,
             		message:'请输入用户名',
             		trigger:'blur'
             	}],
             	password:[{
             		required:true,
             		message:'请输入有效密码',
             		trigger:'blur'
             	}]
             }
			}
		},
		methods:{
        login(){
        	// alert(this.$root.currentComponent);
        	this.$root.currentComponent ='App'
        }
		}
	}
</script>
<style>  
    .wapper{
    	width: 600px;
    	height: 400px;
    	margin:0 auto;
    	background-color: skyblue;
    	color: #606266;
    	margin-top: 100px;
       	/*伸缩盒设置水平垂直居中*/
    	display: flex;
    	justify-content: center;
		align-items: center;

        }
	.login{
		width:400px;
		height: 300px;	    
		
	}
	.btn{
		margin-left: 200px;
	}
</style>