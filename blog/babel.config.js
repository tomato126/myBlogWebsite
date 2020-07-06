/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-18 11:20:05
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-22 13:51:46
 */ 
module.exports = {
  presets: [["@babel/preset-env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
