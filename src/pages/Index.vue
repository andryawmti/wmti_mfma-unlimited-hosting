<template>
    <AsLayout>
      <div class="container">
        <AsBanner 
          class="as-mb-48" 
          src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646732433-backgroundimage.svg"
        >
          <div class="as-px-40 as-py-51">
            <h2 class="as-text-32-bold">Design Portfolio by Rizqy Syaif</h2>
            <a href="#" class="as-mt-16 as-text-16">syaiffolio.com</a>
            <p class="as-mt-16 as-text-16" style="max-width: 507px;">Journey to Namek, looking for 8 balls, meet the aliens, and meet the dog that can blew up the Galaxies.</p>
            <AsButton class="as-mt-24" primary withIcon><span>Buka WordPress Management</span><i class="as-icon-arrow-right"></i></AsButton>
          </div>
        </AsBanner>
        <SectionOne/>
        <SectionTwo class="as-mt-44"/>
        <div class="as-mt-48 grid">
          <div class="g-col-12 g-col-lg-8">
            <CpanelShortcuts/>
            <InformationResource class="as-mt-48"/>
            <BuySsl class="as-mt-48"/>
          </div>
          <div class="g-col-12 g-col-lg-4">
            <HostingDetail/>
            <CpanelAccount class="as-mt-48"/>
            <FeatureRequest class="as-mt-48"/>
          </div>
        </div>
        <hr class="as-mt-48" style="border: 1px solid #D0D0D0;">
        <AsSectionCourse :courses="courses" class="as-mt-64"/>
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
  } from '@niagahoster/components'

  import BuySsl from '@/components/BuySsl.vue'
  import CpanelAccount from '@/components/CpanelAccount.vue'
  import CpanelShortcuts from '@/components/CpanelShortcuts.vue'
  import FeatureRequest from '@/components/FeatureRequest.vue'
  import HostingDetail from '@/components/HostingDetail.vue'
  import InformationResource from '@/components/InformationResource.vue'
  import SectionOne from '@/components/SectionOne.vue'
  import SectionTwo from '@/components/SectionTwo.vue'

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
