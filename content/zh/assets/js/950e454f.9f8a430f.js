"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),s=n,k=c["".concat(m,".").concat(s)]||c[s]||d[s]||i;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={},l="RocketMQ Streams \u6838\u5fc3\u6982\u5ff5",o={unversionedId:"streams/02RocketMQ Streams Concept",id:"version-5.0/streams/02RocketMQ Streams Concept",title:"RocketMQ Streams \u6838\u5fc3\u6982\u5ff5",description:"\u9886\u57df\u6a21\u578b",source:"@site/versioned_docs/version-5.0/09-streams/02RocketMQ Streams Concept.md",sourceDirName:"09-streams",slug:"/streams/02RocketMQ Streams Concept",permalink:"/zh/docs/streams/02RocketMQ Streams Concept",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/09-streams/02RocketMQ Streams Concept.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ Streams \u6982\u89c8",permalink:"/zh/docs/streams/01RocketMQ Streams Overview"},next:{title:"RocketMQ Streams \u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/streams/03RocketMQ Streams Quick Start"}},m={},p=[{value:"\u9886\u57df\u6a21\u578b",id:"\u9886\u57df\u6a21\u578b",level:2},{value:"StreamBuilder",id:"streambuilder",level:3},{value:"RocketMQStream",id:"rocketmqstream",level:3},{value:"\u6d41\u5904\u7406\u5b9e\u4f8b",id:"\u6d41\u5904\u7406\u5b9e\u4f8b",level:3},{value:"StreamBuilder",id:"streambuilder-1",level:2},{value:"RStream",id:"rstream",level:2},{value:"GroupedStream",id:"groupedstream",level:2},{value:"WindowStream",id:"windowstream",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rocketmq-streams-\u6838\u5fc3\u6982\u5ff5"},"RocketMQ Streams \u6838\u5fc3\u6982\u5ff5"),(0,n.kt)("h2",{id:"\u9886\u57df\u6a21\u578b"},"\u9886\u57df\u6a21\u578b"),(0,n.kt)("h3",{id:"streambuilder"},"StreamBuilder"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img_2.png",src:r(18862).Z,width:"771",height:"359"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2aStreamBuilder\u5b9e\u4f8b\uff0c\u67091\u5230N\u4e2apipeline\uff0cpipeline\u8868\u793a\u4e00\u4e2a\u6570\u636e\u5904\u7406\u8def\u5f84\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2apipeline\u53ef\u4ee5\u542b\u67091\u5230N\u4e2a\u5904\u7406\u8282\u70b9GroupNode\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2aStreamBuilder\u5b9e\u4f8b\uff0c\u6709\u4e00\u4e2aTopologyBuilder\uff0cTopologyBuilder\u53ef\u6784\u5efa\u51fa\u6570\u636e\u5904\u7406\u5668processor\uff1b "),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2aJobId\u5bf9\u5e94\u4e00\u4e2aStreamBuilder\u5b9e\u4f8b\u3002")),(0,n.kt)("h3",{id:"rocketmqstream"},"RocketMQStream"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img_2.png",src:r(79731).Z,width:"779",height:"606"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2aRocketMQStream\u5b9e\u4f8b\uff0c\u6709\u4e00\u4e2a\u62d3\u6251\u6784\u5efa\u5668TopologyBuilder\uff1b "),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2aRocketMQStream\u5b9e\u4f8b\uff0c\u53ef\u5b9e\u4f8b\u53161\u5230N\u4e2aworker\u7ebf\u7a0b; "),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7ebf\u7a0bWorkerThread\u5b9e\u4f8b\uff0c\u5305\u542b\u4e00\u4e2aengine\uff1b "),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2aengine\u5305\u542b\u6267\u884c\u6570\u636e\u5904\u7406\u7684\u6240\u6709\u903b\u8f91\uff0c\u5305\u542b\u4e00\u4e2aconsumer\u5b9e\u4f8b\u3001\u4e00\u4e2aproducer\u5b9e\u4f8b\u3001\u4e00\u4e2aStateStore\u5b9e\u4f8b;")),(0,n.kt)("h3",{id:"\u6d41\u5904\u7406\u5b9e\u4f8b"},"\u6d41\u5904\u7406\u5b9e\u4f8b"),(0,n.kt)("p",null,"\u6d41\u5904\u7406\u5b9e\u4f8b\u8868\u793a\u4e00\u4e2a\u8fd0\u884cRocketMQ Streams\u7684\u8fdb\u7a0b\uff1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6d41\u5904\u7406\u5b9e\u4f8b\u5305\u542b\u4e00\u4e2aStreamBuilder\uff0c\u4e00\u4e2aRocketMQStream\uff0c\u4e00\u4e2a\u62d3\u6251\u56fe\uff0c\u4e00\u5230\u591a\u4e2apipeline\uff1b")),(0,n.kt)("h2",{id:"streambuilder-1"},"StreamBuilder"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"StreamBuilder(jobId)")," \u6784\u5efa\u5b9e\u4f8b\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> RStream<OUT> source(topicName, deserializer) ")," \u5b9a\u4e49source topic \u548c\u53cd\u5e8f\u5217\u5316\u65b9\u5f0f\uff1b")),(0,n.kt)("h2",{id:"rstream"},"RStream"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<K> GroupedStream<K, T> keyBy(selectAction)")," \u6309\u7167\u7279\u5b9a\u5b57\u6bb5\u5206\u7ec4\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<O> RStream<O> map(mapperAction)")," \u5bf9\u6570\u636e\u8fdb\u884c\u4e00\u5bf9\u4e00\u8f6c\u5316\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RStream<T> filter(predictor)")," \u5bf9\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<VR> RStream<T> flatMap(mapper)"),"\u5bf9\u6570\u636e\u8fdb\u884c\u4e00\u5bf9\u591a\u8f6c\u5316\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<T2> JoinedStream<T, T2> join(rightStream)")," \u53cc\u6d41Join\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sink(topicName, serializer)")," \u5c06\u7ed3\u679c\u8f93\u51fa\u5230\u7279\u5b9atopic\uff1b")),(0,n.kt)("h2",{id:"groupedstream"},"GroupedStream"),(0,n.kt)("p",null,"\u5bf9\u542b\u6709\u76f8\u540cKey\u7684\u6570\u636e\u8fdb\u884c\u64cd\u4f5c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> GroupedStream<K, Integer> count(selectAction)")," \u7edf\u8ba1\u542b\u6709\u67d0\u4e2a\u5b57\u6bb5\u6570\u636e\u7684\u4e2a\u6570\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, V> min(selectAction)")," \u5bf9\u67d0\u4e2a\u5b57\u6bb5\u7edf\u8ba1\u6700\u5c0f\u503c\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, V> max(selectAction)")," \u5bf9\u67d0\u4e2a\u5b57\u6bb5\u7edf\u8ba1\u6700\u5927\u503c\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, ? extends Number> sum(selectAction)")," \u5bf9\u67d0\u4e2a\u5b57\u6bb5\u7edf\u8ba1\u548c\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, V> filter(predictor)")," \u5bf9\u67d0\u4e2a\u5b57\u6bb5\u8fdb\u884c\u8fc7\u6ee4\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> GroupedStream<K, OUT> map(valueMapperAction)")," \u5bf9\u6570\u636e\u8fdb\u884c\u4e00\u5bf9\u4e00\u8f6c\u5316\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> GroupedStream<K, OUT> aggregate(accumulator)")," \u5bf9\u6570\u636e\u8fdb\u884c\u805a\u5408\u64cd\u4f5c\uff0c\u4e14\u805a\u5408\u652f\u6301\u4e8c\u9636\u805a\u5408\uff0c\u4f8b\u5982\u5728\u7a97\u53e3\u672a\u89e6\u53d1\u65f6\u6dfb\u52a0\u6570\u636e\uff0c\u5728\u7a97\u53e3\u89e6\u53d1\u65f6\u8ba1\u7b97\u7ed3\u679c\u8fd9\u7c7b\u7b97\u5b50\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WindowStream<K, V> window(windowInfo)")," \u5bf9\u7a97\u53e3\u5212\u5b9awindow\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, V> addGraphNode(name, supplier)")," \u5e95\u5c42\u63a5\u53e3\uff0c\u5411\u6d41\u5904\u7406\u62d3\u6251\u4e2d\u589e\u52a0\u81ea\u5b9a\u4e49\u7b97\u5b50\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RStream<V> toRStream()")," \u8f6c\u5316\u4e3aRStream\uff0c\u53ea\u662f\u5728\u63a5\u53e3\u5f62\u5f0f\u4e0a\u8f6c\u5316\uff0c\u5bf9\u6570\u636e\u65e0\u4efb\u4f55\u64cd\u4f5c\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sink(topicName, serializer)")," \u6309\u7167\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5f62\u5f0f\u5c06\u7ed3\u679c\u5199\u51fa\u5230topic\uff1b")),(0,n.kt)("h2",{id:"windowstream"},"WindowStream"),(0,n.kt)("p",null,"\u5bf9\u88ab\u5212\u5206window\u7684\u6570\u636e\u8fdb\u884c\u64cd\u4f5c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WindowStream<K, Integer> count()")," \u7edf\u8ba1\u7a97\u53e3\u5185\u6570\u636e\u4e2a\u6570\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WindowStream<K, V> filter(predictor)")," \u8fc7\u6ee4\u7a97\u53e3\u5185\u6570\u636e\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> WindowStream<K, OUT> map(mapperAction)")," \u5bf9\u7a97\u53e3\u5185\u6570\u636e\u4e00\u5bf9\u4e00\u8f6c\u5316\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> WindowStream<K, OUT> aggregate(aggregateAction)")," \u5bf9\u7a97\u53e3\u5185\u6570\u636e\u591a\u5bf9\u4e00\u8f6c\u5316\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> WindowStream<K, OUT> aggregate(accumulator)")," \u5bf9\u6570\u636e\u8fdb\u884c\u805a\u5408\u64cd\u4f5c\uff0c\u4e14\u805a\u5408\u652f\u6301\u4e8c\u9636\u805a\u5408\uff0c\u4f8b\u5982\u5728\u7a97\u53e3\u672a\u89e6\u53d1\u65f6\u6dfb\u52a0\u6570\u636e\uff0c\u5728\u7a97\u53e3\u89e6\u53d1\u65f6\u8ba1\u7b97\u7ed3\u679c\u8fd9\u7c7b\u7b97\u5b50\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void sink(topicName, serializer)")," \u6309\u7167\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5f62\u5f0f\u5c06\u7ed3\u679c\u5199\u51fa\u5230topic\uff1b")))}c.isMDXComponent=!0},18862:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/\u9886\u57df\u6a21\u578b-1-d0e1ee0b63e037d14c2ce13488a8eb65.png"},79731:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/\u9886\u57df\u6a21\u578b-2-4b2fc60e1b5ded400548aa3f25861dd8.png"}}]);