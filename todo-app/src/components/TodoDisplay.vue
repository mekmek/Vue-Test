<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in todos" :key=idx v-show="showStatus == 'すべて' || item.status == showStatus">
          <td>{{ idx }}</td>
          <td>{{ item.todo }}</td>
          <td>
            <button @click="changeStatus(idx)">{{ item.status }}</button>
            <button @click="deleteTodo(idx)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodoDisplay",
  props: ['todos', 'showStatus'],
  methods: {
    changeStatus(idx) {
      this.$emit('change-status', idx);
    },
    deleteTodo(idx) {
      this.$emit('delete-todo', idx);
    }
  }
}
</script>

<style scoped>
table {
  text-align: left;
}
</style>