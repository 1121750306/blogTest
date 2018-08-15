<template>
	<div class="main">
		<div v-for="item in articles" class="article">
			<div class="clear article_top">
				<router-link to="/adminIndex" class="title">{{item.title}}</router-link>
				<a class="time">{{item.time}}</a>
			</div>
			<div class="content">
				{{item.abstract}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
				articles: [{
				    title: '这是title',
					abstract: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
					time: 1534261801636
				}, {
					title: '这是title',
					abstract: '这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS',
					time: 1534261801636
				}, {
					title: '这是title',
					abstract: '这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS这时候我分别v嗷呜i吕恩队IAWLS',
					time: 1534261801636
				}]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.main {
		font-size: 16px;
		width: 1000px;
		margin: 0 auto;
	}
	.article {
		margin: 0 auto;
		width: 800px;
		/*height: 200px;*/
		margin-bottom: 40px;
		/*background: #998;*/
		border-bottom: 1px solid #eee;
		padding: 10px;
	}
	.clear:after {
		width: 0;
		height: 0;
		display: block;
		content: '';
		clear: both;
	}
	.article_top {

	}
	.title {
		margin-left: 20px;
		max-width: 500px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		float: left;
	}
	.time {
		margin-right: 20px;
		float: right;
	}
	.content {
		line-height: 24px;
		text-align: left;
		margin-top: 20px;
		padding: 0 20px;
	}

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
