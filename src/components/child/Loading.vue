<template>
        <div class="loading">
            <div class="loading-top"></div>
            <div class="loading-middle"></div>
            <div class="loading-bottom"></div>
        </div>
</template>
<script>
export default {
    name:"Loading"
}
</script>
<style > 
    /* @charset "UTF-8"; */
html,body{
    width: 100%;
    height: 100%;
}
.loading{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*background: red;*/
    z-index: 900;
}
.loading-top,.loading-bottom{
    width: 100%;
    height: 50%;
}
.loading-top{
    background: #337ab7;
}
.loading-middle{
    width: 0%;
    height: 8px;
    background: #00c2ff;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -10px;
    z-index: 1;
}
.loading-bottom{
    background: #337ab7;
}
.lm{
    animation: lm 1s ease both;
}
.lt{
    animation:lt 1s 1s ease both;
}
.lb{
    animation:lb 1s 1s ease both;
}
@keyframes lm {
    0%{width:0;}
    90%{width: 100%;transform: scaleY(1)}
    100%{width: 100%;transform: scaleY(0);}
}
@keyframes lt {
    0%{transform:translateY(0);}
    100%{transform:translateY(-101%);}
}
@keyframes lb {
    0%{transform:translateY(0);}
    100%{transform:translateY(101%);}
}
</style>


