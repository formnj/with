<template>
    <header>
        <h1><a :href="path">Vue Guide.</a></h1>
        <ul class="gnb">
            <li :id="path"><a :href="path+'setting/vue2/'">Setting</a></li>
            <li><a :href="path+'form/'">Form</a></li>
        </ul>
    </header>
</template>

<script setup>
let path = ''

if(window.location.hostname == 'formnj.github.io'){
    path = '/with/'
} else {
    path = '/'
}
</script>

<style lang="scss" scoped>
    header {
        padding:20px;
        border-bottom:1px solid #ddd;
        display:flex;
        justify-content:space-between;
        a {
            color:#222;
            text-decoration:none;
        }
        .gnb {
            margin-top:20px;
            display:flex;
            a {
                padding:8px 15px;
                display:block;
            }
        }
    }
</style>