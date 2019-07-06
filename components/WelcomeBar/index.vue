<template>
  <p class="welcome">
    Hey! Welcome to my site Please feel free ~
  </p>
</template>
<style lang="less" scoped>
.welcome {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  // color: #38889f;
  color: #fff;
  font-size: 13px;
  font-weight: lighter;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  animation: tipsUnderline 2s infinite alternate;
}
@keyframes tipsUnderline {
  from {
    // border-top: 1px solid rgba(56,136,159,.5);
    border-top: 1px solid rgba(255,255,255,.5);
  }
  to {
    // border-top: 1px solid rgba(56,136,159, 0);
    border-top: 1px solid rgba(255,255,255, 0);
  }
}
</style>
