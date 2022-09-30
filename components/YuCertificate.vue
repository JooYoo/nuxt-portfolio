<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin mb-10">Certificate</h3>
    <!-- FIXME: add single line left alignment flex scrollable -->
    <v-row>
      <v-col
        v-for="cert in certificates"
        :key="cert.id"
      >

        <!-- TODO: iteration CertificateCards here -->
        <v-card
          class="rounded-lg"
          width="250px"
          height="350px"
          outlined
        >
          <v-img
            :src="cert.bgImageLink"
            height="100px"
            gradient="to left, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >

          </v-img>
          <v-card-actions>

            <div class="mt-10 text-h6 text--primary">{{cert.title}}</div>
          </v-card-actions>
        </v-card>
      </v-col>

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

<!-- <style lang="scss" scoped>
</style> -->