<template>
  <v-app id="app">
    <div>{{getTodo}} </div>
    <div>{{doubleTodoCount}}</div>
    <div>{{getTodCount}}</div>
    <div>{{this.$store.state.num}}</div>
    <v-col cols="2">
    <v-btn color="success" @click="goUserPage()">userPage</v-btn>
    <v-btn color="primary" @click="increaseNumAction()">click2</v-btn>
    </v-col>
  </v-app>
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
      },
      goUserPage(){
        this.$router.push('/user');
      }
    },
}
</script>