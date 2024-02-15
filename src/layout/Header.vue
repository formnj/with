<template>
    <header>
        <h1><a href="/with">Vue Guide</a></h1>
        <ul class="gnb">
            <li><a href="/with/setting/">Setting</a></li>
            <li><a href="/with/form/">Form</a></li>
        </ul>
    </header>
</template>

<script></script>

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