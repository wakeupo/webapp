<template>
    <div class="contain">
        <div class="logoBox">
            <img class="imgcon" src="../../assets/image/guidlogo.png" alt="">
            <p>现场电子取证</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        autoJumpPage(){
            this.$router.push({path:'/login'})
        }
    },
    mounted(){
        setTimeout(() => {
            this.autoJumpPage();
        }, 5000);
    }
}
</script>
<style scoped>
    .contain{
        background: url(../../assets/image/guidBg.png) no-repeat;
        background-size: 100%;
        height: 100%;
    }
    .imgcon{
        width:45%;
        height: auto;
        margin-top: 230px;
        margin-left:27.5%;
    }
    p{
        font-size:28px;
        color: #f3d8b2;
        text-align: center;
        line-height: 60px;
    }
</style>