<template>
  <div  class="single-mail-details-item">
    <div class="head-part">
      <div class="head-top">
        <h2>{{emailDetailsData[0].title}}</h2>
        <div class="time">{{emailDetailsData[0].date}}</div>
      </div>
      <div class="head-subject">
        {{emailDetailsData[0].subject}}
      </div>
    </div>
    <div class="body-part">
      <h5>{{emailDetailsData[0].greetings}}</h5>
      <p>
        {{emailDetailsData[0].para1}}
      </p>
      <p>
        {{emailDetailsData[0].para2}}
      </p>
    </div>
    <div class="source-file" v-for="(item,i) in emailDetailsData[0].zip" :key="i">
      <div class="img">
        <img :src="item.img" alt="zip file">
      </div>
      <div class="txt">
        <h4>source {{item.title}}</h4>
        <p>{{item.amount}} {{item.ext}}</p>
      </div>
    </div>
    <div class="comment">
      <textarea  id="mail-comment"  placeholder="Write something..."></textarea>
      <div class="scroll-top">
        <i class="flaticon-sent-mail"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      emailDetailsData: {
        type : Array,
        default: () => []
      }
    },
    mounted(){
      this.scrollToTop();
    },
    methods: {
      scrollToTop() {
        $('.scroll-top').on('click',function(){
            $('html, body').animate({
            scrollTop: 0
          }, 1500);
          return false;
        });
      }
    }
  }
</script>

