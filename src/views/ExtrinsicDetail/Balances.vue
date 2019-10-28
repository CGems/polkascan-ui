<template>
  <div class="align-items-center">
    <!-- <div class="currency-icon">
      <img
        :src="icon"
        alt="RC"
      />
    </div>-->
    <div class="currency-num">{{`${amount} RC`}}</div>
  </div>
</template>

<script>
export default {
  props: {
    amount: {
      type: String,
      default: "0"
    }
  }
};
</script>

<style lang="scss" scoped>
.currency-icon {
  margin-right: 10px;
  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    transform: translateY(-2px);
  }
}
</style>
