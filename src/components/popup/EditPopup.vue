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
                  :usercode="this.userSelected.userCode"
                  :username="this.userSelected.userName"
                  :key="this.userSelected.userCode"
                  style="
                    border-radius: 50%;
                    width: 66px;
                    height: 66px;
                    font-size: 32px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  class="avatar"
                />
              </div>
              <div class="user-information">
                <div>
                  <span
                    ><b>{{ this.userSelected.userName }}</b></span
                  >
                  <span class="m-l-4">({{ this.userSelected.userCode }})</span>
                </div>
                <div class="m-t-4 m-b-4">
                  <span>{{ this.userSelected.email }}</span>
                </div>
                <div>
                  <span>{{ this.userSelected.positionName }}</span>
                  <span> - </span>
                  <span>{{ this.userSelected.departmentName }}</span>
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
            <div class="ms-col checkbox-detail" v-for="(rol, index) in role" :key="rol.roleID">
              <div class="flex items-center">
                <div class="ms-checkbox-container ms-checkbox">
                  <input type="checkbox" class="ms-checkbox--input" />
                  <span
                    class="icon-square-uncheck checkmark"
                    @click="check(index)"
                    :class="{ 'icon-square-check': this.checks[index] == true }"
                  ></span>
                  <!-- icon-square-uncheck  -->
                  <span class="con-slot-label">
                    <div class="label-role-checkbox">{{rol.roleName}}</div>
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
import axios from 'axios';
import MsButton from "../base/MsButton.vue";
export default {
  data() {
    return {
      checks: [],
      selectedUser: {},
      roleNameArr: [],
      role:[],
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
    
    /**
     * Author: THBAC (17/8/2022)
     * Chuyển đổi lại mảng roleName
     */
    convertRoleName(array) {
      if (array == null) {
        return;
      } else {
        console.log(this.role[0].roleName);
        this.roleNameArr = array.split(", ");
        for (let index = 0; index < this.role.length; index++) {
          if(this.roleNameArr.includes(this.role[index].roleName))
              this.checks.push(true);
          else this.checks.push(false);
        }
      }
    },
  },
  props: { userSelected: {} },
 async created() {
     try {
      var me = this;
     await axios.get("https://localhost:7256/api/v1/Role")
      .then(function(res){
          me.role=res.data;
          console.log(res.data);
      })
    } catch (error) {
      console.log(error);
    }
    this.selectedUser = this.userSelected;
    this.convertRoleName(this.userSelected.roleName);
    console.log(this.userSelected.roleName);

  },
};
</script>