<template>
  <AsCard>
    <AsCardSection class="as-pb-16 as-pt-32" first>
      <h2 class="as-text-24-bold">Request populer</h2>
      <p class="as-text-14 as-mt-12 as-color-secondary-2">Klik pada angka di kiri list fitur jika Anda menginginkan fitur tersebut, dan isi form di sebelah kiri jika fitur yang Anda butuhkan tidak ada pada list</p>
    </AsCardSection>
    <AsCardSection class="as-pb-32 as-pt-16">
      <div class=" d-flex as-mb-55" v-for="i in 7" :key="i">
        <div class="as-mr-16">
          <AsLabel :blue="true" class="as-mt-6 as-p-8">
            <i class="as-icon-arrow-top"></i>
            <p class="as-text-12-semibold as-color-primary">9999</p>
          </AsLabel>
        </div>
        <div>
            <p class="as-text-20-bold">Bantuan Instalasi Panel VPS</p>
            <p class="as-text-14 as-mt-8 as-color-secondary-2">Klik pada angka di kiri list fitur jika Anda menginginkan fitur tersebut, dan isi form di sebelah kiri jika fitur yang Anda butuhkan tidak ada pada list</p>
        </div>
      </div>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
  import {
    AsLabel,
    AsButtonOutline,
    AsCard,
    AsCardSection,
  } from '@niagahoster/components'

  const requests = [
    {
      count: 9999,
      title: 'Bantuan Instalasi Panel VPS',
      description: 'Layanan bantuan instalasi VPS, migrasi shared hosting ke VPS dan bantuan vps secara general (terbatas)'
    },
    {
      count: 9999,
      title: 'Bantuan Instalasi Panel VPS',
      description: 'Layanan bantuan instalasi VPS, migrasi shared hosting ke VPS dan bantuan vps secara general (terbatas)'
    },
    {
      count: 9999,
      title: 'Bantuan Instalasi Panel VPS',
      description: 'Layanan bantuan instalasi VPS, migrasi shared hosting ke VPS dan bantuan vps secara general (terbatas)'
    },
    {
      count: 9999,
      title: 'Bantuan Instalasi Panel VPS',
      description: 'Layanan bantuan instalasi VPS, migrasi shared hosting ke VPS dan bantuan vps secara general (terbatas)'
    }
  ]
</script>
