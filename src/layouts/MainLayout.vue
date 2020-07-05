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
          v-if="!userDetails.userId"
          class="absolute-right q-pr-sm"
          no-caps
          to="/auth"
          icon="account_circle"
          flat
          dense
          label="Login" />

          <q-btn
            v-else
            @click="logoutUser"
            class="absolute-right q-pr-sm"
            no-caps
            icon="account_circle"
            flat
            dense>
              Logout <br> {{ userDetails.name }}
          </q-btn>


      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
//import EssentialLink from 'components/EssentialLink.vue'
import { mapState, mapActions } from 'vuex'
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details.js'

export default {
  name: 'MainLayout',
  mixins: [mixinOtherUserDetails],
  data () {
    return {

    }
  },

   computed: {
     ...mapState('store', ['userDetails']),
    title () {
      //console.log(this.$route)
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'Hola - Home'
      else if (currentPath.includes('/chat')) return this.otherUserDetails.name
      else if (currentPath == '/auth') return 'Hola - Login'
    }
  },
  methods: {
    ...mapActions('store', ['logoutUser'])
  }
}
</script>

<style lang="stylus">
  .q-toolbar
    .q-btn
      line-height: 1.2
</style>

