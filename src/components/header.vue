<template >
  <div class="container">
    
    <nav class="nav mb-3">
      <a class="nav-link active" href="#">
        <router-link to="/">首頁</router-link>
      </a>
      <a class="nav-link" href="#">
        <router-link to="/product">產品</router-link>
      </a>
       <a class="nav-link" href="#">
        <router-link to="/login">登入</router-link>
      </a>
      
    </nav>

   <!-- <button @click="previous">上一步</button>
    <button @click="next">下一步</button>-->
    
    <!--
    <template v-if="step==1" :title="'基本資料'">
      <custom-info :title="'基本資料'"></custom-info>
    </template>

    <template v-if="step==2">
      <product :title="'商品區'"></product>
     
    </template>

    <template v-else-if="step==3">
      <payment-input :title="'價錢'"></payment-input>
    </template>

    <p>{{step}}</p>
-->
    <!--<div>
      <input type="text" v-model="step" :text="step">
      <div v-if="step == 1">1</div>
      <div v-if="step == 2">2</div>
      <div v-if="step == 3">3</div>
    </div>--->
    
  </div>
</template>

<script>


export default {
  name: "header",
  props: {
    title: {
      type: String,
      default: "基本資訊",
    },
  },
  data() {
    return {
      //page:"基本資料",
      step: 1,
      pp: "商品區",
      name: "",
      titletop: "",
    };
  },
  components: {
    
  },
  methods: {
    next() {
      this.step++;
      //this.$http.get('static/product.json').then(res => {
      //console.log("json資料為:" + res.body)//此處的res物件包含了json的檔案資訊和資料，我們需要的json資料存在於body屬性中
      //})
      //this.$emit('title',this.title)
    },

    previous() {
      this.step--;
    },
    //childByValue(childValue){
    //this.titletop=childValue
    //}
  },
};
</script>

<style scoped lang="scss">
button:hover {
  background-color: azure;
}
button {
  margin: 2rem;
}
</style>
