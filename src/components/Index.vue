<template>
<div>
    <Loading></Loading>
    <Header v-on:callBack="Back" :Page="isOK"></Header>
      <main id = "dowebok">
        <Banner  ></Banner>
        <About :class="isOK?'page2':'active'"></About>
        <Service :class="isOK?'page3':'active'"></Service>
        <Case :class="isOK?'page4':'active'"></Case>
        <Customer :class="isOK?'page5':'active'"></Customer>
        <Contact :class="isOK?'page6':'active'"></Contact>
      </main>
    <Modal></Modal>
 </div>
</template>
<script>
require("../assets/js/jquery.min.js")
require("../assets/js/bootstrap.min.js")
require("../assets/js/jquery.fullPage.js")
require("../assets/js/jquery.fullPage.min.js")
require("../assets/js/fullpage.easing.js")
// require("../assets/js/jquery-1.8.3.min.js")
require("../assets/js/wow.min.js")
require("../assets/js/index.js")
// import $ from "../assets/js/jquery.min.js"
// import fullPage from "@/assets/js/fullpage.seaing.js"
import Loading from "@/components/child/Loading"
import Header from "@/components/child/Header"
import Banner from "@/components/Banner"
import About from "@/components/About"
import Service from "@/components/Service"
import Case from "@/components/Case"
import Customer from "@/components/Customer"
import Contact from "@/components/Contact"
import Modal from "@/components/Modal"
// import { constants } from 'http2';
export default {
  name: 'Index',
  data () {
    return {
      isOK:"",
       scrolled: false
      
    }
  },
  components:{
    Loading:Loading,
     Header:Header,
     Banner:Banner,
     About:About,
     Service:Service,
     Case:Case,
     Customer:Customer,
     Contact:Contact,
     Modal:Modal
  },
methods: {
    Back:function(e){
      this.isOK = e;
      console.log(this.isOK)
    }
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "../assets/css/animate注释.css";
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/jquery.fullPage.css";
@import "../assets/css/index.css";
@import "../assets/css/loading.css";
body{
    user-select: none;
}
a:hover{
    text-decoration: none;
}
.bg{
    background: no-repeat center;
    background-size: cover;
}
.fs20{
    font-size: 20px;
}
.line-bg{
    height: 32px;
    background: url("../assets/img/shiguang_splitter.png") no-repeat center;
    margin: 30px 0 50px;
    text-align: center;
}
.title{
    font-size: 30px;
    text-align: center;
    color: #eee;
    font-family: lingxin,'Microsoft Yahei','YaHei WebFont',Verdana,Geneva,Tahoma,sans-serif,'宋体';
    font-weight: bold;
    font-style: italic;
    margin-top: 160px;
}
.title span{
    margin-left: 4px;
    margin-right: 4px;
    font-size: 1.2em;
    color: #00c2ff;
    font-family: lingxin,'Microsoft Yahei','YaHei WebFont',Verdana,Geneva,Tahoma,sans-serif,'宋体';
    font-weight: bold;
    font-style: italic;
}
/*.collapse{*/
    /*display: none;*/
/*}*/
@media screen and (max-width: 790px){
    .fs20 {
        font-size: 14px;
    }
}
</style>
