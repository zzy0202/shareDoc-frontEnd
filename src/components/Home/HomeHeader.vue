<template>
  <div class="HomeHeaderMain">
    <div class="avatar"></div>
    <div class="username">欢迎你!{{username}}</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      username:'熊本熊',
    }
  }
}
</script>

<style scoped lang="less">
.HomeHeaderMain {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: rgb(255,255,255);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.avatar {
  width: 35px;
  height: 35px;
  background-color: pink;
  border-radius: 30px;
  margin-right: 30px;
  background-image: url("../../../public/images/avatar.png");
  background-size: contain;
}
</style>