<template>
    <section>
        <h2>Fragments</h2>

        <h3>vue2 : 컴포넌트의 루트 요소 1개</h3>
        <pre class="code_box"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;header&gt;...&lt;/header&gt;
        &lt;main&gt;...&lt;/main&gt;
        &lt;footer&gt;...&lt;/footer&gt;
    &lt;/div&gt;
&lt;template&gt;</code></pre>

        <h3>Vue3 : 컴포넌트의 루트 요소 여러 개 지정 가능</h3>
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
    methods:{}, //함수 선언 영역
    mounted(){} //컴포넌트가 마운트된 후 호출 ($(document).ready와 같은 개념)
}
</script>

<!-- <script setup>
import { onMounted } from 'vue'

onMounted(() => {}) //컴포넌트가 마운트된 후 호출 ($(document).ready와 같은 개념)
</script> -->

<style></style>