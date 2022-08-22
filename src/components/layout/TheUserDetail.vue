<template>
  <div id="previewSettingUser">
    <div class="detail-preview-user">
      <div class="container">
        <div class="content-user">
          <div class="ms-icon-container" @click="ClosePopupDetail"></div>
          <div class="ms-row content-detail">
            <div class="ms-col col-16">
              <div class="">
                <ProfileImg
                  :usercode="dataImg.userCode"
                  :username="dataImg.userName"
                  :key="dataImg.userCode"
                  class="avatar img-detail"
                />
              </div>
            </div>
            <div class="ms-col col-75">
              <div class="font-20 bold">{{ this.dataImg.userName }}</div>
              <div class="email">{{ this.dataImg.email }}</div>
              <div class="status">
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
            <div class="font-20 bold m-t-20">THÔNG TIN CÔNG VIỆC</div>
            <div class="ms-row body-detail">
              <div class="ms-col col-29">
                <div class="bold">Mã nhân viên</div>
              </div>
              <div class="ms-col col-50">
                <div class="border-detail">
                  {{ this.dataImg.userCode }}
                </div>
              </div>
            </div>
            <div class="ms-row body-detail">
              <div class="ms-col col-29">
                <div class="bold">Phòng ban</div>
              </div>
              <div class="ms-col col-50">
                <div class="border-detail">
                  {{ this.dataImg.departmentName }}
                </div>
              </div>
            </div>
            <div class="ms-row body-detail-1">
              <div class="ms-col col-29">
                <div class="bold">Vị trí công việc</div>
              </div>
              <div class="ms-col col-20">
                <div class="border-detail">
                  {{ this.dataImg.positionName }}
                </div>
              </div>
            </div>
            <div class="font-20 bold m-t-20">THÔNG TIN PHÂN QUYỀN</div>
            <div class="w-full grid-paging m-t-20">
              <div class="grid-container">
                <div id="datagrid" class="h-full">
                  <div class="role-detail text-bold">Vai trò</div>
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
    /**
     * Author: THBAC (4/8/2022)
     * Đóng form Edit
     * @param {*} check
     */
    closeEdit(check) {
      try {
        this.isShowEdit = check;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (4/8/2022)
     * chuyển đổi tên trạng thái
     * @param {*} status
     */
    convertStatus(status) {
      try {
        if (status == Benum.Status.Working) return "Đang hoạt động";
        if (status == Benum.Status.WConfirm) return "Chờ xác nhận";
        if (status == Benum.Status.NotActive) return "Chưa kích hoạt";
        if (status == Benum.Status.DeActivation) return "Ngừng kích hoạt";
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (4/8/2022)
     * chuyển đổi màu trạng thái
     * @param {*} value
     */
    bgStatus(value) {
      try {
        return {
          working: value == Benum.Status.Working,
          wcf: value == Benum.Status.WConfirm,
          notactive: value == Benum.Status.NotActive,
          deactive: value == Benum.Status.DeActivation,
        };
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (4/8/2022)
     * Hàm đóng form chi tiết người dùng
     */
    ClosePopupDetail() {
      try {
        this.$emit("CloseDialog", false);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (4/8/2022)
     * Nút cập nhật
     */
    btnUpdateDetail() {
      try {
        this.isShowEdit = true;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (4/8/2022)
     * Hiển thị form xoá
     */
    btnDeleteDetail() {
      try {
        this.$emit("OpenDel", true);
        this.$emit("DelUser", this.dataImg.userID, this.dataImg.userName);
      } catch (error) {
        console.log(error);
      }
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