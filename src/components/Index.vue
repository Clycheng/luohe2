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
    
  </div>
 
</template>

<script>
import $ from "jquery"
import Loading from "@/components/Loading"
import Header from "@/components/Header"
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
      
    }
  },
  components:{
    Loading:Loading,
     Header:Header
  },
  mounted:function(){
    // console.log(this.components.Header)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "../assets/css/animate注释.css";
/* @import "../assets/css/bootstrap.min.css"; */
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
