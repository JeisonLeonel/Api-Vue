<template>
  <section class="main">
    <h1>The Rick and Morty API</h1>
        
    <div id="app">
    <nav>
      <button><router-link id="text" to="/">Home</router-link></button>
      <button type=""><router-link id="text" to="/six">Six Characters</router-link></button>
      <button><router-link id="text" to="/eight">Eight Characters</router-link> </button>
      
    </nav>
    <router-view></router-view>
  </div>
    
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'assets/style.css';
</style>




