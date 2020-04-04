<template>
  <nav>
    <ul>
      <li>
        <router-link to='/'>Home</router-link>
      </li>
      <li>
        <router-link to='/about'>About</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0px;
  }

  li {
    display: inline;
    margin: 0px 5px 0px 5px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a.router-link-exact-active {
    text-decoration: underline;
  }
</style>
