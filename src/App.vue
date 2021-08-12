<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <h2>Fares Alhaqbani ToDo List</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <ToDoList />
    </v-content>
  </v-app>
</template>

<script>
import ToDoList from "./components/ToDoList";
export default {
  name: "App",
  components: {
    ToDoList,
  },
  data: () => ({}),
};
</script>
