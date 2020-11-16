<template>
  <header>
    <div class="container-fluid">
      <div class="row header" v-cloak>
        <div class="col">
          <!-- 漢堡按鈕 -->
          <button class="hamburger hamburger--squeeze" type="button">
            <!-- @click="active" -->

            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <div id="logo">
            <a href="./index.html">
              <img src="../img/LEO-logo.png" alt="logo" />
            </a>
          </div>
          <ul class="menu">
            <a :href="item.link" v-for="(item, index) in menu" :key="index">
              <li>
                {{ item.title }}
              </li>
            </a>
          </ul>
          <div class="member">
            <a href="./ligin.html">
              <span>
                <i class="fas fa-user-circle"></i>
                <p>登入 / 註冊</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template> 
<script>
export default {
  name: "headerComponent",
  data() {
    return {
      index: 0,
      menu: [
        {
          title: "活動辦法",
          link: "javascript:;",
        },
        {
          title: "兌換專區",
          link: "javascript:;",
        },
        {
          title: "常見問題",
          link: "javascript:;",
        },
        {
          title: "會員專區",
          link: "javascript:;",
        },
        {
          title: "卡友專區",
          link: "javascript:;",
        },
        {
          title: "交通優惠",
          link: "javascript:;",
        },
      ],
    };
  },
};
</script>
<style lang="sass" scoped>
@import '../assets/scss/main.scss'
@import '../assets/scss/header.scss'
</style>