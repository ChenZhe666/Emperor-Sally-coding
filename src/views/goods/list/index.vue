<template>
  <div class="">
    <div class="crad">
      <el-card class="box-card" shadow="hover">
        <template #header>
          <div class="card-header">
            <div class="ccc">
              <span>支付订单</span>
              <span class="nn">年</span>
            </div>
            <h2>51</h2>
          </div>
        </template>
        <div class="ke">
          <span>总支付订单</span>
          <span>51</span>
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <template #header>
          <div class="card-header">
            <div class="ccc">
              <span>订单亮</span>
              <span class="nn">周</span>
            </div>
            <h2>555</h2>
          </div>
        </template>
        <div class="ke">
          <span>转化率</span>
          <span>60%</span>
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <template #header>
          <div class="card-header">
            <div class="ccc">
              <span>销售额</span>
              <span class="nn">年</span>
            </div>
            <h2>4</h2>
          </div>
        </template>
        <div class="ke">
          <span>总销售额</span>
          <span>3.74</span>
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <template #header>
          <div class="card-header">
            <div class="ccc">
              <span>新增用户</span>
              <span class="nn">年</span>
            </div>
            <h2>16</h2>
          </div>
        </template>
        <div class="ke">
          <span>总用户</span>
          <span>16</span>
        </div>
      </el-card>
    </div>

    <ul class="home-ul">
      <li>
        <p>
          <el-icon><Avatar /></el-icon>
        </p>
        <p>用户</p>
      </li>
      <li>
        <p>
          <el-icon><ShoppingCart /></el-icon>
        </p>
        <p>商品</p>
      </li>
      <li>
        <p>
          <el-icon><Document /></el-icon>
        </p>
        <p>订单</p>
      </li>
      <li>
        <p>
          <el-icon><ChatDotRound /></el-icon>
        </p>
        <p>评价</p>
      </li>

      <li>
        <p>
          <el-icon><Picture /></el-icon>
        </p>
        <p>图库</p>
      </li>
      <li>
        <p>
          <el-icon><Bell /></el-icon>
        </p>
        <p>公告</p>
      </li>
      <li>
        <p>
          <el-icon><SetUp /></el-icon>
        </p>
        <p>配置</p>
      </li>
      <li>
        <p>
          <el-icon><Ticket /></el-icon>
        </p>
        <p>优惠券</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
// import { useStore } from 'vuex';
//  import { useRouter, useRoute } from 'vue-router';
</script>

<style lang="scss">
.crad {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.box-card {
  width: 23%;
  height: 230px;
  .ke {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .card-header {
    .ccc {
      width: 100%;
      height: 30px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      .nn {
        width: 35px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border-radius: 10px;
        border: 1px solid #b8e19b;
      }
    }

    h2 {
      font-size: 36px;
      width: 100%;
      height: 100px;
      line-height: 100px;
      border-top: 1px solid #ccc;
    }
  }
}

.home-ul {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    border: 1px solid #e4e7ed;
    // align-items: center;
    justify-content: center;
    width: 140px;
    height: 80px;
    // background-color: aqua;
  }

  li:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
}
</style>
