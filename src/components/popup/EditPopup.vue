<template>
  <div class="con-ms-popup">
    <div class="ms-popup--background"></div>
    <div class="ms-popup flex flex-col edit">
      <div class="h-53">
        <header class="ms-popup--header h-53">
          <div class="ms-popup--title">
            <h2>
              <span class="mess-title">Sửa người dùng</span>
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
      <div class="ms-popup--content popup-content-1">
        <div class="">
          <div class="item-wrap">
            <div class="flex items-center">
              <div class="avatar">
                <ProfileImg
                  :usercode="this.userSelected.userCode"
                  :username="this.userSelected.userName"
                  :key="this.userSelected.userCode"
                  class="avatar img-detail-edit"
                />
              </div>
              <div class="user-information text-info">
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
            <p class="edit-role">
              Vai trò
              <span class="required"> * </span>
            </p>
          </label>
          <br />
          <div class="ms-row edit-row text-role">
            <div
              class="ms-col checkbox-detail"
              v-for="(rol, index) in role"
              :key="rol.roleID"
            >
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
                    <div class="label-role-checkbox">{{ rol.roleName }}</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ms-popup--footer borderFooter">
        <div class="flex m-r-12">
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
            @click="btnEdit"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import MsButton from "../base/MsButton.vue";
export default {
  data() {
    return {
      checks: [],
      selectedUser: {},
      roleNameArr: [],
      role: [],
      userRole: [
        {
          roleID: "",
          userID: "",
          status: 0,
        },
        {
          roleID: "",
          userID: "",
          status: 0,
        },
        {
          roleID: "",
          userID: "",
          status: 0,
        },
        {
          roleID: "",
          userID: "",
          status: 0,
        },
      ],
    };
  },
  components: { MsButton },
  methods: {
    /**
     * Author: THBAC (22/8/2022)
     * Nút lưu để cập nhật vai trò người dùng
     */
    btnEdit() {
      try {
        var me = this;
        axios
          .put(
            "https://localhost:7256/api/v1/UserRole/UpdateUserRole",
            this.userRole
          )
          .then(function (res) {
            me.$emit("CloseEditPopup", false);
            me.$emit("updatedUser", true);
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author: THBAC (11/8/2022)
     * Hàm ccheckbox
     */
    check(input) {
      try {
        if (this.checks[input]) {
          this.checks[input] = false;
          this.userRole[input].status = 2;
        } else {
          this.checks[input] = true;
          this.userRole[input].status = 1;
        }
        console.log(this.userRole);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (11/8/2022)
     * Hàm đóng form
     */
    closePopupEdit() {
      try {
        this.$emit("CloseEditPopup", false);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author: THBAC (17/8/2022)
     * Chuyển đổi lại mảng roleName
     */
    convertRoleName(array) {
      try {
        if (array == null) {
          return;
        } else {
          this.roleNameArr = array.split(", ");
          for (let index = 0; index < this.role.length; index++) {
            if (this.roleNameArr.includes(this.role[index].roleName)) {
              this.checks.push(true);
              this.userRole[index].status = 3;
            } else {
              this.checks.push(false);
              this.userRole[index].status = 3;
            }
          }
        }
        console.log(this.userRole);
      } catch (error) {
        console.log(error);
      }
    },
  },
  props: { userSelected: {} },
  async created() {
    try {
      var me = this;
      await axios
        .get("https://localhost:7256/api/v1/Role")
        .then(function (res) {
          me.role = res.data;
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
    this.selectedUser = this.userSelected;

    // THêm userID và roleID vào hàm userRole
    for (let index = 0; index < this.userRole.length; index++) {
      this.userRole[index].userID = this.selectedUser.userID;
      this.userRole[index].roleID = this.role[index].roleID;
    }

    //Tích checkbox theo vai trò được chọn
    this.convertRoleName(this.userSelected.roleName);
  },
};
</script>