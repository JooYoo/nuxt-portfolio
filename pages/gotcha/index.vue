<template>
  <v-main>
    <v-container>
      <h1 class="my-10 text-h3 font-weight-thin">Gotcha</h1>

      <v-text-field
        v-model="searchVal"
        outlined
        clearable
        label="Search"
        prepend-inner-icon="mdi-magnify"
        color="grey"
      ></v-text-field>

      <v-list>
        <v-list-item
          v-for="post of gotchaPosts"
          :key="post.title"
          class="px-10 list-item--hover"
        >
          <NuxtLink
            :to="`gotcha/${post.slug}`"
            class="no-deco list-item--split"
          >
            <v-list-item-content>
              <v-list-item-title v-text="post.title" />
              <v-list-item-subtitle v-text="post.keyword" />
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text v-text="post.time" />
            </v-list-item-action>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const gotchaPosts = await $content('gotcha', params.slug)
      .only(['title', 'time', 'keyword', 'slug'])
      .sortBy('createAt', 'asc')
      .fetch()

    return {
      gotchaPosts
    }
  },
  data: () => ({
    searchVal: ''
  })
}
</script>

<style lang="scss" scoped>
.list-item--split {
  display: flex;
  align-items: center;
  flex: 1 1 100%;
}

.list-item--hover {
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
}

.v-text-field--outlined >>> fieldset {
  border-color: rgba(192, 0, 250, 0.986);
}
</style>
