<template>
  <AsCard>
    <AsCardSection class="as-pb-16 as-pt-32" first>
      <h2 class="as-text-24-bold">Detail Website</h2>
    </AsCardSection>
    <AsCardSection class="as-pb-32 as-pt-16">
      <div class="align-items-center d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Domain</p>
        <a href="#" class="as-color-blue as-text-14">syaiffolio.com</a>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Paket Hosting</p>
        <p class="as-text-14-semibold">Personal</p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Server Number</p>
        <p class="as-text-14-semibold">srv127.niagahoster.com</p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Bandwidth</p>
        <p class="as-text-14-semibold">Unlimited</p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Disk Space</p>
        <p class="as-text-14-semibold">Unlimited</p>
      </div>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
  import {
    AsButtonOutline,
    AsCard,
    AsCardSection,
  } from '@niagahoster/components'
</script>
