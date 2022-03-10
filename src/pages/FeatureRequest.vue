<template>
    <AsLayout>
      <div class="container">
        <div>
          <a href="javascript:void(0)" class="as-text-12 as-color-white"><i class="as-icon-arrow-left as-icon-white as-mt-1 as-mr-10"/> Kembali</a>
        </div>
        <div class="as-mt-12">
          <p class="as-color-white as-mt-4 as-text-32-bold">Request Fitur Baru</p>
        </div>
        <div class="as-mt-24">
          <AsBreadcrumb>
            <AsBreadcrumbItem>Label</AsBreadcrumbItem>
            <AsBreadcrumbItem>Unlimited Hosting</AsBreadcrumbItem>
            <AsBreadcrumbItem :active="true">Request Fitur</AsBreadcrumbItem>
          </AsBreadcrumb>
        </div>
        <div class="as-mt-80 grid">
          <div class="g-col-12 g-col-lg-4">
            <FeatureRequestForm/>
          </div>
          <div class="g-col-12 g-col-lg-8">
            <FeatureRequestList/>
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
  import FeatureRequestForm from '@/components/FeatureRequestForm.vue'
  import FeatureRequestList from '@/components/FeatureRequestList.vue'

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
