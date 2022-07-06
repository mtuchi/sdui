<template>
  <Layout>
    <Alert v-on:triggerAlert="showAlert" v-show="showing" />
  </Layout>
</template>
<script>
import Layout from './components/Layout.vue'
import Alert from './components/Alert.vue'

export default {
  name: 'App',
  components: {
    Layout,
    Alert
  },
  data() {
    return {
      alertData: {},
      showing: false
    }
  },
  methods: {
    showAlert(data) {
      console.log("nime", data)
      this.alertData = data;
      this.showing = true;

      setTimeout(() => this.showing = false, 5000);
    }
  }
}
</script>

