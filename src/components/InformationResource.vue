<template>
  <AsCard>
    <AsCardSection class="as-pt-32" first>
      <h2 class="as-text-24-bold">Information Resource</h2>
    </AsCardSection>
    <AsCardSection class="as-pb-32">
      <div class="grid">
        <div class="g-col-12 g-col-lg-6">
          <p class="as-color-disable as-text-14">Inodes Usage</p>
          <p class="as-text-20"><span class="as-text-20-bold">100,000</span> dari 750,000</p>
          <AsProgress>
            <AsProgressBar valuenow="100000" valuemax="750000"/>
          </AsProgress>
        </div>
        <div class="g-col-12 g-col-lg-6">
          <p class="as-color-disable as-text-14">Physical Memory Usage</p>
          <p class="as-text-20"><span class="as-text-20-bold">93 MB</span> dari 768 MB</p>
          <AsProgress>
            <AsProgressBar valuenow="93" valuemax="768"/>
          </AsProgress>
        </div>
        <div class="g-col-12 g-col-lg-6">
          <p class="as-color-disable as-text-14">Disk Space</p>
          <div class="align-items-center d-flex justify-content-between">
            <p class="align-items-center as-text-20 d-flex gap-2">
              <span class="as-text-20-bold">0 MB</span> dari <i class="as-icon-unlimited"></i>
            </p>
            <a href="#" class="as-color-blue as-text-14">Lihat Detail <i class="as-icon-arrow-right as-text-12"></i></a>
          </div>
        </div>
        <div class="g-col-12 g-col-lg-6">
          <p class="as-color-disable as-text-14">Email Accounts</p>
          <div class="align-items-center d-flex justify-content-between">
            <p class="align-items-center as-text-20 d-flex gap-2">
              <span class="as-text-20-bold">0</span> dari <i class="as-icon-unlimited"></i>
            </p>
            <a href="#" class="as-color-blue as-text-14">Lihat Detail <i class="as-icon-arrow-right as-text-12"></i></a>
          </div>
        </div>
        <div class="g-col-12 g-col-lg-6">
          <p class="as-color-disable as-text-14">Bandwidth</p>
          <div class="align-items-center d-flex justify-content-between">
            <p class="align-items-center as-text-20 d-flex gap-2">
              <span class="as-text-20-bold">0 MB</span> dari <i class="as-icon-unlimited"></i>
            </p>
            <a href="#" class="as-color-blue as-text-14">Lihat Detail <i class="as-icon-arrow-right as-text-12"></i></a>
          </div>
        </div>
        <div class="g-col-12 g-col-lg-6">
          <p class="as-color-disable as-text-14">MySQL Database</p>
          <div class="align-items-center d-flex justify-content-between">
            <p class="align-items-center as-text-20 d-flex gap-2">
              <span class="as-text-20-bold">1</span> dari <i class="as-icon-unlimited"></i>
            </p>
            <a href="#" class="as-color-blue as-text-14">Lihat Detail <i class="as-icon-arrow-right as-text-12"></i></a>
          </div>
        </div>
      </div>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
  import {
    AsCard,
    AsCardSection,
    AsProgress,
    AsProgressBar,
  } from '@niagahoster/components'
</script>
