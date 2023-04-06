"use strict";

Vue.createApp({
  data() {
    return {
      inputType: "password",
    };
  },
  methods: {
    toggle() {
      if (this.inputType === "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
  },
  computed: {
    buttonText() {
      return this.inputType === "password" ? "Show Password" : "Hide Password";
    },
    buttonStyle() {
      return this.inputType === "password" ? "to-show" : "to-hide";
    },
  },
  watch: {
    inputType(newVal, oldVal) {
      console.log("Input Type hat sich geändert");
      console.log("alter Wert: ", oldVal);
      console.log("neuer Wert: ", newVal);
    },
    buttonText(newText, oldText) {
      console.log("ButtonText hat sich geändert");
      console.log("alter Text: ", oldText);
      console.log("neuer Text: ", newText);
    },
  },
}).mount("#app");
