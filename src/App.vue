<template>
    적용 테스트03
    <HelloWorld msg="Welcome to Your Vue.js App.."/>
    <Inputs type="radio" id="test" name="test" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Inputs from './components/Inputs.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        Inputs
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
