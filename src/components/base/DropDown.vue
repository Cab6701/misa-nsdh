<template>
  <div style="position: relative">
    <MsButton
      class=""
      :styleButton="'btn-select-pagesize justify-between'"
      :isShowIcon="true"
      :iconButtonName="'mi-chevron-down'"
      :msButtonText="selected"
      @click="showDropDown"
    />

    <div class="con-ms-dropdown" v-if="isShow" id="dropdown">
      <ul class="ul-dropdown">
        <li
          class="li-dropdown"
          @click="setActive(15)"
          :class="{ 'dropdown-li-active': 15 == this.selected }"
        >
          <a class="dropdown-item--link flex justify-between">
            <div>15</div>
            <div class="icon-dropdown-check"></div>
          </a>
        </li>

        <li
          class="li-dropdown"
          @click="setActive(25)"
          :class="{ 'dropdown-li-active': 25 == this.selected }"
        >
          <a class="dropdown-item--link flex justify-between">
            <div>25</div>
            <div class="icon-dropdown-check"></div>
          </a>
        </li>
        <li
          class="li-dropdown"
          @click="setActive(50)"
          :class="{ 'dropdown-li-active': 50 == this.selected }"
        >
          <a class="dropdown-item--link flex justify-between">
            <div>50</div>
            <div class="icon-dropdown-check"></div>
          </a>
        </li>
        <li
          class="li-dropdown"
          @click="setActive(100)"
          :class="{ 'dropdown-li-active': 100 == this.selected }"
        >
          <a class="dropdown-item--link flex justify-between">
            <div>100</div>
            <div class="icon-dropdown-check"></div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MSDropDown",
  data() {
    return {
      selected: 15,
      isShow: false,
    };
  },

  methods: {
    setActive(indexSelect) {
      this.selected = indexSelect;
      this.isShow = !this.isShow;
    },

    showDropDown() {
      this.isShow = !this.isShow;
    },

    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isShow = false;
      }
    }
  },
  created() {
    window.addEventListener("click", this.close);
  },
    beforeUnmount() {
    window.removeEventListener("click", this.close);
  },
};
</script>
