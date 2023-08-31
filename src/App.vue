<template>
    적용 테스트03
    <HelloWorld msg="Welcome to Your Vue.js App.."/>
    <ul>
        <li>
            <Inputs :_type="Inputs_data[0].type" :_id="Inputs_data[0].id" :_name="Inputs_data[0].name" class="ani" />
            {{ Inputs_data[0].txt }}
        </li>
        <!-- 특정 위치 부터 가져올 때 method에 선언한 함수(startFrom) 호출 -->
        <!-- <li v-for="(e,i) in Inputs_data" :key="i">
            <Inputs :_type="e.type" :_id="e.id" :_name="e.name" />
            {{ e.txt }}
            {{ i }}
        </li> -->
        <li v-for="(e,i) in startFrom(Inputs_data, 1,3)" :key="i">
            <!-- <Inputs :_type="e.type" :_id="e.id" :_name="e.name" /> -->
            a : 
            {{ e.txt }}
        </li>
        <li v-for="(e,i) in startFrom(Inputs_data, 3,5)" :key="i">
            <!-- <Inputs :_type="e.type" :_id="e.id" :_name="e.name" /> -->
            b : 
            {{ e.txt }}
            {{ i }}
        </li>
    </ul>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Inputs from './components/Inputs.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        Inputs
    },
    data(){
        return {
            Inputs_data:[
                {type:'radio', id:'first', name:'first', txt:'First Item'},
                {type:'radio', id:'test1', name:'test1', txt:'Second Item'},
                {type:'checkbox', id:'test2', name:'test2', txt:'Third Item'},
                {type:'radio', id:'test1', name:'test1', txt:'Fourth Item'},
                {type:'checkbox', id:'test2', name:'test2', txt:'Fiveth Item'}
            ]
        }
    },
    methods: {
        startFrom(arry, start, end){//start = index, end = n번째꺼
            return arry.slice(start,end)
        }

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
