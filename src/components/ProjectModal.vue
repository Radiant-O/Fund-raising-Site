<template>
  <section class="cta">
    <section class="supt-modal">
      <img src="../assets/images/icon-close-modal.svg" @click="projModal" />
      <p class="modal-head">Back this project</p>
      <p class="modal-head-cont">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

      <div class="proj-supt">
        <div class="circle">
          <div class="parent"><p></p></div>
        </div>
        <div class="proj-supt-head">
          <p class="choice">Pledge with no reward</p>
          <p class="proj-content">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            update via email.
          </p>
        </div>
      </div>

      <div class="proj-supt">
        <div class="circle">
          <div class="parent" @click="donateRise1"><p></p></div>
        </div>
        <div class="proj-supt-head">
          <div class="proj-head">
            <div class="mob">
              <p class="choice">Bamboo Stand</p>
              <p class="pledge">Pledge $25 or more</p>
            </div>
            <p class="avail sm:hidden lg:block">101 <span>left</span></p>
          </div>
          <p class="proj-content">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <p class="avail lg:hidden">101 <span>left</span></p>
          <hr />
          <div>
            <div class="show-pledge" v-if="donate1">
              <p>Enter your pledge</p>
              <div>
                <p class="amount">
                  <span>$</span> <input type="text" placeholder="25" v-model="amountDonate" />
                </p>
                <p class="cont" @click="confirmModal">Continue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="proj-supt">
        <div class="circle">
          <div class="parent"><p @click="donateRise2"></p></div>
        </div>
        <div class="proj-supt-head">
          <div class="proj-head">
            <div class="mob">
              <p class="choice">Black Edition Stand</p>
              <p class="pledge">Pledge $75 or more</p>
            </div>
            <p class="avail sm:hidden lg:block">64 <span>left</span></p>
          </div>
          <p class="proj-content">
            You get a Black Special Edition computer stand and a personal thank
            you. You'll be added to our Backer member list. Shipping is
            included.
          </p>
          <div>
            <p class="avail lg:hidden">101 <span>left</span></p>
            <hr />
            <div class="show-pledge" v-if="donate2">
              <p>Enter your pledge</p>
              <div>
                <p class="amount">
                  <span>$</span> <input type="text" v-model=amountDonate placeholder="75" />
                </p>
                <p class="cont" @click="confirmModal">Continue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="proj-supt moga">
        <div class="circle">
          <div class="parent"><p></p></div>
        </div>
        <div class="proj-supt-head">
          <div class="proj-head">
            <div class="mob">
              <p class="choice">Mahogany Special Edition</p>
              <p class="pledge">Pledge $200 or more</p>
            </div>
            <p class="avail sm:hidden lg:block">0 <span>left</span></p>
          </div>
          <p class="proj-content">
            You get two Special Editioin Mahogamy stands, a Backet T-Shirt and a
            personal thank you. You'll be added to our Backker member list.
            Shipping is included.
          </p>
          <p class="avail lg:hidden">0 <span>left</span></p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  props: ["projModal", "confirmModal"],
  data() {
    return {
      donate1: false,
      donate2: false,
      amountDonate: 0,
    };
  },
  methods: {
    donateRise1() {
      this.donate1 = !this.donate1;
      this.donate2 = false
    },
    donateRise2() {
      this.donate2 = !this.donate2;
      this.donate1 = false
    },
  },
};
</script>

<style></style>
