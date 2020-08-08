<template>
  <div class="flex flex-wrap -m-3">
    <div
      class="w-full p-3 md:w-1/2 lg:w-1/4"
    >
      <vue-instagram token="dcscdscsdcsdcsded23e2e" :count="5" :tags="['hashtag1', 'hashtag2']" mediaType="image">
        <template slot="feeds" slot-scope="props">
          <li class="fancy-list"> {{ props.feed.link }} </li>
        </template>
        <template slot="error" slot-scope="props">
          <div class="fancy-alert"> {{ props.error.error_message }} </div>
        </template>
      </vue-instagram>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  async mounted() {
  },
  methods: {
    login() {
      console.log('login')
    }
  }
};
</script>
