<template>
  <div id="app">
    <div>{{getTodo}} </div>
    <div>{{doubleTodoCount}}</div>
    <div>{{getTodCount}}</div>
    <div>{{this.$store.state.num}}</div>
    <button @click="increaseNum()">click</button>
    <button @click="increaseNumAction()">click2</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      increasePercent : 15,
    }
  },
  computed: {
      getTodo () {
        return this.$store.state.todos;
      },
      doubleTodoCount(){
        return this.$store.state.todos.length * this.increasePercent
      },
      getTodCount(){
        return this.$store.getters.getTodosCount;
      },
    },
    methods: {
      increaseNum(){
        return this.$store.commit('increaseNum', '2')
      },
      increaseNumAction(){
        return this.$store.dispatch('increaseNumAction');
      }
    },
}
</script>