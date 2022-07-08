<template>
  <nuxt-link to="/detail" class="relative">
    <img src="/icon.png" />
    <div
      class="
        absolute
        w-full
        h-full
        px-2
        pb-2
        bottom-0
        bg-gradient-to-t
        from-gray-700
        hover:opacity-100
        opacity-0
        transition-opacity
        grid
        place-items-end
      "
    >
      <div class="w-full mt-auto flex items-center space-x-2">
        <div class="rounded-full h-8 w-8 bg-slate-800 p-1">
          <img src="/icon.png" />
        </div>
        <div>
          <h2 class="font-bold leading-none text-white">Hello World</h2>
          <small class="text-white/75 font-thin">XDD</small>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardItem',
}
</script>

<style>
</style>
