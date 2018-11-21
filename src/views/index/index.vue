<template>
  <div class="city">
    <ul>
      <li v-for="(item,index) in items" :class="{'active':item.checked}" @click="isActive(item)">{{item.text}}</li>
    </ul>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default{
    data:function() {
      return {
        items:[
          {text: '静安区'},
          {text: '宝山区'},
          {text: '虹口区'},
          {text: '闵行区'},
          {text: '普陀区'},
          {text: '青浦区'},
          {text: '金山区'},
          {text: '奉贤区'},
          {text: '浦东新区'},
          {text: '长宁区'},
          {text: '松江区'},
          {text: '嘉定区'},
          {text: '杨浦区'},
          {text: '黄埔区'},
          {text: '徐汇区'}
        ]
      }
    },
    mounted:function() {

    },
    methods: {
      isActive:function(item){
        if(typeof item.checked == 'undefined') {
          //全局创建
          //Vue.set(item,'checked',true);
          //局部创建
          this.$set(item,'checked',false);
          // console.log(item.text)

        }else{
          item.checked = !item.checked;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<style lang='less'>
  .city {
    width: 100%;
    ul {
      display:flex;
      flex-flow: row wrap;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      text-align: center;
      li {
        display: inline-block;
        width: 23%;
        padding: 5px 0;
        margin: 5px 6px 0 0;
        box-sizing: border-box;
        background: #eee;
      }
      .active {
        background: blue;
        color: #fff;
      }
    }
  }
</style>

