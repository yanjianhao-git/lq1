<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
ul,li,ol{
	list-style: none;
}
a{
  text-decoration: none;
  color: #73aee6
}
input{
  border: none;
  outline: none;
}
</style>
