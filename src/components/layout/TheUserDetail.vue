<template>
  <div id="previewSettingUser">
    <div class="detail-preview-user">
      <div class="container">
        <div class="content-user">
          <div class="ms-icon-container" @click="ClosePopupDetail"></div>
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
            <div class="ms-col" style="margin-left: 0%; width: 16.6667%">
              <div class="m-r-8">
                <!-- <img
                  src="../../assets/avt.jpg"
                  class="avatar"
                  alt=""
                  style="border-radius: 50%; margin-top: 10px"
                /> -->
                <ProfileImg
                  :usercode="dataImg.userCode"
                  :username="dataImg.userName"
                  :key="dataImg.userCode"
                  style="
                    border-radius: 50%;
                    margin-top: 10px;
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
            </div>
            <div class="ms-col" style="margin-left: 0%; width: 75%">
              <div class="font-20 bold">{{ this.dataImg.userName }}</div>
              <div class="email">{{ this.dataImg.email }}</div>
              <div class="status">
                <!-- <div class="p-l-16 pos-relative">
                  <span
                    class="dot"
                    style="background-color: rgb(243, 150, 25)"
                  ></span>
                  <span class="wait-for-confirmation">Chờ xác nhận</span>
                </div> -->
                <div
                  class="p-l-16 pos-relative"
                  :class="bgStatus(this.dataImg.status)"
                >
                  {{ convertStatus(this.dataImg.status) }}
                  <span class="dot"></span>
                </div>
              </div>
              <div class="flex">
                <MsButton
                  :styleButton="'btn-update-detail p-0-16 m-r-12'"
                  :msButtonText="'Cập nhật'"
                  :isShowIcon="false"
                  :iconButtonName="'icon-plus-white'"
                  @click="btnUpdateDetail"
                />
                <MsButton
                  :styleButton="'btn-update-detail p-0-16'"
                  :msButtonText="'Xoá'"
                  :isShowIcon="false"
                  :iconButtonName="'icon-plus-white'"
                  @click="btnDeleteDetail"
                />
              </div>
            </div>
          </div>
          <div class="body-preview">
            <div class="font-20 bold" style="margin-top: 20px">
              THÔNG TIN CÔNG VIỆC
            </div>
            <div
              class="ms-row"
              style="
                display: flex;
                width: 100%;
                line-height: 35px;
                text-indent: 0px;
                padding: 0px;
                margin-bottom: 16px;
                margin-top: 20px;
              "
            >
              <div class="ms-col" style="margin-left: 0%; width: 29.1667%">
                <div class="bold">Mã nhân viên</div>
              </div>
              <div class="ms-col" style="margin-left: 0%; width: 50%">
                <div
                  class=""
                  style="border-bottom: 1px solid rgb(231, 232, 233)"
                >
                  {{ this.dataImg.userCode }}
                </div>
              </div>
            </div>
            <div
              class="ms-row"
              style="
                display: flex;
                width: 100%;
                line-height: 35px;
                text-indent: 0px;
                padding: 0px;
                margin-bottom: 16px;
                margin-top: 20px;
              "
            >
              <div class="ms-col" style="margin-left: 0%; width: 29.1667%">
                <div class="bold">Phòng ban</div>
              </div>
              <div class="ms-col" style="margin-left: 0%; width: 50%">
                <div
                  class=""
                  style="border-bottom: 1px solid rgb(231, 232, 233)"
                >
                  {{ this.dataImg.departmentName }}
                </div>
              </div>
            </div>
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
              <div class="ms-col" style="margin-left: 0%; width: 29.1667%">
                <div class="bold">Vị trí công việc</div>
              </div>
              <div class="ms-col" style="margin-left: 0%; width: 50%">
                <div
                  class=""
                  style="border-bottom: 1px solid rgb(231, 232, 233)"
                >
                  {{ this.dataImg.positionName }}
                </div>
              </div>
            </div>
            <div class="font-20 bold" style="margin-top: 20px">
              THÔNG TIN PHÂN QUYỀN
            </div>
            <div class="w-full grid-paging" style="margin-top: 20px">
              <div class="grid-container">
                <div id="datagrid" class="h-full">
                  <div class="role-detail" style="font-weight: 700">
                    Vai trò
                  </div>
                  <div
                    class="role-detail role-detail-child"
                    v-for="role in roleArray"
                    :key="role"
                  >
                    {{ role }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EditPopup
    v-if="isShowEdit"
    :userSelected="dataImg"
    @CloseEditPopup="closeEdit"
  />
</template>
<script>
import Benum from "../../js/enums.js";
export default {
  data() {
    return {
      isShowEdit: false,
      roleArray: [],
    };
  },
  methods: {
    closeEdit(check) {
      this.isShowEdit = check;
    },
    convertStatus(status) {
      if (status == Benum.Status.Working) return "Đang hoạt động";
      if (status == Benum.Status.WConfirm) return "Chờ xác nhận";
      if (status == Benum.Status.NotActive) return "Chưa kích hoạt";
      if (status == Benum.Status.DeActivation) return "Ngừng kích hoạt";
    },
    bgStatus(value) {
      return {
        working: value == Benum.Status.Working,
        wcf: value == Benum.Status.WConfirm,
        notactive: value == Benum.Status.NotActive,
        deactive: value == Benum.Status.DeActivation,
      };
    },
    /**
     * Author: THBAC (4/8/2022)
     * Hàm đóng form chi tiết người dùng
     */
    ClosePopupDetail() {
      this.$emit("CloseDialog", false);
    },
    /**
     * Author: THBAC (4/8/2022)
     * Nút cập nhật
     */
    btnUpdateDetail() {
      this.isShowEdit = true;
    },
    btnDeleteDetail() {
      this.$emit("CloseDialog", false);
      this.$emit("OpenDel", true);
      this.$emit("DelUser", this.dataImg.userID, this.dataImg.userName);
    },
  },
  props: {
    dataImg: {},
  },
  created() {
    if (this.dataImg.roleName == null) return;
    else this.roleArray = this.dataImg.roleName.split(", ");
    console.log(this.dataImg);
  },
};
</script>