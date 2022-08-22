<template>
  <div id="profileImage" :class="this.colorBg">
    {{ dataCode }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataCode: "",
      arrayName: [],
      colorBg: "",
    };
  },
  methods: {
    /**
     * Author: THBAC (15/8/2022)
     * Hàm chia tên thành từng chữ
     */
    splitSpace() {
      if (this.username) {
        const s = this.username;
        this.arrayName = s.split(" ");
        this.dataCode =
          this.arrayName[0].charAt(0) +
          this.arrayName[2].charAt(0);
      }
    },
  },
  props: {
    usercode: String,
    username: String,
  },
  created() {
    
    this.dataCode = this.username;
    const lastLetter = this.usercode.slice(-1);
    // console.log(lastLetter);
    switch (lastLetter) {
      case "0":
        this.colorBg = "lightblue";
        break;
      case "1":
        this.colorBg="lightgray";
        break;
      case "2":
        this.colorBg="greenyellow";
        break;
      case "3":
        this.colorBg="deepink";
        break;
      case "4":
        this.colorBg="orange";
        break;
      case "5":
        this.colorBg="darkorchild";
        break;
      case "6":
        this.colorBg="crimson";
        break;
      case "7":
        this.colorBg="green";
        break;
      case "8":
        this.colorBg="whitegray";
        break;
      case "9":
        this.colorBg="tomato";
        break;
      default:
        break;
    }
    this.splitSpace();
  },
};
</script>
<style>
#profileImage {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  margin-right: 8px;
}

.lightblue {
  background-color: #00ffff;
}
.green{
    background-color: #7fff00;
}
.crimson{
    background-color: #dc143c;
}
.darkorchild{
    background-color: #9932cc;
}
.orange{
    background-color: #ff8c00;
}
.deepink{
    background-color: #ff1493;
}
.greenyellow{
    background-color: #ADFF2F;
}
.lightgray{
    background-color: #d3d3d3;
}
.whitegray{
    background-color:#ffdead ;
}
.tomato{
    background-color:#ff6347
}

</style>