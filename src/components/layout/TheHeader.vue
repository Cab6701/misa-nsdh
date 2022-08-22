<template>
  <div class="main-nav">
    <div id="top-nav" class="nav-container flex justify-between">
      <div class="flex flex1">
        <div class="box-app-menu"></div>
        <a href="" class="nav-logo flex flex-c-m nav-text">Quy trình</a>
        <div class="top-menu-container flex-1">
          <div class="flex-m">
            <div class="menu-item h-full">
              <div class="menu-item-name">Lượt chạy</div>
              <div class=""></div>
            </div>
            <div class="menu-item h-full">
              <div class="menu-item-name">Thiết kế quy trình</div>
              <div class=""></div>
            </div>
            <div class="menu-item h-full">
              <div class="menu-item-name">Báo cáo</div>
              <div class=""></div>
            </div>
            <div class="menu-item h-full">
              <div class="menu-item-name">Thiết lập</div>
              <div class="menu-item-active"></div>
            </div>
            <div class="btn-run-process">
              <MsButton
                :styleButton="'ms-button-primary'"
                :msButtonText="'Chạy quy trình'"
                :isShowIcon="true"
                :iconButtonName="'icon-run-process'"
              />
            </div>
          </div>
          <div class="flex-1 flex-r-m"></div>
        </div>
      </div>
      <div class="flex-m">
        <div>
          <div class="flex-m global-search">
            <div class="ab-c-m"></div>
            <div class="mi-search"></div>
            <input
              type="text"
              placeholder="Nhập ID, tiêu đề lượt chạy"
              class="flex-1 m-l-4"
            />
          </div>
        </div>
        <div class="pos-relative">
            <div class="notifi-unread-count">4</div>
          <div class="notify"></div>
        </div>
        
        <div class="right-action user">
          <div class="user-avatar">
            <!-- <div class="apui-user-avatar myavt"></div> -->
            <ProfileImg
              :usercode="this.usercode"
              :username="this.username"
              class="apui-user-avatar"
            />
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
      username:"Trịnh Hoài Bắc",
      usercode:"NV-67201"
    }
  },
}
</script>
