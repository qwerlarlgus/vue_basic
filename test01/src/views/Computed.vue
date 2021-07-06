<template>
    <div>
        <h1>FUll Name : {{fullName}}</h1>
        <h1>Hello,{{fullName}}</h1>

        <input type="text" v-model="firstName" />
        <input type="texr" v-model="lastName" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName: "KiHyun",
            lastName: "KIM",
            fullName: ""
        };
    },
    watch: {
        fullName() {
            this.fullName = this.firstName + this.lastName
        },
        lastName() {
            this.fullName = this.firstName + this.lastName
        }
    }
}
</script>