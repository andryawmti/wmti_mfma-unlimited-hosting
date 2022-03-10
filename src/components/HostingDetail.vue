<template>
  <AsCard>
    <AsCardSection class="as-pb-16 as-pt-32" first>
      <h2 class="as-text-24-bold">Detail Hosting</h2>
    </AsCardSection>
    <AsCardSection class="as-pb-32 as-pt-16">
      <div class="align-items-center d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Domain</p>
        <a href="#" class="as-color-blue as-text-14">syaiffolio.com</a>
      </div>
      <div class="align-items-start as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Nameserver <i class="as-icon-ask-rounded"></i></p>
        <div>
          <p class="as-text-14-semibold">ns1.niagahoster.com <a href="#"><i class="as-icon-copy"></i></a></p>
          <p class="as-mt-8 as-text-14-semibold">ns2.niagahoster.com <a href="#"><i class="as-icon-copy"></i></a></p>
        </div>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">IP Website</p>
        <p class="as-text-14-semibold">109.106.252.91 <a href="#"><i class="as-icon-copy"></i></a></p>
      </div>
      <router-link to="/detail">
        <AsButtonOutline class="as-mt-48" fluid primary sm withIcon>
          <span>Lihat detail selengkapnya</span><i class="as-icon-arrow-right-double as-text-12"></i>
        </AsButtonOutline>
      </router-link>
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
