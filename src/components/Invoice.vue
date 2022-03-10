<template>
  <AsCard>
    <AsCardSection class="as-pb-16 as-pt-32 d-flex justify-content-between" first>
      <h2 class="as-text-24-bold">Detail Tagihan</h2>
    </AsCardSection>
    <AsCardSection class="as-pb-32 as-pt-16">
      <div class="align-items-center d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Order ID</p>
        <p class="as-text-14-semibold">#119485</p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Jumlah pembayaran</p>
        <p class="as-text-14-semibold">Rp 1.287.000.00</p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Siklus pembayaran</p>
        <p class="as-text-14-semibold">Setiap Tahun</p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Order dibuat pada</p>
        <p class="as-text-14-semibold">Senin, 17 Mei 2021</p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Diaktifkan pada</p>
        <p class="as-text-14-semibold">Senin, 17 Mei 2021</p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Perpanjangan pada</p>
        <p class="as-text-14-semibold">Selasa, 17 Mei 2022 (164 Hari)</p>
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
