"use strict";(self["webpackChunkmessage_project"]=self["webpackChunkmessage_project"]||[]).push([[403],{8403:function(s,e,r){r.r(e),r.d(e,{default:function(){return p}});var t=function(){var s=this,e=s._self._c;return e("div",{staticClass:"flex-box"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[s._v("用户密码修改")])]),e("div",[e("el-form",{ref:"user",attrs:{rules:s.rules,model:s.user,"label-width":"70px"}},[e("el-form-item",{attrs:{label:"久密码",prop:"oldpwd"}},[e("el-input",{attrs:{placeholder:"请输入久密码","show-password":""},model:{value:s.user.oldpwd,callback:function(e){s.$set(s.user,"oldpwd",e)},expression:"user.oldpwd"}})],1),e("el-form-item",{attrs:{prop:"password",label:"新密码"}},[e("el-input",{attrs:{placeholder:"请输入新密码","show-password":""},model:{value:s.user.password,callback:function(e){s.$set(s.user,"password",e)},expression:"user.password"}})],1),e("el-form-item",{staticClass:"flex-box",attrs:{"label-width":"0px"}},[e("el-button",{attrs:{type:"primary"},on:{click:s.submitForm}},[s._v("修改")]),e("el-button",{on:{click:function(e){return s.resetForm("user")}}},[s._v("重置")])],1)],1)],1)])],1)},a=[],l=(r(7658),r(3685)),o={data(){return{user:{oldpwd:"",password:""},rules:{oldpwd:[{required:!0,message:"请输入久密码",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm(){let s=JSON.parse(JSON.stringify(this.user));s.password=l.Z.md5(s.password),s.oldpwd=l.Z.md5(s.oldpwd),l.Z.ajax("/user/auth/updatePwd",s,(s=>{s.success&&l.Z.ajax("/user/auth/logout",{},(s=>{this.$store.dispatch("updatedUser"),this.$message("密码修改成功请重新登录"),this.$router.push({path:"/user/login"})})),this.resetForm("user")}))},resetForm(s){this.$refs[s].resetFields()}}},u=o,d=r(1001),i=(0,d.Z)(u,t,a,!1,null,null,null),p=i.exports}}]);
//# sourceMappingURL=403.824d5c3e.js.map