// Postmen으로 서버 연결하고 url 넣고 연결하여 자료파일 불러와서 출력된 표 확인
// 기존 목서버의 파일 불러와 확인
<template> 
    <div>
        <button @click="getUserList">조회</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            url: "https://b1e5b8ea-4ddb-49b8-9239-f62e6fea9a35.mock.pstmn.io.getUserList",
            userList: [],
        };
    },
    setup() {},
    created() {},
    mounted() {
        // this.getUserList();
    },
    unmounted() {},
    methods: {
        async getUserList() {
            var userList = (await axios.get(this.url)).data.data;

            if (this.selecteGender == "") {
                //성별 전체 선택
                if (this.selecteName == "") {
                    //이름 입력 안함
                    this.userList = userList;
                } else {
                    //이름 입력 함
                    this.userList = userList.filter(
                        (u) =>
                        u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1
                        // 사용자 이름에서 입력한 이름을 포함하는 데이터
                    );
                }
            } else {
                //성별 남자 혹은 여자 선택한 경우
                if (this.searchName == "") {
                    //이름 입력안함
                    this.userList = userList.filter(
                        (u) => u.gender == this.selectedGender
                        //사용자 성별이 사용자가 선택한 성별에 맞는 데이터
                    );
                } else {
                    // //이름 입력함
                    // this.userList = userLIst.filter(
                    //     (u) => 
                    //     u.gender == this.selectedGender &&
                    //     u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1 
                    //     //성별과 이름 조건 모두 만족하는 데이터
                    // );
                    
                    var user2 = [];
                    for(user of userList) {
                        if(
                            user.gender == this.selectedGender &&
                            user.name.toLowerCase.indexOf(this.searchName.toLowerCase()) > -1
                        ) {
                            user2.push(user);
                        }
                    }
                    this.userList = user2;
                }
            }
        }
    }
}
</script>