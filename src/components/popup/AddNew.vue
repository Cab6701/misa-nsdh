<template>
  <div class="ms-component con-ms-popup center ms-popup-primary">
    <div class="ms-popup--background"></div>
    <div
      class="ms-popup flex flex-col"
      style="background: rgb(255, 255, 255); width: 992px; min-width: 500px"
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
              >
                Thêm người dùng
              </span>
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
          >
            <div
              class="
                flex
                items-center
                justify-center
                ms-popup--close
                btn-icon-1
              "
              @click="closeAddNew"
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
        <div class="flex header-custom"></div>
        <div class="w-full grid-paging">
          <div class="grid-container">
            <div id="datagrid" class="h-full">
              <div class="table-content">
                <table>
                  <thead class="thead-table">
                    <th class="number">STT</th>
                    <th class="u-code">
                      Mã nhân viên<span class="required"> * </span>
                    </th>
                    <th class="u-name">
                      Họ và tên<span class="required"> * </span>
                    </th>
                    <th class="u-department">
                      Phòng ban<span class="required"> * </span>
                    </th>
                    <th class="u-position">
                      Vị trí công việc<span class="required"> * </span>
                    </th>
                    <th class="u-email">
                      Email<span class="required"> * </span>
                    </th>
                    <th class="u-role">
                      Vai trò<span class="required"> * </span>
                    </th>
                    <th class="u-status">
                      Trạng thái<span class="required"> * </span>
                    </th>
                  </thead>
                  <tbody v-for="i in array" :key="i">
                    <tr>
                      <td>{{i}}</td>
                      <td>
                        <input ref="userCodeRef" class="ms-input table-input input-addnew" type="text" />
                      </td>
                      <td>
                        <input class="ms-input table-input input-addnew" type="text" />
                      </td>
                      <td>
                        <DxSelectBox placeholder="Chọn phòng ban" :items="departments"/>
                      </td>
                      <td>
                        <DxSelectBox placeholder="Chọn vị trí" :items="positions"/>
                      </td>
                      <td>
                        <input class="ms-input table-input input-addnew" type="text" />
                      </td>
                      <td>
                        <DxTagBox
                          :data-source="roles"
                          :search-enabled="true"
                          height="36px"
                          width="340px"
                          placeholder="Chọn vai trò"
                          :accept-custom-value="false"
                          :multiline="false"
                        />
                      </td>
                      <td>
                        <DxSelectBox placeholder="Chọn trạng thái" :items="statuschos"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="">
                  <Ms-Button
                    :styleButton="'ms-button-newrow'"
                    :msButtonText="'Thêm dòng'"
                    :isShowIcon="true"
                    :iconButtonName="'icon-plus-blue'"
                    @click="addRow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ms-popup--footer borderFooter">
        <div class="flex">
          <MsButton
            :styleButton="'btn-cancel m-r-12 '"
            :msButtonText="'Huỷ'"
            :isShowIcon="false"
            @click="closeAddNew"
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
export default {
  data() {
    return {
      array:1,
      roles: ["Tất cả", "Quản trị ứng dụng quy trình", "Nhân viên", "Quản lý"],
      departments:["Phòng tuyển sinh","Phòng đào tạo","Phòng nhân sự"],
      positions:["Giám đốc","Chủ tịch","Lập trình viên"],
      statuschos:["Đang hoạt động","Chưa kích hoạt","Ngừng kích hoạt","Chờ xác nhận",],
    }
  },
  methods: {
    /**
     * Author: THBAC (10/8/2022)
     * Nút thêm dòng mới
     */
    addRow(){
      this.array+=1;
    },
    /**
     * Author: THBAC (10/8/2022)
     * Đóng form thêm mới nhân viên
     */
    closeAddNew(){
        this.$emit("CloseAddNewPopup",false);
    }
  },
  created() {
      var me=this;
      this.$nextTick(() => this.$refs.userCodeRef[0].focus());
  },
}
</script>