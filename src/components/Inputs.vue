<template>
    <label v-if="_type == 'checkbox' || _type == 'radio'" class="check">
        <input :type="_type" :id="_id" :name="_name" />
    </label>
</template>

<script>
export default {
    name: 'Inputs',
    props: {
        _id: String,
        _name: String,
        _type: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
