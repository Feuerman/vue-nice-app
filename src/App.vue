<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            fixed
            app
            mobile-break-point="1940"
    >
      <v-list dense>
        <v-list-tile :to="{name: 'home'}">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Главная</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-4" dark fixed app height="90">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="display-3"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-flex d-flex align-center justify-start>
          <span class="body-2 ml-2 pr-4" style="border-right: 1px #fff solid;">МИНИСТЕРСТВО<br>ЗДРАВООХРАНЕНИЯ РФ</span>
          <span class="body-1 ml-4">ИНФОРМАЦИОННО-АНАЛИТИЧЕСКАЯ СИСТЕМА МОНИТОРИНГА<br>И КОНТРОЛЯ В СФЕРЕ ЗАКУПОК ЛЕКАРСТВЕННЫХ ПРЕПАРАТОВ</span>
        </v-flex>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: null
        }),
        props: {
            source: String
        }
    }
</script>