<template>
  <AsCard>
    <AsCardSection class="as-pb-16 as-pt-32" first>
      <h2 class="as-text-24-bold">Buat request fitur</h2>
    </AsCardSection>
    <AsCardSection class="as-pb-32 as-pt-16">
      <div>
        <p class="as-text-16 as-color-primary">Kategori Produk</p>
        <AsButtonOutline class="as-mt-8" fluid shade sm withIcon><span>Unlimited Hosting</span> <i class="as-icon-arrow-down"></i></AsButtonOutline>
      </div>
      <div class="as-mt-20">
        <p class="as-text-16 as-color-primary">Judul Fitur</p>
        <AsInput placeholder='Judul fitur yang ingin di-request' class="w-100"/>
      </div>
      <div class="as-mt-20">
        <p class="as-text-16 as-color-primary">Deskripsi Fitur</p>
        <textarea placeholder="Detail dari fitur yang Anda inginkan ..."></textarea>
      </div>
      <AsButton class="as-mt-48" fluid primary sm >Request Fitur</AsButton>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
  import {
    AsButton,
    AsButtonOutline,
    AsCard,
    AsCardSection,
    AsInput
  } from '@niagahoster/components'
</script>
