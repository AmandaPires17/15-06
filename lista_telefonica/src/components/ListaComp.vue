<template>
  <header>
    <div class="menu_superior">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/lista">Lista</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/favoritos">Favoritos</RouterLink> </span>
    </div>
  </header>
</template>
<style>
header span {
  padding: 0 50px;
}
a {
  color: rgb(116, 21, 94);
  text-decoration: none;
}
header.menu_superior {
  justify-content: space-between;
}
</style>
