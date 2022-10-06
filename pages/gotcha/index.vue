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

      <!-- <v-row
        class="mb-4"
        align="center"
        justify="start"
      >
        <v-col
          v-for="keyword in uniqueKeywords"
          :key="keyword"
          class="shrink"
        > -->
      <!-- TODO: add color to each keyword by using switch -->
      <!-- TODO: click to display corresponding posts -->
      <!-- <v-chip class="chip">
            {{keyword}}
          </v-chip>
        </v-col>
      </v-row> -->

      <v-list>
        <v-list-item
          v-for="post of filteredPosts"
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
      gotchaPosts,
    }
  },
  data: () => ({
    searchVal: '',
  }),
  computed: {
    filteredPosts() {
      return this.gotchaPosts.filter((post) =>
        post.title.toLowerCase().match(this.searchVal.toLowerCase())
      )
    },
    uniqueKeywords() {
      // get a Set collection of all posts keywords
      const uniqueKeywords = [
        ...new Set(this.gotchaPosts.map((post) => post.keyword)),
      ]
      return uniqueKeywords
    },
  },
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

.chip {
  cursor: pointer;
}
</style>
