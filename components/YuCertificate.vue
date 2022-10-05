<template>
  <v-container class="pt-15">
    <h3 class="text-h3 font-weight-thin mb-10">Certificate</h3>
    <v-row>
      <div class="row-wrapper">
        <div class="cert-cards-wrapper d-flex pa-3">
          <WidgetsYuCertificateCard
            v-for="certificate in certificates"
            :key="certificate.title"
            :cert="certificate"
          />
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
}
</script>

<style lang="scss" scoped>
.row-wrapper {
  position: relative;
  width: 100%;

  .cert-cards-wrapper {
    overflow-x: auto;
  }

  .fading--left {
    @include fading(left);
  }
  .fading--right {
    @include fading(right);
  }
}
</style>