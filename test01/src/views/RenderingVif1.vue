<template>
    <div>
        <button>조회</button>
        <button v-if="userRole == 'Admin'">생성</button>
        <button v-show="userRole == 'Admin'">삭제</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userRole: "User"
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
};
</script>