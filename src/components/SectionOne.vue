<template>
  <div class="grid">
    <AsCard class="g-col-12 g-col-lg-4">
      <AsCardSection class="as-py-32" first>
        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646707227-gradienticonserver.svg">
        <p class="as-mt-16 as-text-24-bold">Kelola Hosting</p>
        <p class="as-mt-16  as-text-16-semibold">Pilih akun hosting</p>
        <select class="as-mt-8 d-block">
          <option>domain.com</option>
        </select>
        <AsButton class="as-mt-48" fluid primary sm>Kelola VPS</AsButton>
      </AsCardSection>
    </AsCard>
    <AsCard class="g-col-12 g-col-lg-4">
      <AsCardSection class="as-py-32" first>
        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646707221-gradienticoncheck.svg">
        <p class="as-color-secondary as-mt-16 as-text-16-semibold">Masa aktif layanan</p>
        <p class="as-mt-4 as-text-24-bold">8 bulan 13 hari</p>
        <p class="as-color-secondary-2 as-mt-4 as-text-14">Layanan Anda aktif hingga 23 Februari 2023</p>
        <AsButton class="as-mt-84" fluid primary sm withIcon><span>Perpanjang Layanan</span> <i class="as-icon-arrow-right-double as-text-12"></i></AsButton>
      </AsCardSection>
    </AsCard>
    <AsCard class="g-col-12 g-col-lg-4">
      <AsCardSection class="as-py-32" first>
        <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646707179-gradienticonexclamation.svg">
        <p class="as-color-secondary as-mt-16 as-text-16-semibold">Detail paket layanan</p>
        <p class="as-mt-4 as-text-24-bold">Paket Personal Unlimited Hosting</p>
        <a class="as-color-blue as-mt-4 as-text-14" href="#">Lihat detail spesifikasi paket</a>
        <AsButton class="as-mt-52" fluid primary sm withIcon><span>Upgrade Layanan</span> <i class="as-icon-arrow-right-double as-text-12"></i></AsButton>
      </AsCardSection>
    </AsCard>
  </div>
</template>

<script setup>
  import {
    AsButton,
    AsCard,
    AsCardSection,
    AsInput,
  } from '@niagahoster/components'
</script>
