<template>
    <vuetable ref="vuetable"
    api-url="http://localhost:3000/todos"
    :fields="['text', 'completed', 'completedAt']"
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/vuetable'
export default {
  name: 'Todos',
  components : {
      Vuetable
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
