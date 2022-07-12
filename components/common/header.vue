<template>
  <header class="sticky pad:fixed top-0 z-10 w-full pad:w-60 h-auto pad:h-screen bg-[#20252c] p-4 text-white font-mono">
    <h1 class="font-bold hover:text-cyan-300">
      <nuxt-link to="/"> Hello World </nuxt-link>
    </h1>

    <nav class="hidden pad:flex flex-col mt-4">
      <nuxt-link class="hover:bg-white hover:text-black -mx-4 px-4 py-2" to="/"> Gallery </nuxt-link>
      <nuxt-link class="hover:bg-white hover:text-black -mx-4 px-4 py-2" to="/"> Gallery </nuxt-link>
      <nuxt-link class="hover:bg-white hover:text-black -mx-4 px-4 py-2" to="/"> Gallery </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style>
</style>
