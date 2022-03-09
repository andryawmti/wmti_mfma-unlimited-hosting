<template>
  <div class="grid">
    <AsCard class="g-col-12 g-col-lg-6" landscape>
      <AsCardSection class="as-pl-24 as-py-28 as-pr-36" first>
        <p class="as-text-24-bold">Install dan Kelola CMS</p>
        <p class="as-color-secondary-2 as-mt-16 as-text-12" style="max-width: 360px;">Anda bisa membuat website dari CMS populer dengan segala kemudahannya, sehingga website Anda dapat segera online. Jika pernah menginstall sebelumnya, cek instalasi terlebih dahulu</p>
        <div class="as-mt-44 d-flex gap-1">
          <AsButton primary sm withIcon>
            <span>Install Sekarang</span><i class="as-icon-arrow-right"></i>
          </AsButton>
          <AsButtonOutline primary sm>Cek Instalasi</AsButtonOutline>
        </div>
      </AsCardSection>
      <AsCardSection illustration>
        <AsImage fluid alt="SSL Illustration" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646714144-illustrationcms.svg"/>
      </AsCardSection>
    </AsCard>
    <AsCard class="g-col-12 g-col-lg-6" landscape>
      <AsCardSection class="as-pl-24 as-py-36 as-pr-36" first>
        <p class="as-text-24-bold">Upload Website ke File Manager</p>
        <p class="as-color-secondary-2 as-mt-16 as-text-12" style="max-width: 360px;">Jika Anda telah membuat website dengan coding manual dan/atau ingin melakukan upload file atau media melalui cPanel, silahkan klik disini untuk membuka File Manager</p>
    
        <AsButton class="as-mt-24" primary sm withIcon>
          <span>Buka File Manager</span><i class="as-icon-arrow-right"></i>
        </AsButton>
      </AsCardSection>
      <AsCardSection illustration>
        <AsImage fluid alt="SSL Illustration" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646714450-illustrationfilemanager.svg"/>
      </AsCardSection>
    </AsCard>
  </div>
</template>

<script setup>
  import {
    AsButton,
    AsButtonOutline,
    AsCard,
    AsCardSection,
    AsImage,
  } from '@niagahoster/components'
</script>
