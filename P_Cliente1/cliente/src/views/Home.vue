<template>
  <div class="home">
    <h2 id="divp">
      <img alt="Vue logo" src="../assets/Tyni.png" class="img" />
      <p style="align-content: center">
        PsychoHelp, es un proyecto que busca ayudar a los usuarios con sus
        problemas de salud mental
      </p>
    </h2>
    <div class="footer">
      <h3 style="color: white"></h3>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 40px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  max-width: 1400px;
  min-width: 375px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  margin-bottom: 0;
  color: #222222;
}

.header-section {
  margin-bottom: 100px;
}

.header-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}

.site-title {
  width: 30%;
}

.site-nav {
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.site-nav > a {
  color: inherit;
  text-decoration: none;
}

.site-nav > a:hover {
  text-decoration: underline;
  font-weight: bold;
}

.logo-container {
  width: 30%;
}

.logo-container__site-logo {
  height: 80px;
}

.banner {
  width: 100%;
}

.banner > img {
  width: 100%;
  height: 400px;
  max-width: 1400px;
  object-fit: cover;
}

.services-section,
.seccion-noticias,
.seccion-equipo {
  display: flex;
  margin-bottom: 100px;
}

.seccion-noticias,
.header-container {
  background-color: #f7f7f7;
}

.seccion-noticias {
  flex-wrap: wrap;
}

.services-info {
  padding: 20px;
  text-align: center;
}

.news-info {
  width: 50%;
  padding: 20px;
}

.news-header {
  display: flex;
  justify-content: space-around;
}

.news-info__title {
  align-self: center;
}

.seccion-pie {
  background-color: #25294f;
  height: 200px;
  display: flex;
  color: white;
  justify-content: space-evenly;
}

.services-info__imagen {
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
}

.team-info {
  width: 25%;
  padding: 15px;
}

.team-info__imagen {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

#divp {
  background-color: #e5ebff;
  margin-block-start:70px;
  margin-left: 25%;
  margin-block-end: 50px;
  margin-right: 25%;
  padding: 80px;
  text-align: unset;
  border-radius: 40px;
  color: #474747;
}
.img {
  float: right;
  margin-left: 20px;
  width: 250px;
  height: 320px;
}
.footer{
  background-color: #222222;
  margin-block-end: 0%;
}
</style>

