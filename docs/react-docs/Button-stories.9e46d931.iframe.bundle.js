"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[303],{"./stories/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,clickButton:()=>clickButton,default:()=>Button_stories});var react=__webpack_require__("./node_modules/react/index.js");function TwixtButton(param){var children=param.children,onClick=param.onClick,overwriteClass=param.overwriteClass,buttonClasses=overwriteClass||"px-4 py-2 bg-indigo-500 text-white rounded-md";return react.createElement("button",{onClick,className:buttonClasses},children)}TwixtButton.__docgenInfo={description:"",methods:[],displayName:"TwixtButton"};const Button_stories={title:"Common/TwixtButton",component:TwixtButton,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClick:{action:"clicked",description:"Function to be called when the button is clicked"},children:{type:{name:"string",required:!0},description:"The content of the button",defaultValue:"Button"},overwriteClass:{type:{name:"string"}}}};var clickButton={args:{children:"Clickme",overwriteClass:"px-4 py-2 bg-indigo-500 text-white rounded-md",onClick:function(){alert("button clicked")}}};clickButton.parameters={...clickButton.parameters,docs:{...clickButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Clickme',\n    overwriteClass: 'px-4 py-2 bg-indigo-500 text-white rounded-md',\n    onClick: () => {\n      alert('button clicked');\n    }\n  }\n}",...clickButton.parameters?.docs?.source}}};const __namedExportsOrder=["clickButton"]}}]);