<template>
  <div>
    <PageTitle 
    :title="title" 
    :title2="title2"
    />
  </div>
</template>
<script>
import PageTitle from '../components/PageTitle';
export default {
  components: {PageTitle},
  data() {
    return {
      title: "부모 컴포넌트에서 전달한 페이지 제목",
      title2: "부제목이요"
    }
  }
};
</script>