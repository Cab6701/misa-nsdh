<template>
  <div class="con-ms-popup">
    <div class="ms-popup--background"></div>
    <div
      class="ms-popup flex flex-col"
      style="
        background: rgb(255, 255, 255);
        width: 600px;
        min-width: 500px;
        height: auto;
      "
    >
      <div class="" style="height: 53px">
        <header class="ms-popup--header" style="height: 53px">
          <div class="ms-popup--title">
            <h2>
              <span
                style="
                  letter-spacing: 0.576px;
                  font-size: 24px;
                  color: rgb(33, 33, 33);
                "
                >Sửa người dùng</span
              >
            </h2>
          </div>
          <div class="hover-show flex justify-between items-center"></div>
          <div
            class="
              hover-show
              flex
              justify-between
              items-center
              ms-popup--close-root
            "
            @click="closePopupEdit"
          >
            <div
              class="
                flex
                items-center
                justify-center
                ms-popup--close
                btn-icon-1
              "
            >
              <i class="ms-icon notranslate icon-scale mi-close-2"></i>
            </div>
          </div>
        </header>
      </div>
      <div
        class="ms-popup--content"
        style="overflow: auto; height: calc(100% - 60px)"
      >
        <div class="">
          <div class="item-wrap">
            <div class="flex items-center">
              <div class="avatar m-r-8">
                <!-- <img
                  src="../../assets/64x64.png"
                  alt=""
                  style="width: 64px; height: 64px"
                /> -->
                <ProfileImg
                  :usercode="dataImg.values[0]"
                  :username="dataImg.values[1]"
                  :key="dataImg.values[0]"
                  style="
                    border-radius: 50%;
                    margin-top: 10px;
                    width: 64px;
                    height: 64px;
                    font-size: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  class="avatar"
                />
                
              </div>
              <div class="user-information">
                <div>
                  <span><b>{{this.userSelected.userName}}</b></span>
                  <span class="m-l-4">({{this.userSelected.userCode}})</span>
                </div>
                <div class="m-t-4 m-b-4">
                  <span>{{this.userSelected.email}}</span>
                </div>
                <div>
                  <span>{{this.userSelected.positionName}}</span>
                  <span> - </span>
                  <span>{{this.userSelected.departmentName}}</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <label for="" class="font-20 bold">
            <p
              style="
                font-size: 14px;
                margin: 0px !important;
                color: rgb(27, 28, 30) !important;
              "
            >
              Vai trò
              <span class="required" style="float: inherit"> * </span>
            </p>
          </label>
          <br />
          <div
            class="ms-row"
            style="
              display: flex;
              width: 100%;
              line-height: 35px;
              text-indent: 0px;
              padding: 0px;
              margin-bottom: 16px;
            "
          >
            <div class="ms-col checkbox-detail">
              <div class="flex items-center">
                <div class="ms-checkbox-container ms-checkbox">
                  <input type="checkbox" class="ms-checkbox--input" />
                  <span
                    class="icon-square-uncheck checkmark"
                    @click="check(0)"
                    :class="{ 'icon-square-check': this.checks[0] == true }"
                  ></span>
                  <!-- icon-square-uncheck  -->
                  <span class="con-slot-label">
                    <div class="label-role-checkbox">
                      Quản trị ứng dụng quy trình
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div class="ms-col checkbox-detail">
              <div class="flex items-center">
                <div class="ms-checkbox-container ms-checkbox">
                  <input type="checkbox" class="ms-checkbox--input" />
                  <span
                    class="icon-square-uncheck checkmark"
                    @click="check(1)"
                    :class="{ 'icon-square-check': this.checks[1] == true }"
                  ></span>
                  <!-- icon-square-uncheck  -->
                  <span class="con-slot-label">
                    <div class="label-role-checkbox">Nhân viên</div>
                  </span>
                </div>
              </div>
            </div>
            <div class="ms-col checkbox-detail">
              <div class="flex items-center">
                <div class="ms-checkbox-container ms-checkbox">
                  <input type="checkbox" class="ms-checkbox--input" />
                  <span
                    class="icon-square-uncheck checkmark"
                    @click="check(2)"
                    :class="{ 'icon-square-check': this.checks[2] == true }"
                  ></span>
                  <!-- icon-square-uncheck  -->
                  <span class="con-slot-label">
                    <div class="label-role-checkbox">Quản lý</div>
                  </span>
                </div>
              </div>
            </div>
            <div class="ms-col checkbox-detail">
              <div class="flex items-center">
                <div class="ms-checkbox-container ms-checkbox">
                  <input type="checkbox" class="ms-checkbox--input" />
                  <span
                    class="icon-square-uncheck checkmark"
                    @click="check(3)"
                    :class="{ 'icon-square-check': this.checks[3] == true }"
                  ></span>
                  <!-- icon-square-uncheck  -->
                  <span class="con-slot-label">
                    <div class="label-role-checkbox">Giám đốc</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ms-popup--footer borderFooter">
        <div class="flex" style="margin-right: 12px">
          <MsButton
            :styleButton="'btn-cancel m-r-12 '"
            :msButtonText="'Huỷ'"
            :isShowIcon="false"
            @click="closePopupEdit"
          />
          <MsButton
            :styleButton="'ms-button-primary'"
            :msButtonText="'Lưu'"
            :isShowIcon="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MsButton from "../base/MsButton.vue";
export default {
  data() {
    return {
      checks: [false, false, false, false],
      selectedUser:{},
    };
  },
    components: { MsButton },
  methods: {
    /**
     * Author: THBAC (11/8/2022)
     * Hàm ccheckbox
     */
    check(input) {
      if (this.checks[input]) {
        this.checks[input] = false;
      } else this.checks[input] = true;
    },
    /**
     * Author: THBAC (11/8/2022)
     * Hàm đóng form
     */
    closePopupEdit() {
      this.$emit("CloseEditPopup", false);
    },
  },
  props: { dataImg: {}, userSelected: {} },
  created() {
    this.selectedUser=this.userSelected;
    console.log(this.selectedUser);
  },

};
</script>