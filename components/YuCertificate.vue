<template>
  <v-container class="pt-15">
    <h3 class="text-h3 font-weight-thin mb-10">Certificate</h3>
    <v-row>
      <div class="row-wrapper">
        <div class="cert-cards-wrapper d-flex pa-3">
          <!-- TODO: refactoring YuCertificateCard-->
          <v-card
            v-for="cert in certificates"
            :key="cert.title"
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
        </div>
        <div class="fading--left"></div>
        <div class="fading--right"></div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import certificateData from '~/static/certificate.json'
export default {
  data: () => ({
    certificates: certificateData,
  }),
  computed: {
    certificateProviderPath() {
      return (providerName) =>
        require(`~/assets/icon/company/${providerName}.svg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.row-wrapper {
  position: relative;
  width: 100%;

  .cert-cards-wrapper {
    overflow-x: auto;

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
  }

  .fading--left {
    @include fading(left);
  }
  .fading--right {
    @include fading(right);
  }
}
</style>