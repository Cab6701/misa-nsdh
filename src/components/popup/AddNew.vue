<template>
  <div class="ms-component con-ms-popup center ms-popup-primary">
    <div class="ms-popup--background"></div>
    <div class="ms-popup flex flex-col popup-s">
      <div class="h-53">
        <header class="ms-popup--header h-53">
          <div class="ms-popup--title">
            <h2>
              <span class="mess-title"> Thêm người dùng </span>
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
      <div class="ms-popup--content popup-content-1">
        <div class="flex header-custom"></div>
        <div class="w-full grid-paging">
          <div class="grid-container">
            <div id="datagrid" class="h-full">
              <div class="table-content">
                <table ref="tableAddNew">
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
                    <th></th>
                  </thead>
                  <tbody v-for="(item, index) in this.listUser" :key="index">
                    <tr>
                      <td>{{ index + 1 }}</td>
                      <td>
                        <input
                          ref="userCodeRef"
                          class="ms-input table-input input-addnew"
                          type="text"
                          v-model="listUser[index].userCode"
                        />
                      </td>
                      <td>
                        <input
                          class="ms-input table-input input-addnew"
                          type="text"
                          v-model="listUser[index].userName"
                        />
                      </td>
                      <td>
                        <DxSelectBox
                          placeholder="Chọn phòng ban"
                          :data-source="departmentArr"
                          display-expr="departmentName"
                          value-expr="departmentID"
                          v-model="listUser[index].departmentID"
                        />
                      </td>
                      <td>
                        <DxSelectBox
                          placeholder="Chọn vị trí"
                          :data-source="positionArr"
                          display-expr="positionName"
                          value-expr="positionID"
                          v-model="listUser[index].positionID"
                        />
                      </td>
                      <td>
                        <input
                          class="ms-input table-input input-addnew"
                          type="text"
                          v-model="listUser[index].email"
                        />
                      </td>
                      <td>
                        <DxTagBox
                          :search-enabled="true"
                          height="36px"
                          width="340px"
                          placeholder="Chọn vai trò"
                          :accept-custom-value="false"
                          :multiline="false"
                          :data-source="roleArr"
                          display-expr="roleName"
                          value-expr="roleID"
                          v-model="listUser[index].roleID"
                        />
                      </td>
                      <td>
                        <DxSelectBox
                          placeholder="Chọn trạng thái"
                          :data-source="statusArr"
                          display-expr="statusName"
                          value-expr="ID"
                          v-model="listUser[index].status"
                        />
                      </td>
                      <td class="sticky-right">
                        <div class="flex justify-flexend m-8 sticky-right">
                          <div class="style-button">
                            <div class="button-comand-wrap">
                              <div
                                class="icon-delete-custom icon-hidden "
                                @click="deleteRow(index)"
                              ></div>
                            </div>
                          </div>
                        </div>
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
            @click="btnaddNew"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      roles: [],
      departments: [],
      positions: [],
      statuschos: [],
      departmentArr: [],
      positionArr: [],
      statusArr: [
        {
          ID: 0,
          statusName: "Đang hoạt động",
        },
        {
          ID: 1,
          statusName: "Chờ xác nhận",
        },
        {
          ID: 2,
          statusName: "Chưa kích hoạt",
        },
        {
          ID: 3,
          statusName: "Ngừng kích hoạt",
        },
      ],
      roleArr: [],
      listUser: [],
      newCode:0,
    };
  },
  methods: {
    /**
     * Author: THBAC (19/8/2022)
     * Xoá dòng
     * @param {*} index 
     */
    deleteRow(index){
        this.listUser.splice(index,1);
    },
    /**
     * Author: THBAC (18/8/2022)
     * Nút lưu để thêm mới user
     */
    btnaddNew() {
      try {
        // this.listUser.push(this.user);
        console.log(this.user);
        axios
          .post("https://localhost:7256/api/v1/User/InsertUsers", this.listUser)
          .then(function (res) {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (10/8/2022)
     * Nút thêm dòng mới
     */
    addRow() {
      var userAdd = {};
      userAdd.roleID = [];
      userAdd.userCode = "";
      userAdd.userName = "";
      userAdd.departmentID = "";
      userAdd.positionID = "";
      userAdd.email = "";
      userAdd.status = null;

      this.listUser.push(userAdd);

    },
    /**
     * Author: THBAC (10/8/2022)
     * Đóng form thêm mới nhân viên
     */
    closeAddNew() {
      this.$emit("CloseAddNewPopup", false);
    },
  },
  async created() {
    var me = this;
    await axios.get("https://localhost:7256/api/v1/User/newUserCode")
    .then(function(res){
      me.newCode=res.data;
      console.log(res);
    })
    this.$nextTick(() => this.$refs.userCodeRef[0].focus());

    var userAdd = {};
    userAdd.roleID = [];
    userAdd.userCode = this.newCode.toString();
    userAdd.userName = "";
    userAdd.departmentID = "";
    userAdd.positionID = "";
    userAdd.email = "";
    userAdd.status = null;

    this.listUser.push(userAdd);

    //Lấy dữ liệu phòng ban
    await axios
      .get("https://localhost:7256/api/v1/Department")
      .then(function (res) {
        me.departments = res.data;
        console.log(res);
      });

    //Lấy dữ liệu vị trí
    await axios
      .get("https://localhost:7256/api/v1/Positions")
      .then(function (res) {
        me.positions = res.data;
        console.log(res);
      });

    //Lấy dữ liệu vai trò
    await axios.get("https://localhost:7256/api/v1/Role").then(function (res) {
      me.roles = res.data;
      console.log(res);
    });

    //Lấy dữ liệu user
    await axios.get("https://localhost:7256/api/v1/User").then(function (res) {
      me.statuschos = res.data;
      console.log(res);
    });

    // Thêm dữ liệu vào bảng department
    for (let index = 0; index < this.departments.length; index++) {
      this.departmentArr.push(this.departments[index]);
    }

    // Thêm dữ liệu vào bảng positions
    for (let index = 0; index < this.positions.length; index++) {
      this.positionArr.push(this.positions[index]);
    }

    // Thêm dữ liệu vào bảng roles
    for (let index = 0; index < this.roles.length; index++) {
      this.roleArr.push(this.roles[index]);
    }
  },
};
</script>