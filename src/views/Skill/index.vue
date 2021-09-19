<template>
  <div class="skill">
    <div class="main">
      <div
        class="center-point d-flex flex-column justify-content-center"
        @click="currentIndex = 0"
      >
        <p>{{ pointData.skillValue }}</p>
        <p>point</p>
      </div>
      <div class="d-flex flex-wrap clip-wrap">
        <div
          class="clip-box"
          v-for="data in skillData"
          :key="data.id"
          @click="currentIndex = data.id"
        >
          <div class="content">
            <h2>
              {{ data.skillName }}
            </h2>
            <p>{{ data.skillValue }} value</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="skill-detail"
      :class="{ active: isactive }"
      @click="isactive = !isactive"
    >
      <div class="detail">
        <h2>{{ detailData.skillName }}</h2>
        <p class="lv">-lv {{ detailData.skillValue }}</p>
        <div class="list-wrap">
          <p class="des">{{ detailData.skillDes }}</p>
          <ul class="list">
            <li v-show="currentIndex !== 0">基本掌握</li>
            <li v-for="(list, index) in detailData.skillList" :key="index">
              - {{ list }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skill",
  data() {
    return {
      isactive: true,
      pointData: {
        skillName: "總評分計算",
        skillValue: "",
        skillDes: "此分數以本人認知為主，實際情況請與本人面談。",
      },
      currentIndex: 0,
    };
  },
  mounted() {
    let total = 0;
    this.skillData.forEach((value) => {
      total += value.skillValue;
    });
    this.pointData.skillValue = `${total} / 80`;
  },
  computed: {
    skillData() {
      return this.$store.state.allData.skillData;
    },
    detailData() {
      if (this.currentIndex === 0) return this.pointData;
      return this.skillData[this.currentIndex - 1];
    },
  },
  watch: {
    currentIndex() {
      this.isactive = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_utils";
.skill {
  .main {
    color: $font-color-blue;
    text-shadow: 0 0 5px $font-color-blue, 0 0 8px $font-color-blue;
    text-align: center;
  }
  .skill-detail {
    width: 400px;
    @include psa(50%, -360px, initial, initial);
    @include pad-width {
      width: 360px;
      @include psa(50%, -320px, initial, initial);
    }
    z-index: 3;
    transform: translateY(-50%);
    min-height: calc(70vh - 70px);
    background-color: rgba(#0b1221, 0.8);
    border-top: 1px solid $primary;
    border-bottom: 1px solid $primary;
    clip-path: polygon(3% 0, 100% 0, 100% 100%, 3% 100%, 0 97%, 0 3%);
    transition: right 1s;
    cursor: pointer;
    .detail {
      position: absolute;
      left: 40px;
      right: 0;
      top: 0;
      bottom: 0;
      border-left: 1px solid rgba($primary, 0.5);
      h2,
      .lv {
        border-bottom: 1px solid rgba($primary, 0.5);
        padding-left: 10px;
      }
      h2 {
        @include font(20px, 35px);
        color: rgb(209, 209, 58);
      }
      .lv {
        @include font(18px, 60px);
        @include light-primary;
      }
      .des,
      .list {
        padding-left: 10px;
        padding-top: 20px;
        color: $font-color-blue;
        line-height: 1.5;
        text-shadow: 0 0 5px $font-color-blue, 0 0 8px $font-color-blue;
      }
      .list-wrap {
        height: 70%;
        overflow-y: auto;
      }
      @include pad-width {
        h2,
        .lv {
          font-size: 16px;
        }
        .des,
        .list {
          font-size: 14px;
          text-shadow: 0 0 0px $font-color-blue, 0 0 0px $font-color-blue;
        }
        .list-wrap {
          height: 70%;
          overflow-y: auto;
        }
      }
    }
    &.active {
      @include psa(50%, 0px, initial, initial);
    }
    &:after,
    &:before {
      content: "";
      @include psa(initial, initial, initial, 0);
      width: 30px;
      height: 5px;
      border: 1px solid rgba($primary, 0.5);
      border-left: none;
    }
    &:before {
      top: 50%;
      transform: translateY(-50%);
    }
    &:after {
      top: 30px;
    }
  }
}
.center-point {
  @include psa(50%, initial, initial, 50%);
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  @include pad-width {
    width: 120px;
    height: 120px;
  }
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      135deg,
      rgba($primary, 0.5) 0%,
      rgba($primary, 0.5) 60%,
      darken($font-color-blue, 40%) 100%
    );
  }
}
.clip-wrap {
  @include psa(50%, initial, initial, 50%);
  transform: translate(-50%, -50%);
  width: 400px;
  .clip-box:nth-child(4) ~ .clip-box {
    margin-top: 100px;
  }
  @include pad-width {
    width: 320px;
  }
}
.clip-box {
  position: relative;
  width: 100px;
  height: 100px;
  @include pad-width {
    width: 80px;
    height: 80px;
  }
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  cursor: pointer;
  .content {
    @include psa(1.5px, 1.5px, 1.5px, 1.5px);
    line-height: 80px;
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
    z-index: 1;
    p {
      font-size: 10px;
      line-height: 10px;
    }
    @include pad-width {
      font-size: 12px;
      line-height: 48px;
      p {
        font-size: 8px;
      }
    }
  }
  &:after {
    content: "";
    @include psa(0, 0, 0, 0);
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
    background: linear-gradient(
      135deg,
      darken(red, 30%) 5%,
      transparent 25%,
      transparent 90%,
      darken(red, 30%) 100%
    );
  }
  &:hover .content {
    background-color: rgba($primary, 0.5);
  }
  &:hover::after {
    background: linear-gradient(
      135deg,
      $font-color-blue 5%,
      transparent 25%,
      transparent 60%,
      $font-color-blue 90%,
      $font-color-blue 100%
    );
  }
}
</style>
<style src="./dark.scss" lang="scss"></style>
<style src="./light.scss" lang="scss"></style>
