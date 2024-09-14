"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[1877],{"./stories/Modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Login:()=>Login,Notification:()=>Notification,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("./node_modules/react/index.js");function TwixtModal(param){var _param_title=param.title,title=void 0===_param_title?"":_param_title,children=param.children,footer=param.footer;return react.createElement("div",{className:"flex justify-center items-center h-screen"},react.createElement("div",null,react.createElement("div",{className:"fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center"},react.createElement("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-20 transition-opacity",style:{transition:"opacity 300ms ease-out"}}),react.createElement("div",{className:"bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50",style:{transition:"transform 300ms ease-out"}},react.createElement("div",{className:"bg-indigo-500 text-white px-4 py-2 flex justify-between"},react.createElement("h2",{className:"text-lg font-semibold"},title)),react.createElement("div",{className:"p-4"},children),react.createElement("div",{className:"border-t px-4 py-2 flex justify-end"},footer)))))}TwixtModal.__docgenInfo={description:"",methods:[],displayName:"TwixtModal",props:{title:{defaultValue:{value:"''",computed:!1},required:!1}}};const Modal_stories={title:"Common/TwixtModal",component:TwixtModal,parameters:{},tags:["autodocs"],argTypes:{},args:{title:"Welcome to Twixt modal",desc:"Explore the Twixt modal for improved layout designed to enhance your experience."}};var Login={args:{title:"Login",children:"your description",footer:"Thank you"}},Error={args:{title:"Error",children:"your description",footer:"Thank you"}},Notification={args:{title:"Notification",children:"your description",footer:"Thank you"}};const __namedExportsOrder=["Login","Error","Notification"];Login.parameters={...Login.parameters,docs:{...Login.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Login\',\n    children: "your description",\n    footer: "Thank you"\n  }\n}',...Login.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Error\',\n    children: "your description",\n    footer: "Thank you"\n  }\n}',...Error.parameters?.docs?.source}}},Notification.parameters={...Notification.parameters,docs:{...Notification.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Notification\',\n    children: "your description",\n    footer: "Thank you"\n  }\n}',...Notification.parameters?.docs?.source}}}}}]);