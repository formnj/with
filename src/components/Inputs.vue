<template>
    <label>
        <input :type="type" :id="id" :name="name" />
    </label>
</template>

<script>
export default {
    name: 'Inputs',
    props: {
        id: String,
        name: String,
        type: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
