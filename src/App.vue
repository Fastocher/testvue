<template>
  <div class="default" id="app">
  <ul>
    <li v-for="data in myJson">
       {{ data.date | formatDate }}  /  <b> {{ data.authorName }} </b> /  {{ data.authorUrl }} <br>
       {{data.content}}
       <hr>
    </li>
  </ul>
  </div>
</template>

<script>
import json from './feed.json'
  export default{
      data(){
          list: []
          return{
              myJson: json
          }
      },
      methods: {
        textcolor: function(){
          for (data in myJson)
          {

          }
        }
      }
}
</script>

<style>

</style>
