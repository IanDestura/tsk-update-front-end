import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


export default [
  {
    files: ["**/*.{js,vue}"],
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-side-effects-in-computed-properties": "off",
      "vue/return-in-computed-property": "off",
      "vue/no-mutating-props": "off",
      "vue/no-async-in-computed-properties": "off",
      "no-case-declarations": "off",
      "no-undef": "off",
      "vue/require-toggle-inside-transition": "off",
      "no-useless-escape": "off",
      "no-prototype-builtins": "off",
      "vue/no-use-v-if-with-v-for": "off", 
    }
  }
];