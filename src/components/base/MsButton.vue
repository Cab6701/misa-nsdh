<template>
  <button class="btn-default flex items-center" :class="styleButton">
    <div class="justify-center items-center flex ms-icon-default ms-button--icon" v-if="isShowIcon">
      <i class="ms-icon" :class="iconButtonName"> </i>   
    </div>
    <span class="ms-button-text ms-button--text" :class="styleButtonText">
        {{ msButtonText }}
    </span>
  </button>
</template>
<script>
export default {
  name: "MsButton",
  props: {
    styleButton:{
        type: String
    },  
    isShowIcon:{
        type: Boolean
    },
    iconButtonName: {
      type: String
    },
    msButtonText: {
      type: String
    },
    styleButtonText:{
        type: String
    }
  },
};
</script>
<style lang="scss" scoped>
 .items-center{
    align-items: center;
  }

.btn-default {
  width: auto !important;
  height: 36px !important;
  border-radius: 4px;
  padding: 0px 16px 0px 12px;
  min-width: 80px !important;
  font-family: Misa Fonts Regular;
  font-size: 14px;
  cursor: pointer;
  .ms-icon-default {
    order: 0;
    margin-right: 4px;
    margin-left: 0px;
  }

  .ms-button--icon {
    display: flex;
    position: relative;
    font-size: 20px;

    .ms-icon {
      display: block;
    } 
  }

  .ms-button-text {
      white-space: nowrap;
      font-weight: 500;
    }
    .ms-button--text {
      color: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
    }
}
</style>
