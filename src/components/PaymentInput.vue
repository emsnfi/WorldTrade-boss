<template>
<div>
 <h2>{{title}}</h2>
    
      <input type="number" placeholder="填寫金額">
      
    </div>
</template>

<script>
export default {
    name:'PaymentInput',
    props:{
         title: {
			type: String,
			default: '',
    }
    }
}
</script>