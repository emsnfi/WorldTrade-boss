<template>
  <div class="all">
    <template v-if="step==1">
      <h2>基本資料</h2>
      <div>姓名
      <input type="text" placeholder="填寫姓名"  v-model="name">
      <div>{{name}}</div>

      <select v-model="name">
							<option value="all">全部</option>
							<option :value="name">run</option>
			</select>
    </div>
    </template>

    <template v-if="step==2">
        <h2>商品</h2>
        <product></product>
       
    </template>

    <template v-else-if="step==3">
        <h2>金額</h2>
        <payment-input></payment-input>
    </template>

    <button  @click="next">下一步</button>
    <button @click="previous">上一步</button>
    <p>{{step}}</p>
    
    <!--<div>
      <input type="text" v-model="step" :text="step">
      <div v-if="step == 1">1</div>
      <div v-if="step == 2">2</div>
      <div v-if="step == 3">3</div>
    </div>--->
    <div class="buy">
      
    </div>
  </div>


</template>

<script>
 
  
  import Hello from '@/components/HelloWorld'
  import Product from '@/components/Product.vue'
  import PaymentInput from '@/components/PaymentInput.vue'
export default {
    name: 'test',
    data() {
      return {
        step: 1,
        name:"dsad"
      }
    },
    components:{
        PaymentInput,
        Product
    },
    methods:{
        next(){
            this.step++;
             
        },
        previous(){
          this.step--;
        }
         
        
    },
   
    }
  
</script>

<style >
 button:hover{

         background-color: azure;
     
 }
 button{
   margin:2rem;
 }
 
</style>
