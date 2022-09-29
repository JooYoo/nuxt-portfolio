<template>
  <v-container class="py-15">
    <h3 class="text-h3 font-weight-thin">Certificate</h3>
    <v-row>
      <!-- TODO: iteration CertificateCards here -->
      <div
        v-for="cert in certificates"
        :key="cert.id"
      >
        {{cert.title}}
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