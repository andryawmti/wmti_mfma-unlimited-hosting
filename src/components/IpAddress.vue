<template>
  <AsCard>
    <AsCardSection class="as-pb-16 as-pt-32 d-flex justify-content-between" first>
      <h2 class="as-text-24-bold">Alamat IP</h2>
    </AsCardSection>
    <AsCardSection class="as-pb-32 as-pt-16">
      <div class="align-items-center d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">IP Akun</p>
        <p class="as-text-14-semibold">109.106.252.91 <a href="#"><i class="as-icon-copy"></i></a></p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
       <p class="as-color-secondary-2 as-text-14">IP Akun Versi 6 (IPV6)</p>
       <p class="as-text-14-semibold">2001:0db8:85a3:0000:0000:8a2e:0370:7334 <a href="#"><i class="as-icon-copy"></i></a></p>
      </div>
    </AsCardSection>
    <AsCardSubSection class="as-pt-1 as-mt-1">
      <AsCardSection class="align-items-center d-flex justify-content-between" first>
        <AsButtonOutline primary sm>Lihat Cara Penggunaan IPV6</AsButtonOutline>
        <AsButtonOutline primary sm>Cek dan Unblock IP</AsButtonOutline>
      </AsCardSection>
    </AsCardSubSection>
  </AsCard>
</template>
<script setup>
  import { AsCard, AsCardSection, AsCardSubSection, AsButtonOutline } from '@niagahoster/components'
</script>
