<template>
<!-- <h4>
  this works if i do not destructure useCounterStore
  {{counterStore.counter}} x2 = {{counterStore.doubleCount}}
</h4> -->
<h4>
  {{ counter }} x2 = {{ doubleCount }}
</h4>
<button @click="addOne">Add One</button>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from './store/useCounter';
  
const counterStore = useCounterStore()
// const { counter, name, doubleCount } = counterStore
// above won't work because by destructuring, we lose the reactivity of the store.
// we will need to use an utility: storeToRef
const { counter, name, doubleCount} = storeToRefs(counterStore)
const { addOne } = counterStore // if we want to destructure action we don not use storeToRefs
counterStore.$subscribe((mutation, state) => {
  console.log('!!!mutation', mutation)
  console.log('!!!state', state)
})
</script>