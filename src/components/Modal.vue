<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="inner-transition">
        <div v-show="modalActive" class="modal-inner">
            <span @click="closeModal" aria-label="close" title="Close" class="point-modal close-top">X</span>
             <!-- Modal content goes here -->
          <slot />
          <button type="button" @click="closeModal" class="point-modal close-bottom">Close</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['modalActive'],
  setup(props, { emit }) {
      const closeModal = () => {
          emit('close')
      }
          return { closeModal };
  }
}
</script>

<style lang="scss">
// buttons
.point-modal {
    cursor: pointer;  
    &.close-top {
        align-self: flex-end;
    }
    &.close-bottom {
        align-self: flex-start;
    }
}

.open-modal {
    width: 6rem;
    height: 2.5rem;
}

// Modal
.modal {
    width: 40vw;
    height: 20vh;
    background: #fff;
    padding: 1em;
    .modal-inner {
        display: flex;
        flex-flow: column wrap;
    }
}
</style>
