<template>
    <div>
        <section>
            <h2>Inputs</h2>
            <ul class="explain">
                <li>Input type 선택 : _type</li>
                <li>스위치 타입 : :isswitch='true'</li>
            </ul>
            <div class="design_box">
                <ul>
                    <!-- 특정 위치 부터 가져올 때 method에 선언한 함수(startFrom) 호출 -->
                    <li v-for="(e,i) in startFrom(Inputs_data, 1)" :key="i" style="width:33.3333%;">
                        <Inputs :_type="e.type" :_id="e.id" :_name="e.name" :_text="e.txt" :isswitch="e.isswitch" :_placeholder="e.placeholder" />
                    </li>
                </ul>
            </div>
            <div class="code_box">
                <pre><code>&lt;Inputs _type="radio" _id="id" _name="name" _text="Text" /&gt;
&lt;Inputs _type="checkbox" _id="id" _name="name" _text="Text" /&gt;
&lt;Inputs _type="checkbox" _id="id" _name="name" _text="Text" isswitch="true" /&gt;
&lt;Inputs _type="text" _id="id" _name="name" _text="Text" _placeholder="placeholder" /&gt;</code></pre>
            </div>
        </section>
    </div>
</template>

<script>
import Inputs from './components/Inputs.vue'

export default {
    name: 'App',
    components: {
        Inputs
    },
    data(){
        return {
            Inputs_data:[
                {type:'radio', id:'first', name:'first', txt:'First Item'},
                {type:'radio', id:'test1', name:'test1', txt:'Radio'},
                {type:'checkbox', id:'test2', name:'test2', txt:'Checkbox'},
                {type:'checkbox', id:'test2', name:'test2', txt:'Switch', isswitch:true},
                {type:'text', id:'test2', name:'test2', placeholder:'Text'},
                {type:'password', id:'test2', name:'test2', placeholder:'Password'}
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

<style scoped>
section {margin:20px;}
.design_box > ul {margin-top:-15px; margin-left:-15px; display:flex; flex-wrap:wrap; align-items:center;}
.design_box > ul > li {padding-top:15px; padding-left:15px;}

.code_box {margin-top:20px; padding:15px; color:#fff; line-height:1.8; background-color:#000;}
.code_box pre {overflow:auto;}
</style>
