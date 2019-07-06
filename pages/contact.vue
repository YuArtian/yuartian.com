<template>
  <div id="page">
		<div class="container home-page">
			<span class="tags top-tags"> &lt;html&gt;<br> &nbsp;&nbsp;&nbsp;&lt;body&gt; </span>
			<div class="text-zone">
				<h1 aria-label=" Hi, I’m ulamabbas,web developer." class="blast-root">
					Hi, <br> I'm
					<img src="https://gmawji.com/wp-content/themes/_gmawji/images/g_logo.png" alt="G" class="animated rotateIn">Yu,
					<br>
					web developer.
				</h1>
				<h2>Front End Developer / React / Vue</h2>
				<a rel="contact" href="#contact" class="flat-button" style="opacity: 1;">CONTACT ME</a>
			</div>
			<span class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br> &lt;/html&gt; </span>
		</div>
	</div>
</template>
<script>
export default {
  head(){
    return {
      // script: { src: '/blash.js' }
    }
  },
  mounted(){
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600');
@import url('https://fonts.googleapis.com/css?family=La+Belle+Aurore');
@import url('https://fonts.googleapis.com/css?family=Exo:700,800');
</style>
<style lang="less">
//font stack(s)
@cabin: 'Titillium Web', sans-serif;
@belle: 'La Belle Aurore', cursive;
@exo: 'Exo', sans-serif;

// site colours
@primary-color: #0b2535;
@secondary-color: #10364e;
@accent-color: #d8be68;

// text colours
@text-white: #fff;

body {
  background-color: @primary-color;
  font-family: @cabin;
  & ::selection {
    background: @accent-color;
  }
}

.page {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
}
.container {
  width: 100%;
  height: 90%;
  min-height: 566px;
  position: absolute;
  top: 5%;
  margin: 0 auto;
  z-index: 1;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.tags {
  color: @secondary-color;
  position: absolute;
  bottom: 0;
  left: 90px;
  font-size: 20px;
  font-family: @belle;
}
.top-tags {
  bottom: auto;
  top: 70px;
}
.home-page {
  & .text-zone {
    position: absolute;
    left: 10%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 40%;
    max-height: 90%;
    & img {
      width: 25px;
    }
    & a {
      font-weight: 300;
    }
  }
  & h1 {
    color: @text-white;
    font-size: 53px;
    line-height: 48px;
    margin: 0;
    font-family: @exo;
    font-weight: normal;
    &::before {
      content: '<h1>';
      font-family: @belle;
      color: @secondary-color;
      font-size: 18px;
      position: absolute;
      margin-top: -35px;
    }
    &::after {
      content: '<h1/>';
      font-family: @belle;
      color: @secondary-color;
      font-size: 18px;
      position: absolute;
      margin-top: 18px;
      margin-left: 20px;
      -webkit-animation: myanim2 1s 3s backwards;
      animation: myanim2 1s 3s backwards;
    }
  }
  & h2 {
    color: @accent-color;
    margin-top: 9px;
    font-weight: 400;
    font-size: 11px;
    font-family: @cabin;
    letter-spacing: 3px;
    -webkit-animation: myanim2 1s 2.5s backwards;
    animation: myanim2 1s 2.5s backwards;
  }
  & .flat-button {
    color: @accent-color;
    font-size: 11px;
    letter-spacing: 3px;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    padding: 6px 10px;
    border: 1px solid @accent-color;
    margin-top: 40px;
    float: left;
    border-radius: 4px;
    opacity: 0;
    &:hover {
      background: @accent-color;
      color: @primary-color;
    }
  }
  & .blast {
    opacity: 0;
    display: inline-block;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    &:hover {
      color: @accent-color;
    }
  }
}
</style>
