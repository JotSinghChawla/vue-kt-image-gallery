<template>
  <h1 class="">
    Sending API call...
  </h1>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  methods: mapActions(['finaliseLogin']),
  created() {
    this.finaliseLogin('access_token=123')
  }
};
</script>