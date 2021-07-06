<template>
    <div></div>
</template>
<script>
export default {
    inject: ["itenLength"],
    mounted() {
        console.log(this.itemLength);
    },
};
</script>