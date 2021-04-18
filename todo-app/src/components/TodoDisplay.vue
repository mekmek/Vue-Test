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
        <tr v-for="(item, idx) in filteredTodos" :key=idx>
          <td>{{ item.id }}</td>
          <td>{{ item.todo }}</td>
          <td>
            <button @click="changeStatus(item.id)">{{ item.status }}</button>
            <button @click="deleteTodo(item.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "TodoDisplay",
  methods: {
    changeStatus(id) {
      this.$store.dispatch('changeStatus', id)
    },
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id)
    }
  },
  computed: mapGetters(['filteredTodos'])
}
</script>

<style scoped>
table {
  text-align: left;
}
</style>