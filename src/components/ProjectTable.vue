<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th class="project-name-column">Project Name</th>
          <th>Developer</th>
          <th>Main contractor</th>
          <th>Area</th>
          <th>State</th>
          <th>Status</th>
          <th>Sector</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="row.id"
          v-for="(row, index) of data"
          :style="{
            animationDelay: getAnimationDelay(index),
          }"
        >
          <td class="project-name-column">{{ row.project_name }}</td>
          <td>{{ row.developer }}</td>
          <td>{{ row.main_contractor }}</td>
          <td>{{ row.lga }}</td>
          <td>{{ row.state }}</td>
          <td>{{ row.status }}</td>
          <td>{{ row.sector }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProjectTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getAnimationDelay(index) {
      const interval = 0.18; // 0.18 second
      return (index + 1) * interval + "s";
    },
  },
};
</script>

<style lang="scss" scoped>
.table-container {
  width: 90%;
  margin: auto;
  overflow: auto;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
table {
  border-collapse: collapse;
  width: 100%;

  th {
    padding: 24px 10px;
    font-weight: 600;
    background: var(--primary-color);
    color: #fff;
    &:first-child {
      border-radius: 5px 0 0 0;
    }

    &:last-child {
      border-radius: 0 5px 0 0;
    }
  }
  td {
    padding: 15px 10px;
    background: #fff;
  }
  tr {
    animation: moon-slide 0.5s ease;
    animation-fill-mode: both;
  }
  tr:nth-child(2n + 1) td {
    background: #f4f4f4;
  }
}

.project-name-column {
  position: sticky;
  left: 0;
  font-weight: 600;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.09);
  @media (max-width: 640px) {
    position: static;
    box-shadow: none;
  }
}

@keyframes moon-slide {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
