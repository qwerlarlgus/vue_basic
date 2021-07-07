<template>
    <div>{{ user.email?"로그인 성공!": "로그인 후 사용하세요."}}
        <a v-show="!user.email" id="custom-login-btn" @click="kakaoLogin()">
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"/>
        </a>
        <button v-show="user.email" @click="kakaoLogout">카카오로그아웃</button>
    </div>
</template>
<script>
//import axios from 'axios'
export default {
    components: {},
    data() {
        return {
            code: "",
        };
    },
    mounted() {
        Kakao.init('f57232c1042e90d9f03ef78dc8783894');
        Kakao.inInitialized();
        this.kakaoLogout();
    },
        methods: {
            kakaoLogin() {
                window
                    .Kakao
                    .Auth
                    .login({
                        scope: "profile_nickname,account_email,gender",
                        success: this.getKakaoAccount,
                    });
        },
        getKakaoAccount() {
            window
                .Kakao.API.request({
                    url: '/v2/user/me',
                    success: (res) => {
                        const kakaoAccount = res.kakao_account;
                        const nickname = kakao_account.profile.nickname; //카카오 닉네임
                        const email = kakao_account.email; //카카오 이메일

                        console.log("nickname", nickname);
                        console.log("email", email);
                        //로그인 처리 구현
                        console.log(kakaoAccount);
                        this.$store.commit("user", kakaoAccount)
                        alert("로그인 성공 ")
                    },
                });
        },
        kakaoLogout() {
            if (!window.Kakao.Auth.getAccessToken()) {
                console.log('Not logged in.');
                return;
            }
            window.Kakao.Auth.logout((response) => {
                    //로그아웃
                    
                    console.log("access token:", window.kakao.Auth.getAccessToken());
                    console.log("log out", response);
                })
        },
}};
</script>