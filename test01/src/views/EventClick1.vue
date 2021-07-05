<template>
    <div>
        <button type="button" @click="setCount(7)">set 7</button>
        <p>The counter is : {{counter}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        setCount(counter) {
            this.counter = counter;
        }
    }
}
</script>