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
                <img
                  src="../../assets/avt.jpg"
                  class="avatar"
                  alt=""
                  style="border-radius: 50%; margin-top: 10px"
                />
              </div>
            </div>
            <div class="ms-col" style="margin-left: 0%; width: 75%">
              <div class="font-20 bold">Trịnh Hoài Bắc</div>
              <div class="email">thbac@gmail.com</div>
              <div class="status">
                <div class="p-l-16 pos-relative">
                  <span
                    class="dot"
                    style="background-color: rgb(243, 150, 25)"
                  ></span>
                  <span class="wait-for-confirmation">Chờ xác nhận</span>
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
                  :isShowIcon="false    "
                  :iconButtonName="'icon-plus-white'"
                  @click="btnDeleteDetail"
                />
              </div>
            </div>
          </div>
          <div class="body-preview">
            <div class="font-20 bold" style="margin-top: 20px;">THÔNG TIN CÔNG VIỆC</div>
            <div class="ms-row" style="display: flex; width: 100%; line-height: 35px; text-indent: 0px; padding: 0px; margin-bottom: 16px; margin-top: 20px;">
                <div class="ms-col" style="margin-left: 0%; width: 29.1667%;">
                    <div class="bold">Mã nhân viên</div>
                </div>
                <div class="ms-col" style="margin-left: 0%; width: 50%;">
                    <div class="" style="border-bottom: 1px solid rgb(231, 232, 233);">NV-6701</div>
                </div>
            </div>
            <div class="ms-row" style="display: flex; width: 100%; line-height: 35px; text-indent: 0px; padding: 0px; margin-bottom: 16px; margin-top: 20px;">
                <div class="ms-col" style="margin-left: 0%; width: 29.1667%;">
                    <div class="bold">Phòng ban</div>
                </div>
                <div class="ms-col" style="margin-left: 0%; width: 50%;">
                    <div class="" style="border-bottom: 1px solid rgb(231, 232, 233);">Phòng nhân sự</div>
                </div>
            </div>
            <div class="ms-row" style="display: flex; width: 100%; line-height: 35px; text-indent: 0px; padding: 0px; margin-bottom: 16px;">
                <div class="ms-col" style="margin-left: 0%; width: 29.1667%;">
                    <div class="bold">Vị trí công việc</div>
                </div>
                <div class="ms-col" style="margin-left: 0%; width: 50%;">
                    <div class="" style="border-bottom: 1px solid rgb(231, 232, 233);">Lập trình viên</div>
                </div>
            </div>
            <div class="font-20 bold" style="margin-top: 20px;">
                THÔNG TIN PHÂN QUYỀN
            </div>
            <div class="w-full grid-paging" style="margin-top: 20px;">
                <div class="grid-container">
                    <div id="datagrid" class="h-full">
                        <div class="role-detail" style="font-weight: 700">Vai trò</div>
                        <div class="role-detail role-detail-child">Nhân viên</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowEdit:false,
    }
  },
  methods: {
    /**
     * Author: THBAC (4/8/2022)
     * Hàm đóng form chi tiết người dùng
     */
    ClosePopupDetail(){
      this.$emit("CloseDialog",false);
    },
    btnUpdateDetail(){
      this.$emit("CloseEditPopup",true);
    },
    btnDeleteDetail(){

    },
  },
}
</script>