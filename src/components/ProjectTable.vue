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
          <th class="status-column">Status</th>
          <th>Sector</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="row.id"
          :class="{ selected: selected === index }"
          v-for="(row, index) of data"
          :style="{
            animationDelay: getAnimationDelay(index),
          }"
        >
          <td class="project-name-column" @click="selectProject(index)">
            {{ row.project_name }}
          </td>
          <td>{{ row.developer }}</td>
          <td>{{ row.main_contractor }}</td>
          <td>{{ row.lga }}</td>
          <td>{{ row.state }}</td>
          <td>{{ row.status }}</td>
          <td>{{ row.sector }}</td>
          <div class="view-project" v-if="selected === index">
            <button>View Project</button>
          </div>
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
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    selectProject(index) {
      // if already selected, unselect
      this.selected = this.selected === index ? null : index;
    },
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
    padding: 20px 10px;
    background: #fff;
  }
  tr {
    position: relative;
    animation: moon-slide 0.5s ease;
    animation-fill-mode: both;
  }
  tr:nth-child(2n + 1) td {
    background: #f4f4f4;
  }

  tr.selected td:not(.project-name-column) {
    filter: blur(3px);
  }

  .project-name-column {
    position: sticky;
    left: 0;
    font-weight: 600;
    z-index: 4;
    box-shadow: 1px 0 2px rgba(0, 0, 0, 0.09);
    @media (max-width: 640px) {
      position: static;
      box-shadow: none;
    }
  }

  td.project-name-column {
    cursor: pointer;
    user-select: none;
  }

  th.status-column {
    /* mimick a button & an dropdown icon */
    &::after {
      content: "";
      display: inline-block;
      border: 5px solid transparent;
      border-left-color: #fff;
      transform: rotate(90deg) translateX(25%);
      margin-left: 10px;
      cursor: pointer;
    }
  }
}

.view-project {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: transparent;

  button {
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    background: #fff;
    border: 1px solid var(--primary-color);
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
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
