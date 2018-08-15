<template>
	<div id="app">
		<router-view/>

	</div>
</template>


<script>
	export default {
		name: 'App',
		data() {
			return {}
		}
	}
</script>

<style>
	.header_wrap {
		width: 100%;
		top: 0;
		left: 0;
		position: fixed;
		background-color: #fff;
		border-bottom: 1px solid #e7e7e7;
	}

	.header {
		text-align: right;
		height: 60px;
		width: 1000px;
		margin: 0 auto;
		/*background: #666;*/
	}

	.header a {
		display: inline-block;
		padding: 0px 10px;
		margin-left: 20px;
		height: 60px;
		line-height: 60px;
	}

	.main_wrap {
		margin-top: 60px;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/*margin-top: 60px;*/
	}
</style>
