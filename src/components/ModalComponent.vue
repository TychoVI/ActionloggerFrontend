<template>
  <div class="modal fade" id="{{ modalId }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  props: ['title', 'modalId'],
  data() {
    return  {
      modalObject: null
    }
  },
  mounted() {

  },
  methods:{
    open(){
      this.modalObject.show();
    },
    init() {
      this.modalObject = new Modal(this.modalId)
    }
  }
}
</script>

<style scoped>

</style>