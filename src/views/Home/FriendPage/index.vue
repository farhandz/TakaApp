<template>
 <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="friends" active>
           <template v-slot:title>
            <b-icon icon="person-check-fill" />
          </template>
        <b-card-text>Tab contents 1</b-card-text>
      </b-tab>
      <b-tab title="request" icon="gear">
           <template v-slot:title>
            <b-icon icon="hourglass-split" />
          </template>
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
      <b-tab title="decline">
           <template v-slot:title>
            <b-icon icon="person-x-fill" />
          </template>
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
      <b-tab title="all user">
          <template v-slot:title>
            <b-icon icon="person-fill" />
          </template>
        <b-card-text>all user</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
