<template>
  <transition name="modal">
    <section v-if="isShow" class="fixed z-30 top-0 left-0 w-screen h-screen backdrop-blur grid place-content-center">
      <div
        v-click-outside="doClose"
        class="overscroll-contain relative bg-slate-700 text-white rounded-xl p-4 w-screen pad:w-[30rem] h-screen pad:h-auto"
      >
        <button class="absolute right-4 top-4 p-1 rounded-full bg-slate-500 text-white" @click="doClose">
          <outline-X-icon class="h-4 w-4" />
        </button>

        <slot />
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'ModalLayout',
  props: ['isShow'],
  methods: {
    doClose() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="sass" scoped>
.modal-enter, .modal-leave-to
  opacity: 0

.modal-leave, .modal-enter-to
  opacity: 1

.modal-enter-active, .modal-leave-active
  transition: all .2s

.modal-move-active
  position: absolute

.modal-move
  transition: .2s
</style>
