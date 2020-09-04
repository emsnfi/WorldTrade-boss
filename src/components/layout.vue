<template>
	<div class="layout">
        
		<div class="main-container">
			<a class="sr-only" href="#id_main">移至主內容</a>
			<com-header></com-header>
			<main class="container" role="main" id="id_main">
               
				<router-view></router-view>
			</main>
			
		</div>
		
	</div>
</template>

<script>
//import Header from '@/components/header'
import comHeader from '@/components/header.vue';

export default {
    name: 'layout',
	components: {
        comHeader,
        
	}
}
</script>