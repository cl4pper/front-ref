<template>
  <ion-app>
    <ion-page class="show-page">

      <!-- Header -->
      <ion-header>
        <ion-toolbar>
          <ion-title>Ionic 4 + Vue Application </ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- /Header -->

      <!-- Content -->
      <ion-content class="content" padding>
          <ion-list>
            <!-- Table Header -->
            <ion-item>
              <ion-label full style="font-weight: bold;">ID</ion-label>
              <ion-label full style="font-weight: bold;">NAME</ion-label>
              <ion-label full style="font-weight: bold;"></ion-label>
              <!-- <ion-label full>COL 3</ion-label> -->
            </ion-item>
            <!-- /Table Header -->

            <!-- Table content -->
            <ion-item v-for="item of items" v-bind:key="item.id">
              <ion-label full>{{ item.id }}</ion-label>
              <ion-label full>{{ item.name }}</ion-label>
              <ion-button small>Edit</ion-button>
              <ion-button color="danger" small><ion-icon name="trash"></ion-icon></ion-button>
              <!-- <ion-label full>World</ion-label> -->
            </ion-item>
            <!-- /Table content -->

          </ion-list>
      </ion-content>
      <!-- /Content -->

    </ion-page>
  </ion-app>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      items: [
        {id: 0, name:'Ahmed'},
        {id:1, name: 'Naima'},
        {id:3, name: 'Matts'}
      ]
    }
  },
}
</script>
