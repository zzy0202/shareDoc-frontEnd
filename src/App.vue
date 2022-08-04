<template>
  <div id="app">
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </keep-alive>
  </div>
</template>

<style lang="less">
* {
  margin:0;
  padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
