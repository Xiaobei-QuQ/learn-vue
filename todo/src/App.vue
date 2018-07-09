<template>
  <div id="app">
   <h1>{{title}}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)" v-bind:key="item.key">
        {{item.label}}
      </li>
    </ul>
    <p>child tells me : {{ childWords  }}</p>
    <component-a msgfromfather="hello,child" v-on:child-tell-me-something="listenToMyBoy"></component-a>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/componentA'
export default {
  data: function () {
    return {
      title: 'this is todo list',
      items: Store.fetch(),
      newItem: '',
      childWords: ''
    }
  },
  components: { ComponentA },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.unshift({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    listenToMyBoy: function (msg) {
      // console.log(msg)
      this.childWords = msg
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  }
}
</script>

<style>
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    margin: 10px 0;
    padding: 0;
  }
  li {
    font-size: 16px;
    line-height: 25px;
  }
  .finished {
    color: #ccc;
    text-decoration: line-through;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
