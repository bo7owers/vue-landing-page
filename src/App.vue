<template>
  <div class="nav-flex">
    <router-link to="/">Home</router-link>
    <router-link to="/bienvenue">Bienvenue</router-link>
    <router-link to="/bienvenido">Bienvenido</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

.nav-flex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  background: #369;
  a {
    color: #f3c2f5;
    text-decoration: none;
    transition: all 7s ease-in-out color 0.5s;
    &:visited {
      color: #f3c2f5;
    }
    &:hover {
      text-decoration: underline;
      color: #e0ffb8;
      scale: 1.1;
    }
  }
}
</style>
