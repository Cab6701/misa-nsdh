<template>
  <div class="main-right flex-column">
    <div class="flex" style="height: 100%; margin-left: -6px">
      <div class="flex flex-col navbar">
        <div
          class="
            setting-tab-item
            flex
            align-items-center
            cursor-pointer
            item-activated
          "
        >
          <div class="icon-tab icon-employee"></div>
          <div class="name-tab">Người dùng</div>
        </div>
        <div class="setting-tab-item flex align-items-center cursor-pointer">
          <div class="icon-tab icon-protect"></div>
          <div class="name-tab">Vai trò</div>
        </div>
        <div class="setting-tab-item flex align-items-center cursor-pointer">
          <div class="icon-tab icon-multiple-user"></div>
          <div class="name-tab">Nhóm người dùng</div>
        </div>
        <div class="setting-tab-item flex align-items-center cursor-pointer">
          <div class="icon-tab icon-share-link"></div>
          <div class="name-tab">Kết nối</div>
        </div>
      </div>
      <div class="content-setting w-full">
        <div id="setting-user">
          <div class="h-full container body-custom body-content">
            <div class="content-header p-b-16">
              <div class="flex justify-between items-center header-custom">
                <div class="font-20 bold">Người dùng</div>
                <MsButton
                  :styleButton="'ms-button-primary'"
                  :msButtonText="'Thêm mới'"
                  :isShowIcon="true"
                  :iconButtonName="'icon-plus-white'"
                />
              </div>
            </div>
            <div
              class="content-main"
              style="
                background: rgb(255, 255, 255);
                height: calc(100vh - 148px);
              "
            >
              <div class="h-full w-full">
                <div
                  class="flex items-center w-full bg-white"
                  style="height: 60px"
                >
                  <span class="input-search-user">
                    <div class="m-l-12">
                      <div class="input-contain">
                        <div class="flex items-center w-full h-full">
                          <div class="ms-input flex w-full">
                            <div
                              class="
                                ms-icon-default
                                flex
                                items-center
                                justify-center
                                p-l-8
                                ms-icon
                              "
                            >
                              <i class="mi-search"></i>
                            </div>
                            <input
                              maxlength="255"
                              placeholder="Tìm kiếm người dùng"
                              tabindex="1"
                              type="text"
                              class="ms-input-item"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span class="select-box-role">
                    <div  class="wrap-ms-select-box m-l-12">
                    </div>
                  </span>
                  <div class="su-filter m-r-16"></div>
                </div>
              </div>
              <div
                class="m-l-16 resize1 dx-resizable"
                style="display: none; width: 0px; height: 100%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

