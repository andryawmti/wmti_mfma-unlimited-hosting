<template>
  <AsCard>
    <AsCardSection class="as-pb-16 as-pt-32 d-flex justify-content-between" first>
      <h2 class="as-text-24-bold">Nameserver</h2>
      <i class="as-icon-ask-rounded as-icon-gray as-text-24"></i>
    </AsCardSection>
    <AsCardSection class="as-pb-32 as-pt-16">
      <div class="align-items-center d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Nameserver 1</p>
        <p class="as-text-14-semibold">ns1.niagahoster.com <a href="#"><i class="as-icon-copy"></i></a></p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
       <p class="as-color-secondary-2 as-text-14">Nameserver 2</p>
       <p class="as-text-14-semibold">ns2.niagahoster.com <a href="#"><i class="as-icon-copy"></i></a></p>
      </div>
    </AsCardSection>
  </AsCard>
</template>
<script setup>
  import { AsCard, AsCardSection } from '@niagahoster/components'
</script>
