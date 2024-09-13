"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[7084],{"./stories/Communications/Spinner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullPage:()=>FullPage,LargeBlock:()=>LargeBlock,MediumBlock:()=>MediumBlock,SmallBlock:()=>SmallBlock,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_src_Communications_Spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/src/Communications/Spinner/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Communications/TwixtSpinner",component:_react_src_Communications_Spinner__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{size:{control:{type:"select",options:["sm","md","lg","xl"]},defaultValue:"md"},fullPage:{control:"boolean",defaultValue:!1},label:{control:"text",defaultValue:"Loading..."}}};var Template=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Communications_Spinner__WEBPACK_IMPORTED_MODULE_1__.A,args)},SmallBlock=Template.bind({});SmallBlock.args={size:"sm",label:"Loading small..."};var MediumBlock=Template.bind({});MediumBlock.args={size:"md",label:"Loading medium..."};var LargeBlock=Template.bind({});LargeBlock.args={size:"lg",label:"Loading large..."};var FullPage=Template.bind({});FullPage.args={size:"xl",fullPage:!0,label:"Loading full page..."};const __namedExportsOrder=["SmallBlock","MediumBlock","LargeBlock","FullPage"];SmallBlock.parameters={...SmallBlock.parameters,docs:{...SmallBlock.parameters?.docs,source:{originalSource:"args => <TwixtSpinner {...args} />",...SmallBlock.parameters?.docs?.source}}},MediumBlock.parameters={...MediumBlock.parameters,docs:{...MediumBlock.parameters?.docs,source:{originalSource:"args => <TwixtSpinner {...args} />",...MediumBlock.parameters?.docs?.source}}},LargeBlock.parameters={...LargeBlock.parameters,docs:{...LargeBlock.parameters?.docs,source:{originalSource:"args => <TwixtSpinner {...args} />",...LargeBlock.parameters?.docs?.source}}},FullPage.parameters={...FullPage.parameters,docs:{...FullPage.parameters?.docs,source:{originalSource:"args => <TwixtSpinner {...args} />",...FullPage.parameters?.docs?.source}}}},"../react/src/Communications/Spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Spinner_Spinner});var react=__webpack_require__("./node_modules/react/index.js"),Spinner=function(param){var _param_label=param.label,label=void 0===_param_label?"":_param_label,_param_size=param.size,size=void 0===_param_size?"md":_param_size,_param_fullPage=param.fullPage,fullPage=void 0!==_param_fullPage&&_param_fullPage,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,_param_bgColor=param.bgColor,sizeClasses={sm:"w-4 h-4 text-xs",md:"w-8 h-8 text-sm",lg:"w-16 h-16 text-base",xl:"w-24 h-24 text-lg"},spinnerSize=sizeClasses[size]||sizeClasses.md,fullPageClasses=fullPage?"fixed inset-0 flex flex-col items-center justify-center ".concat(void 0===_param_bgColor?"bg-gray-200 bg-opacity-70":_param_bgColor," z-50"):"";return react.createElement("div",{role:"status",className:"".concat(fullPageClasses," ").concat(overwriteClass)},react.createElement("svg",{"aria-hidden":"true",className:"inline ".concat(spinnerSize.split(" ")[0]," text-gray-200 animate-spin fill-blue-600"),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),react.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),label&&react.createElement("span",{className:"ml-2 mt-2 ".concat(spinnerSize.split(" ")[1])},label))};const Spinner_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{label:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},fullPage:{defaultValue:{value:"false",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1},bgColor:{defaultValue:{value:"'bg-gray-200 bg-opacity-70'",computed:!1},required:!1}}}}}]);