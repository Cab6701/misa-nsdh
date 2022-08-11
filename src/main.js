import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { createApp } from 'vue'
import App from './App.vue'
import MsButton from './components/base/MsButton.vue';
import DxCheckBox from 'devextreme-vue/check-box';
import DxSelectBox from 'devextreme-vue/select-box';
import DxPopup from 'devextreme-vue/popup'
import DxScrollView from 'devextreme-vue/scroll-view';
import DxSortable from 'devextreme-vue/sortable';
import TheUserDetail from './components/layout/TheUserDetail.vue'
import EditPopup from "./components/popup/EditPopup.vue";
import AddNew from "./components/popup/AddNew.vue"
import DropDown from "./components/base/DropDown.vue"

import {
    DxDataGrid,
    DxColumn,
    DxColumnChooser,
    DxColumnFixing,
    DxRowDragging
} from "devextreme-vue/data-grid";


const app = createApp(App);
app.component("MsButton", MsButton);
app.component("DxDataGrid", DxDataGrid);
app.component("DxCheckBox", DxCheckBox);
app.component("DxColumn", DxColumn);
app.component("TheUserDetail", TheUserDetail);
app.component("DxPopup", DxPopup);
app.component("DropDown", DropDown);
app.component("DxSortable", DxSortable);
app.component("AddNew", AddNew);
app.component("EditPopup", EditPopup);
app.component("DxScrollView", DxScrollView);
app.component("DxSelectBox", DxSelectBox);
app.component("DxRowDragging", DxRowDragging);
app.component("DxColumnChooser", DxColumnChooser);
app.component("DxColumnFixing", DxColumnFixing);
app.mount('#app')