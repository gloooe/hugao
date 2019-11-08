<template>
  <v-row justify="space-around">
    <v-checkbox v-model="disabled" class="mx-2" label="Disabled"></v-checkbox>
    <v-checkbox v-model="readonly" class="mx-2" label="Read-only"></v-checkbox>
    <v-checkbox v-model="error" class="mx-2" label="Error"></v-checkbox>
    <v-checkbox v-model="success" class="mx-2" label="Success"></v-checkbox>
    <v-switch v-model="mandatory" class="mx-2" label="Mandatory"></v-switch>
    <v-switch v-model="multiple" class="mx-2" label="Multiple"></v-switch>
    <v-radio-group row>
      <v-radio
        v-for="n in 3"
        :key="n"
        :label="`Radio ${n}`"
        :value="n"
      ></v-radio>
    </v-radio-group>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    disabled: false,
    readonly: false,
    loading: false,
    flat: false,
    inset: false,
    error: false,
    success: false,
    mandatory: false,
    multiple: false,
    row: false
  }),
  methods: {
    refresh() {
      this.reload();
    }
  }
};
</script>
