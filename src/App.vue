<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
  }
});
</script>
<style scoped>
.content {
  height: calc(100vh - 60px);
}
</style>
