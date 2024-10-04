<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/characters">Personajes</router-link></li>
        <li><router-link to="/stages">Niveles</router-link></li>
        <li><router-link to="/moves">Movimientos y ataques</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 15px;
}

nav ul li a {
  text-decoration: none;
  color: #000;
}
</style>
