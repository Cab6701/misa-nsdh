<template>
  <div class="pos-relative">
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
    /**
     * Author: THBAC (12/8/2022)
     * Hàm chọn các thành phần con
     * @param {*} indexSelect
     */
    setActive(indexSelect) {
      this.selected = indexSelect;
      this.isShow = !this.isShow;
      this.$emit("sizeChange",indexSelect);
    },
    /**
     * Author: THBAC (12/8/2022)
     * Hàm chọn các thành phần con
     */
    showDropDown() {
      this.isShow = !this.isShow;
    },

    /**
     * Author: THBAC (12/8/2022)
     * Tắt khi click ra ngoài
     * @param {*} e
     */
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isShow = false;
      }
    },
  },
  props: {
    pageIndex: Number,
  },
  created() {
    window.addEventListener("click", this.close);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.close);
  },
};
</script>
