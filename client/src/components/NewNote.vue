<template>
    <div v-if="show">
        <input 
            type="text" 
            name="body"
            v-model="text"
            placeholder="your Note" />
        <button @click="addNote">Submit</button>
    </div>
    <div v-else-if="success">
        <h3>The note was saved. I think it should print the note
         <p>{{this.noteResult}}</p>
         <br>
         <button @click="toggleShow">new Note</button>
         </h3>
    </div>
    <div v-else-if="error">
        <h3>an error has occurred. This is the message {{errorContent}}</h3>
        <button @click="toggleShow">new Note</button>
    </div>
</template>

<script>
import PostNote$ervice from '@/services/PostNote$ervice'
export default {
  name: 'NewNote',
  data () {
    return {
     text: '',
     show: true,
     success: false,
     error: false,
     errorContent : null,
     noteResult: null
    }
  },
  methods: {
      async addNote () {
          console.log('todo bien');
          await PostNote$ervice.addNote({text: this.text}).then((result) => {
              this.show = false;
              this.error = false;
              this.success = true;
              this.errorContent = null;
              this.noteResult = JSON.stringify(result.data, undefined, 2); 
          }).catch(e => {
              this.show = false;
              this.success = false;
              this.error = true;
              this.errorContent = e;
              this.noteResult = null;

          })
      },
      toggleShow () {
          if(!this.show) {
              this.success = false;
              this.error = false;
              this.errorContent = null;
              this.noteResult = null;
          }
          this.show = !this.show;
           
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
