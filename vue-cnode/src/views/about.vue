<template>
    <div style="height: 100%;">
        <nv-head page-type="关于" :fix-head="true"  :need-add="false"
                 :need-res="true" ></nv-head>

        <dl class="about-info">

            <dt>关于项目</dt>
            <dd>该项目是基于Cnodejs的api，采用vue.js重写的webapp。</dd>
            <p>项目是小北自学Vue所用，主要模仿<a href="https://github.com/shinygang/Vue-cnodejs">shinygang</a>的项目.</p>
              <p>重构代码，升级Vue版本</p>
          <p>如有侵犯权益，请及时联系</p>
            <dt>源码地址</dt>

            <dd>
                <a href="https://github.com/Xiaobei-QuQ/learn-vue/tree/master/vue-cnode">
                  https://github.com/Xiaobei-QuQ/learn-vue/tree/master/vue-cnode</a>
            </dd>

            <dt>意见反馈</dt>
            <dd>
                <a href="https://github.com/Xiaobei-QuQ/learn-vue/issues">
                    发现bug或者提需求</a>
            </dd>

            <dt>当前版本</dt>
            <dd>V1.2</dd>

        </dl>
    </div>
</template>
<script>
    import nvHead from '../components/header.vue';
    export default {
        components: {
            nvHead
        }
    };
</script>
<style>
  dl > p {
    margin: 5px;
  }
</style>
