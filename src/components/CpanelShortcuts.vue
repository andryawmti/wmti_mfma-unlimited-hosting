<template>
  <AsCard>
    <AsCardSection class="as-pt-32" first>
      <h2 class="as-text-24-bold">Quick Shortcut ke cPanel</h2>
    </AsCardSection>
    <AsCardSection class="as-pb-32">
      <AsCardSubSection class="grid" first>
        <a href="#" class="g-col-6 g-col-lg-3" v-for="item, x in shortcuts" :key="x">
          <AsCard bordered class="as-border-radius-8">
            <AsCardSection class="as-px-12 as-py-30 as-text-center" first>
              <img alt="Cpanel Addon Domain" :src="item.icon">
              <p class="as-mt-16 as-text-14-semibold">{{ item.title }}</p>
            </AsCardSection>
          </AsCard>
        </a>
        <a href="#" class="g-col-6 g-col-lg-3">
          <AsCard dashed class="as-border-radius-8">
            <AsCardSection class="as-px-12 as-py-30 as-text-center" first>
              <img alt="Shortcut settings" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646727193-bluecogicon.svg" width="48">
              <p class="as-mt-16 as-text-14-semibold">Atur Shortcut</p>
            </AsCardSection>
          </AsCard>
        </a>
      </AsCardSubSection>
      <AsCardSubSection class="as-mt-32 as-pt-32">
        <AsCard class="as-border-radius-8" gray>
          <AsCardSection class="as-p-16 align-items-center d-flex justify-content-between" first>
            <img alt="Cpanel Logo" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646716392-cpanelogobgwhite.svg">
            <div>
              <p class="as-text-20-bold">Lihat semua fitur cPanel</p>
              <p class="as-color-secondary as-mt-8 as-text-16">Masuk ke cPanel untuk mangakses fitur cPanel selengkapnya</p>
            </div>
            <AsButtonIcon primary>
              <div class="as-icon-arrow-right"></div>
            </AsButtonIcon>
          </AsCardSection>
        </AsCard>
      </AsCardSubSection>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
import {
  AsButtonIcon,
  AsCard,
  AsCardSection,
  AsCardSubSection,
} from '@niagahoster/components'

const shortcuts = [
  {
    icon: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646715445-cpaneladdondomainicon.svg',
    title: 'Add-on Domain'
  },
  {
    icon: "https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646716160-cpanelsubdomainicon.svg",
    title: "Subdomain"
  },
  {
    icon: "https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646716160-cpanelsubdomainicon.svg",
    title: "Subdomain"
  },
  {
    icon: "https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646716160-cpanelsubdomainicon.svg",
    title: "Subdomain"
  },
  {
    icon: "https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646716160-cpanelsubdomainicon.svg",
    title: "Subdomain"
  },
  {
    icon: "https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646716160-cpanelsubdomainicon.svg",
    title: "Subdomain"
  },
]
</script>
