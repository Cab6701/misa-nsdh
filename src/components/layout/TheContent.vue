<template>
  <div class="main-right flex-column">
    <div class="flex" style="height: 100%; margin-left: -6px">
      <TheNavbar />
      <div class="content-setting w-full">
        <div id="setting-user">
          <div class="h-full container body-custom body-content">
            <div class="content-header p-b-16" style="width: 100%">
              <div class="flex justify-between items-center header-custom">
                <div class="font-20 bold">Người dùng</div>
                <MsButton
                  :styleButton="'ms-button-primary'"
                  :msButtonText="'Thêm mới'"
                  :isShowIcon="true"
                  :iconButtonName="'icon-plus-white'"
                  @click="addNewUser"
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
                    <div class="wrap-ms-select-box m-l-12">
                      <DxSelectBox :items="roles" placeholder="Chọn vai trò" />
                    </div>
                  </span>
                  <div class="su-filter m-r-16">
                    <div class="mi-setting m-0" @click="visiblePopup"></div>
                    <DxPopup
                      v-model:visible="isCustomCol"
                      :hide-on-outside-click="true"
                      :height="420"
                      :width="316"
                      :resize-enabled="true"
                      :drag-enabled="true"
                      :resizeEnabled="false"
                      position="right"
                      :show-title="false"
                    >
                      <div class="content-container">
                        <div id="adjust-colum-popover" class="flex flex-col">
                          <header>
                            <div class="p-b-8 header">
                              <div
                                class="flex justify-between items-center p-b-12"
                              >
                                <div class="title">Tuỳ chỉnh cột</div>
                                <div
                                  class="
                                    hover-show
                                    flex
                                    justify-between
                                    items-center
                                    ms-popup--close-root
                                  "
                                >
                                  <div
                                    class="
                                      flex
                                      items-center
                                      justify-center
                                      ms-popup--close
                                      btn-icon-1
                                    "
                                    @click="closeCustomColumn"
                                  >
                                    <i
                                      class="
                                        ms-icon
                                        notranslate
                                        icon-scale
                                        mi-close-2
                                      "
                                    ></i>
                                  </div>
                                </div>
                              </div>
                              <div style="height: 35px; width: 100%">
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
                                    placeholder="Tìm kiếm"
                                    tabindex="1"
                                    type="text"
                                    class="ms-input-item"
                                  />
                                </div>
                              </div>
                            </div>
                          </header>
                          <main>
                            <div class="list-group-wrap list-content p-b-12">
                              <DxScrollView
                                class="scrollable-board"
                                direction="horizontal"
                                show-scrollbar="always"
                              >
                                <div class="list-group">
                                  <DxSortable
                                    allow-reordering="true"
                                    on-reorder="onReorder"
                                    show-drag-icons="showDragIcons"
                                    :autoScroll="true"
                                  >
                                    <div class="">
                                      <div class="list-group-item">
                                        <div
                                          class="
                                            flex
                                            items-center
                                            justify-between
                                          "
                                        >
                                          <div class="flex items-center">
                                            <div
                                              class="
                                                ms-checkbox-container
                                                ms-checkbox
                                              "
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="
                                                  icon-square-uncheck
                                                  checkmark
                                                  icon-square-check
                                                "
                                                @click="check"
                                                :class="{
                                                  'icon-square-check':
                                                    this.check1 == true,
                                                }"
                                              ></span>
                                              <!-- icon-square-uncheck  -->
                                              <span class="con-slot-label">
                                                <div
                                                  class="label-role-checkbox1"
                                                >
                                                  Mã nhân viên
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              ms-icon-default
                                              flex
                                              items-center
                                              justify-center
                                              ms-icon-
                                              opacity-0
                                            "
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="
                                                ms-icon
                                                notranslate
                                                icon-scale
                                                mi-drag
                                              "
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="">
                                      <div class="list-group-item">
                                        <div
                                          class="
                                            flex
                                            items-center
                                            justify-between
                                          "
                                        >
                                          <div class="flex items-center">
                                            <div
                                              class="
                                                ms-checkbox-container
                                                ms-checkbox
                                              "
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="
                                                  icon-square-uncheck
                                                  checkmark
                                                  icon-square-check
                                                "
                                                @click="check"
                                                :class="{
                                                  'icon-square-check':
                                                    this.check1 == true,
                                                }"
                                              ></span>
                                              <!-- icon-square-uncheck  -->
                                              <span class="con-slot-label">
                                                <div
                                                  class="label-role-checkbox1"
                                                >
                                                  Họ và tên
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              ms-icon-default
                                              flex
                                              items-center
                                              justify-center
                                              ms-icon-
                                              opacity-0
                                            "
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="
                                                ms-icon
                                                notranslate
                                                icon-scale
                                                mi-drag
                                              "
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="">
                                      <div class="list-group-item">
                                        <div
                                          class="
                                            flex
                                            items-center
                                            justify-between
                                          "
                                        >
                                          <div class="flex items-center">
                                            <div
                                              class="
                                                ms-checkbox-container
                                                ms-checkbox
                                              "
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="
                                                  icon-square-uncheck
                                                  checkmark
                                                "
                                                @click="check"
                                                :class="{
                                                  'icon-square-check':
                                                    this.check1 == true,
                                                }"
                                              ></span>
                                              <!-- icon-square-uncheck  -->
                                              <span class="con-slot-label">
                                                <div
                                                  class="label-role-checkbox1"
                                                >
                                                  Phòng ban
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              ms-icon-default
                                              flex
                                              items-center
                                              justify-center
                                              ms-icon-
                                              opacity-0
                                            "
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="
                                                ms-icon
                                                notranslate
                                                icon-scale
                                                mi-drag
                                              "
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="">
                                      <div class="list-group-item">
                                        <div
                                          class="
                                            flex
                                            items-center
                                            justify-between
                                          "
                                        >
                                          <div class="flex items-center">
                                            <div
                                              class="
                                                ms-checkbox-container
                                                ms-checkbox
                                              "
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="
                                                  icon-square-uncheck
                                                  checkmark
                                                "
                                                @click="check"
                                                :class="{
                                                  'icon-square-check':
                                                    this.check1 == true,
                                                }"
                                              ></span>
                                              <!-- icon-square-uncheck  -->
                                              <span class="con-slot-label">
                                                <div
                                                  class="label-role-checkbox1"
                                                >
                                                  Email
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              ms-icon-default
                                              flex
                                              items-center
                                              justify-center
                                              ms-icon-
                                              opacity-0
                                            "
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="
                                                ms-icon
                                                notranslate
                                                icon-scale
                                                mi-drag
                                              "
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="">
                                      <div class="list-group-item">
                                        <div
                                          class="
                                            flex
                                            items-center
                                            justify-between
                                          "
                                        >
                                          <div class="flex items-center">
                                            <div
                                              class="
                                                ms-checkbox-container
                                                ms-checkbox
                                              "
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="
                                                  icon-square-uncheck
                                                  checkmark
                                                "
                                                @click="check"
                                                :class="{
                                                  'icon-square-check':
                                                    this.check1 == true,
                                                }"
                                              ></span>
                                              <!-- icon-square-uncheck  -->
                                              <span class="con-slot-label">
                                                <div
                                                  class="label-role-checkbox1"
                                                >
                                                  Vị trí công việc
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              ms-icon-default
                                              flex
                                              items-center
                                              justify-center
                                              ms-icon-
                                              opacity-0
                                            "
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="
                                                ms-icon
                                                notranslate
                                                icon-scale
                                                mi-drag
                                              "
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="">
                                      <div class="list-group-item">
                                        <div
                                          class="
                                            flex
                                            items-center
                                            justify-between
                                          "
                                        >
                                          <div class="flex items-center">
                                            <div
                                              class="
                                                ms-checkbox-container
                                                ms-checkbox
                                              "
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="
                                                  icon-square-uncheck
                                                  checkmark
                                                "
                                                @click="check"
                                                :class="{
                                                  'icon-square-check':
                                                    this.check1 == true,
                                                }"
                                              ></span>
                                              <!-- icon-square-uncheck  -->
                                              <span class="con-slot-label">
                                                <div
                                                  class="label-role-checkbox1"
                                                >
                                                  Vai trò
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              ms-icon-default
                                              flex
                                              items-center
                                              justify-center
                                              ms-icon-
                                              opacity-0
                                            "
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="
                                                ms-icon
                                                notranslate
                                                icon-scale
                                                mi-drag
                                              "
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="">
                                      <div class="list-group-item">
                                        <div
                                          class="
                                            flex
                                            items-center
                                            justify-between
                                          "
                                        >
                                          <div class="flex items-center">
                                            <div
                                              class="
                                                ms-checkbox-container
                                                ms-checkbox
                                              "
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="
                                                  icon-square-uncheck
                                                  checkmark
                                                "
                                                @click="check"
                                                :class="{
                                                  'icon-square-check':
                                                    this.check1 == true,
                                                }"
                                              ></span>
                                              <!-- icon-square-uncheck  -->
                                              <span class="con-slot-label">
                                                <div
                                                  class="label-role-checkbox1"
                                                >
                                                  Trạng thái
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            class="
                                              ms-icon-default
                                              flex
                                              items-center
                                              justify-center
                                              ms-icon-
                                              opacity-0
                                            "
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="
                                                ms-icon
                                                notranslate
                                                icon-scale
                                                mi-drag
                                              "
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </DxSortable>
                                </div>
                              </DxScrollView>
                            </div>
                          </main>
                          <footer>
                            <div class="comand-wrap justify-flexend">
                              <MsButton
                                :styleButton="'btn-cancel m-r-12 '"
                                :msButtonText="'Lấy lại mặc định'"
                                :isShowIcon="false"
                                @click="closePopupEdit"
                              />
                              <MsButton
                                :styleButton="'ms-button-primary'"
                                :msButtonText="'Áp dụng'"
                                :isShowIcon="false"
                              />
                            </div>
                          </footer>
                        </div>
                      </div>
                    </DxPopup>
                  </div>
                </div>
                <div class="custom-paging-grid">
                  <div class="grid-container">
                    <div id="datagrid" class="h-full">
                      <div
                        class=""
                        style="opacity: 1; height: calc(100vh - 267px)"
                      >
                        <DxDataGrid
                          id="gridContainer"
                          :data-source="users"
                          key-expr="userID"
                          :allow-column-reordering="true"
                          :allow-column-resizing="true"
                          column-resizing-mode="widget"
                          :column-auto-width="true"
                          :show-borders="false"
                          :show-row-lines="true"
                          :hover-state-enabled="true"
                          @row-click="showDetail"
                          :customize-columns="customizeColumns"
                          :onCellHoverChanged="hoverChange"
                          :paging="{ enabled: false }"
                        >
                          <DxColumn
                            :text-align="left"
                            :min-width="80"
                            :max-width="124"
                            :width="124"
                            caption="Mã nhân viên"
                            data-field="userCode"
                          />
                          <DxColumn
                            :text-align="left"
                            :min-width="80"
                            :max-width="273"
                            :width="273"
                            data-field="userName"
                            caption="Họ và tên"
                            cell-template="profileImg"
                          />
                          <template #profileImg="{ data }">
                            <div class="flex">
                              <ProfileImg
                                :usercode="data.values[0]"
                                :username="data.value"
                              />
                              <div class="flex align-items-center">
                                {{ data.value }}
                              </div>
                            </div>
                          </template>
                          <DxColumn
                            :min-width="80"
                            :max-width="213"
                            :width="213"
                            data-field="departmentName"
                            caption="Phòng ban"
                            v-model:visible="isViDepartment"
                            @mouseover="onCellHoverChanged"
                          />
                          <DxColumn
                            :min-width="80"
                            :max-width="480"
                            :width="480"
                            data-field="roleName"
                            caption="Vai trò"
                          />
                          <DxColumn
                            :min-width="80"
                            :max-width="223"
                            :width="223"
                            data-field="positionName"
                            caption="Vị trí công việc"
                            v-model:visible="isViPosition"
                          />
                          <DxColumn
                            :min-width="80"
                            :max-width="102"
                            :width="102"
                            data-field="email"
                            caption="Email"
                            v-model:visible="isViEmail"
                          />
                          <DxColumn
                            :min-width="150"
                            :max-width="164"
                            :width="164"
                            data-field="status"
                            caption="Trạng thái"
                            cell-template="statusDot"
                          />
                          <template #statusDot="{ data }">
                            <div
                              class="p-l-16 pos-relative"
                              :class="bgStatus(data.value)"
                            >
                              {{ convertStatus(data.value) }}
                              <span class="dot"></span>
                            </div>
                          </template>
                          <DxColumn
                            :min-width="96"
                            :max-width="96"
                            :width="96"
                            cell-template="dropDownBoxEditor"
                          />
                          <template #dropDownBoxEditor="{ data }">
                            <div class="flex justify-flexend m-8">
                              <div class="style-button">
                                <div class="button-comand-wrap">
                                  <div
                                    class="mi-pencil icon-hidden"
                                    @click="editUser($event)"
                                  ></div>
                                </div>
                              </div>
                              <div class="style-button">
                                <div class="button-comand-wrap">
                                  <div
                                    class="icon-delete-custom icon-hidden"
                                    @click="deleteUser($event, data.values[1])"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </template>
                        </DxDataGrid>
                      </div>
                      <div class="paging">
                        <div class="grid-navigation">
                          <div class="page-total flex">
                            Tổng số bản ghi:
                            <b style="padding: 0px 6px"> 44</b>
                          </div>
                          <div class="page-size-selector flex items-center">
                            <div class="m-r-8">Số bản ghi</div>
                          </div>
                          <DropDown />
                          <div class="page-info">
                            <b>1</b> - <b>15</b> bản ghi
                          </div>
                          <div class="page-next-preview">
                            <div class="page-paging-icon ms-row m-0">
                              <div
                                class="
                                  ms-pagination--nav
                                  flex
                                  justify-between
                                  items-center
                                "
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
                                  <i class="mi-chevron-left"></i>
                                </div>
                              </div>
                              <div
                                class="
                                  ms-pagination--nav
                                  flex
                                  justify-between
                                  items-center
                                "
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
                                  <i class="mi-chevron-right"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
  <TheUserDetail
    v-if="isShowDetail"
    @CloseDialog="showDetailPopup"
    :dataImg="dataImg"
  />
  <EditPopup v-if="isShowEdit" @CloseEditPopup="showEditPopup" />
  <AddNew v-if="isShowAddNew" @CloseAddNewPopup="showAddNew" />
  <div v-if="isDelMsg">
    <div class="ms-component con-ms-popup popup-notification ms-popup-primary">
      <div class="ms-popup--background"></div>
      <div class="ms-popup flex flex-col popup-style">
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
                  >Xoá người dùng</span
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
              @click="closeDeleteMsg"
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
        <div class="ms-popup--content general">
          <span>Bạn có chắc chắn muốn xóa </span>
          <span>
            <span class="text-bold">{{ this.nameDel }}</span>
            khỏi ứng dụng AMIS Quy trình
          </span>
          <span> không?</span>
        </div>
        <footer class="ms-popup--footer" style="height: 60px">
          <div class="flex" style="margin-right: 12px">
            <MsButton
              :styleButton="'btn-cancel m-r-12 '"
              :msButtonText="'Huỷ'"
              :isShowIcon="false"
              @click="closeDeleteMsg"
            />
            <MsButton
              :styleButton="'btn-delete'"
              :msButtonText="'Xoá'"
              :isShowIcon="false"
            />
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Benum from "../../js/enums.js";
import MsButton from "../base/MsButton.vue";
import TheNavbar from "./TheNavbar.vue";
export default {
  component: {
    Benum,
  },
  components: { MsButton, TheNavbar },
  data() {
    return {
      roles: ["Tất cả", "Quản trị ứng dụng quy trình", "Nhân viên", "Quản lý"],
      isVisible: true,
      isCustomCol: false,
      isViDepartment: true,
      isViPosition: true,
      isViEmail: true,
      users: [],
      dataImg: {},
      isShowDetail: false,
      isShowEdit: false,
      isShowAddNew: false,
      showIcon: false,
      check1: false,
      isDelMsg: false,
      nameDel: "",
    };
  },
  methods: {
    /**
     * Author: THBAC (11/8/2022)
     * Hiện thông báo xoá
     * @param {} event
     */
    deleteUser(event, name) {
      event.preventDefault();
      event.stopPropagation();
      this.isDelMsg = true;
      this.nameDel = name;
    },
    /**
     * Author: THBAC (11/8/2022)
     * Đóng thông báo xoá
     * @param {} event
     */
    closeDeleteMsg() {
      this.isDelMsg = false;
    },
    /**
     * Author: THBAC (11/8/2022)
     * Định dạng trạng thái
     */
    convertStatus(status) {
      if (status == Benum.Status.Working) return "Đang hoạt động";
      if (status == Benum.Status.WConfirm) return "Chờ xác nhận";
      if (status == Benum.Status.NotActive) return "Chưa kích hoạt";
      if (status == Benum.Status.DeActivation) return "Ngừng kích hoạt";
    },
    /**
     * Author: THBAC (11/8/2022)
     * Hàm chuyển màu trạng thái
     */
    bgStatus(value) {
      return {
        working: value == Benum.Status.Working,
        wcf: value == Benum.Status.WConfirm,
        notactive: value == Benum.Status.NotActive,
        deactive: value == Benum.Status.DeActivation,
      };
    },
    /**
     * Author: THBAC (11/8/2022)
     * Hàm ccheckbox
     */
    check() {
      this.check1 = !this.check1;
      console.log(this.check1);
    },
    /**
     * Author: THBAC (10/8/2022)
     * Mở form thêm mới người dùng
     */
    addNewUser() {
      this.isShowAddNew = true;
    },
    /**
     * Author: THBAC (4/8/2022)
     * Hàm đóng form chi tiết người dùng
     * @param {} Show
     */
    showDetailPopup(Show) {
      try {
        this.isShowDetail = Show;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (4/8/2022)
     * Hàm đóng form chi tiết người dùng
     * @param {} Show
     */
    showEditPopup(Show) {
      try {
        this.isShowEdit = Show;
        console.log(Show);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (10/8/2022)
     * Hàm đóng form thêm mới người dùng
     * @param {} Show
     */
    showAddNew(Show) {
      try {
        this.isShowAddNew = Show;
        console.log(Show);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (4/8/2022)
     * Hàm click chuột vào dòng để hiện thị form chi tiết
     * @param {*} e
     */
    showDetail(e) {
      if (e.rowType === "data") {
        this.isShowDetail = true;
      }
      this.dataImg = e;
    },
    /**
     * Author: THBAC (11/8/2022)
     * Nút đóng form chỉnh sửa cột
     */
    closeCustomColumn() {
      this.isCustomCol = false;
    },
    /**
     * Author: THBAC (11/8/2022)
     * Nút mở form chỉnh sửa cột
     */
    visiblePopup() {
      this.isCustomCol = true;
    },
    /**
     * Author: THBAC (11/8/2022)
     * Nút mở form chỉnh sửa vai trò
     */
    editUser(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isShowEdit = true;
    },
  },
  watch: {},
  created() {
    try {
      console.log(this.getCode);
      var me = this;
      axios
        .get("https://localhost:7256/api/v1/User")
        .then(function (res) {
          me.users = res.data;
          console.log(res);
        })
        .catch(function (res) {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

