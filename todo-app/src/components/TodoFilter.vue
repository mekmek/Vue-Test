<template>
  <div>
    <ul>
      <li><label><input name="filter" type="radio" value="すべて" v-model="showStatus">すべて</label></li>
      <li><label><input name="filter" type="radio" value="作業中" v-model="showStatus">作業中</label></li>
      <li><label><input name="filter" type="radio" value="完了" v-model="showStatus">完了</label></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  data() {
    return {
      showStatus: 'すべて'
    }
  },
  watch: {
    showStatus() {
      this.$emit('change-show-status', this.showStatus);
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
  display: flex;
}

li {
  list-style: none;
}
</style>