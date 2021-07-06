<template>
    <div>
        <model_layout>
            <template v-slot:boader>
                <h1>모달 팝업 타이틀</h1>
            </template>
            <template v-slot:main>
                <p>모달 콘텐츠 1</p>
                <p>모달 콘텐츠 2</p>
                <p>모달 콘텐츠 3</p>
            </template>
            <template v-slot:footer>
                <button>닫기</button>
            </template>
        </model_layout>
    </div>
</template>
<script>
import ModelLayout from "../components/SlotModelLayout";
export default {
    name: "",
    components: { " model_layout": ModelLayout },
    data() {
        return {
            sampleData: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
};
</script>