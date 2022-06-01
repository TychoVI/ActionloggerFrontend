<script>
import MeetingList from "../components/meeting/MeetingList.vue";
import Modal from "@/components/ModalComponent.vue";

export default {
  components: {
    Modal,
    MeetingList
  },
  mounted() {

  }
}
</script>

<template>
  <h2>Meetings</h2>
  <button type="button" class="btn btn-primary" @click="$refs.meetinglist.fetchData()">Refresh</button>
  <button type="button" class="btn btn-primary" @click="$refs.createMeetingModal.open()">Open</button>
  <button type="button" class="btn btn-primary" @click="$refs.createMeetingModal.init()">Init</button>
  <Modal title="Create Meeting" modalId="createMeetingModal" ref="createMeetingModal">
    <template>
      form here
    </template>
  </Modal>
  <MeetingList ref="meetinglist" />
</template>