<template>
  <div>
    <data-table
      expanded
      single-expand
      title="Employees"
      :loading="loading"
      :headers="headers"
      :items="users"
      :options="$pagination"
      @keyword="handleFilterEmployees"
      @options="handleChangeOptions"
      @update="initUpdate($event)"
      @delete="handleDeleteUser"
    >
      <template #expanded="{ item }">
        <v-data-table
          dense
          hide-default-footer
          :headers="expandedHeaders"
          :items="[item]"
        />
      </template>
    </data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CrudMixin from "@/mixins/crud-mixin";
import DataTable from "@/components/utils/DataTable";

export default {
  name: "Employees",
  mixins: [CrudMixin],
  components: { DataTable },
  data() {
    return {
      isLoaded: false,
      loading: true,
      myDialog: false,
      calories: "",
      expanded: [],
      users: [],
      updateInformation: null,
      options: {
        total: 20,
        page: 1,
        itemsPerPage: 5,
      },
      isUpdate: false,
      snackBar: {
        action: false,
        text: "",
        color: "success",
      },
      expandedHeaders: [
        { text: "Designation", value: "designation.name" },
        { text: "Department", value: "department.name" },
        { text: "Work Location", value: "work_location.location" },
      ],
      headers: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        {
          text: "Email",
          value: "email",
        },
        { text: "Role", value: "role" },
        { text: "Phone Number", value: "phone" },
        { text: "Employee ID", value: "employee_id" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  created() {
    this.onCreated();
  },
  watch: {
    $users: {
      deep: true,
      handler(users) {
        this.users = users;
      },
    },
  },
  computed: {
    ...mapGetters("USERS", ["$users", "$pagination"]),
    vModel: {
      get() {
        return this.create.dialog || this.update.dialog;
      },
      set(v) {
        this.create.dialog = v;
        this.update.dialog = v;
      },
    },
  },
  methods: {
    ...mapActions("USERS", ["fetchUsers", "deleteUser"]),
    async onCreated() {
      let res = await this.fetchUsers();

      console.log(res);
      this.users = this.$users;
      this.loading = false;
      this.isLoaded = true;
    },
    async handleFilterEmployees(keyword) {},
    async handleChangeOptions(options) {},
    async handleFetchEmployees() {},
    async handleUpdate(data) {},
    async handleDeleteUser(id) {
      this.deletee.loading = true;

      let res = await this.deleteUser(id);
      // if (res.error) this.$toast.error("Error deleting user.");
      // else this.$toast.success("Error deleted successfully.");

      this.resetDelete();
    },
    async handleCreate(employee) {},
    clearSnackbar() {},
    handleCloseDialogs() {},
  },
};
</script>

<style lang='scss'>
.v-data-table tr.v-data-table__expanded__content {
  box-shadow: none !important;
}
</style>