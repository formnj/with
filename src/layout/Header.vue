<template>
    <header>
        <h1><a :href="path">Vue Guide</a></h1>
        <ul class="gnb">
            <li><a :href="path+'different'">What's different?</a></li>
            <li><a :href="path+'components/'">Components</a></li>
            <li><a :href="path+'script/'">Script</a></li>
            <li><a :href="path+'setting/'">Setting</a></li>
        </ul>
    </header>
</template>

<script setup>
let path = ''
const param = window.location.pathname.split('/')[1];

if(window.location.hostname == 'formnj.github.io'){
    path = '/with/'
} else {
    path = '/'
}

console.log(window.location.pathname+' , '+param)
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
            li {
                position:relative;
                a {
                    padding:8px 15px;
                    display:block;
                }
            }
            ul {
                display:inline-flex;
                align-items:center;
                li {
                    display:flex;
                    align-items:center;
                }
                li + li:before {
                    height:10px;
                    border-left:1px solid #ccc;
                    content:'';
                    display:block;
                }
            }
        }
    }
</style>