"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[1641],{"./stories/Inputs/CodeEditor.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CSSEditor:()=>CSSEditor,HTMLEditor:()=>HTMLEditor,JavaScriptEditor:()=>JavaScriptEditor,PythonEditor:()=>PythonEditor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CodeEditor_stories});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("../react/node_modules/@uiw/react-codemirror/esm/index.js"),dist=__webpack_require__("../react/node_modules/@codemirror/lang-javascript/dist/index.js"),lang_python_dist=__webpack_require__("../react/node_modules/@codemirror/lang-python/dist/index.js"),lang_html_dist=__webpack_require__("../react/node_modules/@codemirror/lang-html/dist/index.js"),lang_css_dist=__webpack_require__("../react/node_modules/@codemirror/lang-css/dist/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function CodeEditor(param){var _param_height=param.height,height=void 0===_param_height?"400px":_param_height,_param_width=param.width,width=void 0===_param_width?"600px":_param_width,tmp=param.value,initialValue=void 0===tmp?"":tmp,tmp1=param.language,initialLanguage=void 0===tmp1?"javascript":tmp1,_param_onChange=param.onChange,onChange=void 0===_param_onChange?function(){}:_param_onChange,_useState=_sliced_to_array((0,react.useState)(initialLanguage),2),language=_useState[0],setLanguage=_useState[1],_useState1=_sliced_to_array((0,react.useState)(initialValue),2),value=_useState1[0],setValue=_useState1[1],languageExtensions={javascript:(0,dist.Q2)(),python:(0,lang_python_dist.Hg)(),html:(0,lang_html_dist.qy)(),css:(0,lang_css_dist.AH)()},onChangeCallback=(0,react.useCallback)((function(val,viewUpdate){setValue(val),onChange(val)}),[onChange]);return react.createElement("div",{className:"relative mx-auto"},react.createElement("div",{className:"flex items-center space-x-4 mb-4"},react.createElement("select",{value:language,onChange:function(e){return setLanguage(e.target.value)},className:"p-2 border rounded-md bg-white shadow-sm"},react.createElement("option",{value:"javascript"},"JavaScript"),react.createElement("option",{value:"python"},"Python"),react.createElement("option",{value:"html"},"HTML"),react.createElement("option",{value:"css"},"CSS"))),react.createElement(esm.Ay,{value,height,extensions:[languageExtensions[language]],onChange:onChangeCallback,className:"border border-gray-300 rounded-md",style:{minWidth:"600px",width}}))}function CodeEditor_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function CodeEditor_stories_sliced_to_array(arr,i){return function CodeEditor_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function CodeEditor_stories_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function CodeEditor_stories_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return CodeEditor_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CodeEditor_stories_array_like_to_array(o,minLen)}(arr,i)||function CodeEditor_stories_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}CodeEditor.__docgenInfo={description:"",methods:[],displayName:"CodeEditor",props:{height:{defaultValue:{value:"'400px'",computed:!1},required:!1},width:{defaultValue:{value:"'600px'",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1},language:{defaultValue:{value:"'javascript'",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const CodeEditor_stories={title:"Inputs/TwixtCodeEditor",component:CodeEditor,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{height:{control:"text"},width:{control:"text"},value:{control:"text"},language:{control:{type:"select",options:["javascript","python","html","css"]}}},args:{height:"400px",width:"100%",value:"",language:"javascript"}};var Template=function(args){var _useState=CodeEditor_stories_sliced_to_array((0,react.useState)(args.value||""),2),code=_useState[0],setCode=_useState[1];return react.createElement(CodeEditor,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args),{value:code,onChange:setCode}))},JavaScriptEditor=Template.bind({});JavaScriptEditor.args={height:"300px",value:"console.log('Hello, JavaScript!');",language:"javascript"};var PythonEditor=Template.bind({});PythonEditor.args={height:"300px",value:"print('Hello, Python!')",language:"python"};var HTMLEditor=Template.bind({});HTMLEditor.args={height:"300px",value:"<h1>Hello, HTML!</h1>",language:"html"};var CSSEditor=Template.bind({});CSSEditor.args={height:"300px",value:"body { background-color: #f0f0f0; }",language:"css"};const __namedExportsOrder=["JavaScriptEditor","PythonEditor","HTMLEditor","CSSEditor"];JavaScriptEditor.parameters={...JavaScriptEditor.parameters,docs:{...JavaScriptEditor.parameters?.docs,source:{originalSource:"args => {\n  const [code, setCode] = useState(args.value || '');\n  return <TwixtCodeEditor {...args} value={code} onChange={setCode} />;\n}",...JavaScriptEditor.parameters?.docs?.source}}},PythonEditor.parameters={...PythonEditor.parameters,docs:{...PythonEditor.parameters?.docs,source:{originalSource:"args => {\n  const [code, setCode] = useState(args.value || '');\n  return <TwixtCodeEditor {...args} value={code} onChange={setCode} />;\n}",...PythonEditor.parameters?.docs?.source}}},HTMLEditor.parameters={...HTMLEditor.parameters,docs:{...HTMLEditor.parameters?.docs,source:{originalSource:"args => {\n  const [code, setCode] = useState(args.value || '');\n  return <TwixtCodeEditor {...args} value={code} onChange={setCode} />;\n}",...HTMLEditor.parameters?.docs?.source}}},CSSEditor.parameters={...CSSEditor.parameters,docs:{...CSSEditor.parameters?.docs,source:{originalSource:"args => {\n  const [code, setCode] = useState(args.value || '');\n  return <TwixtCodeEditor {...args} value={code} onChange={setCode} />;\n}",...CSSEditor.parameters?.docs?.source}}}}}]);