<template>
  <header class="fixed z-10 w-60 h-screen bg-[#20252c] p-4 text-white font-mono">
    <h1 class="mb-4 font-bold hover:text-cyan-300">
      <nuxt-link to="/"> Hello World </nuxt-link>
    </h1>

    <nav class="flex flex-col">
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
