<template>
  <div class="home">
    <Modal @close="toggleModal" :modalActive="modalActive">
      <div class="modal-content">
        <div class="modal-title">
        <h1>
          This is the title
        </h1>
        </div>
        <div class="modal-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati adipisci similique ipsam qui fugiat? Dolorum necessitatibus voluptates aspernatur repellendus adipisci nulla fugit quidem quae magni.</p>
        </div>
      </div>
    </Modal>
    <button @click="toggleModal" type="button" class="point-modal open-modal">Open Modal</button>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import { ref } from 'vue'
export default {
  name: 'Home',
  components: {
    Modal
  },
  setup () {
    const modalActive = ref(false)
    const toggleModal = () => {
        modalActive.value = !modalActive.value
}


    return { modalActive, toggleModal }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #222;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
