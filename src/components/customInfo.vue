<template>
    
<div class="container">

     
<h2>{{title}}</h2>
<div>姓名
      <input type="text" placeholder="填寫姓名"  v-model="name">
      <div>{{name}}</div>

      <!--<select v-model="name">
							<option value="all">全部</option>
							<option :value="name">run</option>
			</select>-->
</div>
</div>
</template>

<script>
export default {
    name:'customInfo',
    props:{
        title:{
            type:String
        }
    },
    data(){
        return{
            name:""
        }

    }
}
</script>>