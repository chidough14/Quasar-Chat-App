<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn 
          v-if="$route.fullPath.includes('/chat')"
          v-go-back.single
          icon="arrow_back" 
          flat
          dense
          label="Back" />

        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn
          class="absolute-right q-pr-sm"
          no-caps
          to="/auth"
          icon="account_circle" 
          flat
          dense
          label="Login" />

       
      </q-toolbar>
    </q-header>

   

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
//import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {
    
  },

  data () {
    return {
     
    }
  },

   computed: {
    title () {
      console.log(this.$route)
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'Hola - Home'
      else if (currentPath == '/chat') return 'Hola - Chat'
      else if (currentPath == '/auth') return 'Hola - Login'
    }
  }
}
</script>
