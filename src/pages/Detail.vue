<template>
    <AsLayout>
      <div class="container">
        <div>
          <a href="javascript:void(0)" class="as-text-12 as-color-white"><i class="as-icon-arrow-left as-icon-white as-mt-1 as-mr-10"/> Kembali</a>
        </div>
        <div class="d-flex align-items-center as-mt-12">
          <a class="as-color-white as-mt-4 as-text-32-bold" href="javascript:void(0)">syaiffolio.com</a>  
          <i class="as-icon-lock as-icon-white as-icon-sm as-mt-5 as-ml-13 as-mr-30"/>
          <AsLabel :green="true" class="as-mt-6">Aktif</AsLabel>
        </div>
        <div class="as-mt-24">
          <AsBreadcrumb>
            <AsBreadcrumbItem>Layanan Anda</AsBreadcrumbItem>
            <AsBreadcrumbItem>Unlimited Hosting</AsBreadcrumbItem>
            <AsBreadcrumbItem>syaiffolio.com</AsBreadcrumbItem>
            <AsBreadcrumbItem :active="true">Detail Layanan</AsBreadcrumbItem>
          </AsBreadcrumb>
        </div>
        <div class="as-mt-80 grid">
          <div class="g-col-12 g-col-lg-6">
            <WebsiteDetail/>
            <Invoice class="as-mt-30"/>
          </div>
          <div class="g-col-12 g-col-lg-6">
            <IpAddress/>
            <CpanelAccount class="as-mt-30"/>
            <NameServer class="as-mt-30"/>
          </div>
        </div>
      </div>
    </AsLayout>
</template>

<script setup>
  import {
    AsBanner,
    AsButton,
    AsImage,
    AsLayout,
    AsSectionCourse,
    AsBreadcrumb,
    AsBreadcrumbItem,
    AsLabel
  } from '@niagahoster/components'

  import BuySsl from '@/components/BuySsl.vue'
  import CpanelAccount from '@/components/CpanelAccount.vue'
  import CpanelShortcuts from '@/components/CpanelShortcuts.vue'
  import FeatureRequest from '@/components/FeatureRequest.vue'
  import HostingDetail from '@/components/HostingDetail.vue'
  import InformationResource from '@/components/InformationResource.vue'
  import SectionOne from '@/components/SectionOne.vue'
  import SectionTwo from '@/components/SectionTwo.vue'
  import NameServer from '@/components/NameServer.vue'
  import IpAddress from '@/components/IpAddress.vue'
  import Invoice from '@/components/Invoice.vue'
  import WebsiteDetail from '@/components/WebsiteDetail.vue'

  const courses = [
    {
      authorName: 'Akrilvha D Wiervi',
      authorPicture: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646725100-profilepicture.png',
      authorRole: 'Product Manager at Niagahoster',
      thumbnail: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646724887-thumbnailcourse.svg',
      thumbnailAlt: 'CourseThumbnail',
      title: 'Mengenal Lebih Jauh Tentang cPanel',
    },
    {
      authorName: 'Akrilvha D Wiervi',
      authorPicture: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646725100-profilepicture.png',
      authorRole: 'Product Manager at Niagahoster',
      thumbnail: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646724887-thumbnailcourse.svg',
      thumbnailAlt: 'CourseThumbnail',
      title: 'Belajar WordPress untuk Pemula',
    },
    {
      authorName: 'Akrilvha D Wiervi',
      authorPicture: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646725100-profilepicture.png',
      authorRole: 'Product Manager at Niagahoster',
      thumbnail: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646724887-thumbnailcourse.svg',
      thumbnailAlt: 'CourseThumbnail',
      title: 'Membuat Landing Page dengan Elementor',
    },
  ]
</script>
