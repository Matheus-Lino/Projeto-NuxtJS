<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, expedita a recusandae voluptates corrupti hic at distinctio beatae accusamus dignissimos aspernatur animi autem laborum voluptatem harum perferendis ipsa optio nihil?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('./api/currency/BRL')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    p {
        margin: 20px 0px;
    }
</style>