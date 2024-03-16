<template>
    <section>
        <h2>Fragments</h2>

        <h3 @click="_alert">vue2 : 컴포넌트의 루트 요소 1개</h3>
        <button class="btn">이거에 보더를 바꿔주세요.</button>
        <pre class="code_box"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;header&gt;...&lt;/header&gt;
        &lt;main&gt;...&lt;/main&gt;
        &lt;footer&gt;...&lt;/footer&gt;
    &lt;/div&gt;
&lt;template&gt;</code></pre>

        <h3 @click="_alert">Vue3 : 컴포넌트의 루트 요소 여러 개 지정 가능</h3>
        <button class="btn">222이거에 보더를 바꿔주세요.</button>
        <pre class="code_box"><code>&lt;template&gt;
    &lt;header&gt;...&lt;/header&gt;
    &lt;main&gt;...&lt;/main&gt;
    &lt;footer&gt;...&lt;/footer&gt;
&lt;template&gt;</code></pre>
    </section>

    <section>
        <h2>script</h2>

        <h3>default</h3>
        <pre class="code_box"><code>&lt;script&gt;
export default {
    data(){
        return{}
    }, //data 선언 영역
    methods:{}, //함수 선언 영역
    mounted(){} //컴포넌트가 마운트된 후 호출 ($(document).ready와 같은 개념)
}
&lt;/script&gt;</code></pre>

        <h3>script setup</h3>
        <pre class="code_box"><code>&lt;script setup&gt;
import { onMounted } from 'vue'

onMounted(() => {}) //컴포넌트가 마운트된 후 호출 ($(document).ready와 같은 개념)
&lt;/script&gt;</code></pre>
    </section>

    <section>
        <h2>Style</h2>

        <h3>default</h3>
        <pre class="code_box"><code>&lt;style&gt;
    ...
&lt;/style&gt;</code></pre>

        <h3>scss</h3>
        <pre class="code_box"><code>&lt;style lang="scss"&gt;
    ...
&lt;/style&gt;</code></pre>

        <h3>local (선언한 페이지에만 적용)</h3>
        <pre class="code_box"><code>&lt;style scoped&gt;
    ...
&lt;/style&gt;</code></pre>
    </section>
</template>

<script>
export default {
    data(){
        return{}
    }, //data 선언 영역
    methods:{
        _alert(e){
            console.log(e.target);
            if (e.target.nextSibling.classList.contains('on')){
                e.target.nextSibling.classList.remove('on') //e.target.nextSibling:대상을 .classList.remove('on'):이렇게 해줘.
            } else {
                e.target.nextSibling.classList.add('on');
            }
            // e.currentTarget.textContent='test';
            // e.target.nextSibling.style.border = '1px solid red';
            // console.log(e.target.nextSibling)
        }
    }, //함수 선언 영역
    mounted(){} //컴포넌트가 마운트된 후 호출 ($(document).ready와 같은 개념)
}
</script>

<!-- <script setup>
import { onMounted } from 'vue'

onMounted(() => {}) //컴포넌트가 마운트된 후 호출 ($(document).ready와 같은 개념)
</script> -->

<style></style>