<template>
  <q-page class="flex column">
    <q-banner class="bg-grey-4 text-center">
      User is offline
    </q-banner>
    <div class="q-pa-md column col justify-end">
        <q-chat-message
          v-for="(message, index) in messages"
          :key="index"
          :name="message.from"
          :text="[message.text]"
          :sent="message.from == 'me' ? true : false"
        />
    </div>
     <q-footer elevated>
        <q-toolbar>
          <q-form @submit="sendMessage" class="full-width">
             <q-input 
              bg-color="white"
              rounded
              outlined
              v-model="newMessage" 
              label="Message" 
              dense>

              <template v-slot:after>
                <q-btn 
                  round 
                  dense 
                  flat
                  @click="sendMessage"
                  type="submit" 
                  color="white"
                  icon="send" />
              </template>
            </q-input>
          </q-form>
        </q-toolbar>
      </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: [
        {
          text: 'How are you jim',
          from: 'me'
        },
        {
          text: 'Fine thank you',
          from: 'them'
        },
        {
          text: 'How is work',
          from: 'me'
        }
      ]
    }
  },
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: 'me'
      })
    }
  }
}
</script>
