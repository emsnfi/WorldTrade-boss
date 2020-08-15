<template >
  <div class="all">
     <!---可以變成{{}}-->
    
    <button @click="previous">上一步</button>
    <button  @click="next">下一步</button>
    <template v-if="step==1" :title="'基本資料'">
      <custom-info :title="'基本資料'"></custom-info>
    </template>

    <template v-if="step==2"  >
        
        <product :title="'商品區'"></product>
       <!--@childByValue="childByValue"-->
    </template>

    <template v-else-if="step==3" >
       
        <payment-input :title="'價錢'"></payment-input>
    </template>

   
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
  import CustomInfo from '@/components/customInfo.vue'
  import Product from '@/components/Product.vue'
  import PaymentInput from '@/components/PaymentInput.vue'
  
export default {
    name: 'test',
    props:{
     title: {
			type: String,
			default: '基本資訊',
		}
    },
    data() {
      return {
        //page:"基本資料",
        step: 1,
        pp:"商品區",
        name:"",
        titletop:""
      }
    },
    components:{
        PaymentInput,
        Product,
        CustomInfo
    },
    methods:{
        next(){
            this.step++;
            //this.$http.get('static/product.json').then(res => {
 //console.log("json資料為:" + res.body)//此處的res物件包含了json的檔案資訊和資料，我們需要的json資料存在於body屬性中
//})
            //this.$emit('title',this.title)
              
          },
       
        previous(){
          this.step--;
        },
        //childByValue(childValue){
          //this.titletop=childValue
        //}
    }

    }
   
    
  
</script>

<style scoped lang="scss">
 button:hover{

         background-color: azure;
     
 }
 button{
   margin:2rem;
 }
 
</style>
