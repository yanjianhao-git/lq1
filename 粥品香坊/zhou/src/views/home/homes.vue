<template>
	<div id="app">
		<h1>gfhfgj</h1>
		<p>MVVM 是 Model-View-ViewModel 的缩写。Model代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。View代表UI 组件，它负责将数据模型转化成UI 展现出来。ViewModel监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。</p>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="stylus">
	@import "index.css";
	p
		@param 2
</style>
