<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li id = "cheng">
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
    </ul> -->
    <loading></loading>
    <Header></Header>
    <Banner></Banner>
    <Service></Service>
  </div>
 
</template>

<script>
import $ from "jquery"
// import fullPage from "@/assets/js/fullpage.seaing.js"
import Loading from "@/components/child/Loading"
import Header from "@/components/child/Header"
import Banner from "@/components/Banner"
import About from "@/components/About"
import Service from "@/components/Service"
// import { constants } from 'http2';
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
      
    }
  },
  components:{
    Loading:Loading,
     Header:Header,
     Banner:Banner,
     About:About,
     Service:Service
  },
  mounted:function(){
    
    // console.log(this.components.Header)
  },
  methods:{
    fullPage:function(){
      // this.test_log()
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "../assets/css/animate注释.css";
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/jquery.fullPage.css";
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
