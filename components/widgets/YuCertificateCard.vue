<template>
  <v-card
    :href="cert.link"
    target="_blank"
    class="cert-card rounded-lg"
    width="300px"
    height="400px"
    elevation="10"
    outlined
    hover
  >
    <v-img
      :src="cert.bgImageLink"
      height="100px"
      gradient="to left, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
    </v-img>
    <div class="cert-card__provider-avatar">
      <img
        class="cert-card__provider-avatar__img"
        :src="certificateProviderPath(cert.providerName)"
        height="25px"
      >
    </div>
    <v-card-text>
      <div class="mt-10 text-h5 text--primary">{{cert.title}}</div>
      <div class="mt-2 text--disabled">{{cert.year}}</div>
    </v-card-text>
    <div class="cert-card__footer">
      <v-card-text class="cert-card__chip">
        <v-chip
          label
          outlined
          :color="cert.techColor"
        > {{cert.tech}} </v-chip>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="cert-card__footer-txt text-subtitle-1 font-weight-bold overline">
        {{cert.type}}
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['cert'],
  computed: {
    certificateProviderPath() {
      return (providerName) =>
        require(`~/assets/icon/company/${providerName}.svg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.cert-card {
  &:not(:last-child) {
    margin-right: 28px;
  }

  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  &__provider-avatar {
    position: absolute;
    top: 60px;
    left: 16px;
    padding: 8px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 20%;
    background-color: rgb(45, 45, 45);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    &__img {
      object-fit: fill;
      height: 45px;
      width: 45px;
    }
  }

  &__chip {
    bottom: 0;
  }

  &__footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  &__footer-txt {
    letter-spacing: 1.5px !important;
  }
}
</style>