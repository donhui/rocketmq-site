"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s="Quick Start",i={unversionedId:"quickStart/01quickstart",id:"version-5.0/quickStart/01quickstart",title:"Quick Start",description:"This section will describe steps to quickly deploy a RocketMQ cluster with a single node; Commands to send and receive messages to/from it are also included as proof of work.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/02-quickStart/01quickstart.md",sourceDirName:"02-quickStart",slug:"/quickStart/01quickstart",permalink:"/docs/quickStart/01quickstart",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/02-quickStart/01quickstart.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Parameter Constraints and Suggestions",permalink:"/docs/introduction/03limits"},next:{title:"Domain Model",permalink:"/docs/domainModel/01main"}},c={},l=[{value:"1.Get Apache RocketMQ",id:"1get-apache-rocketmq",level:2},{value:"2. Start NameServer",id:"2-start-nameserver",level:2},{value:"3. Start Broker and Proxy",id:"3-start-broker-and-proxy",level:2},{value:"4. Send and Receive Messages with tools",id:"4-send-and-receive-messages-with-tools",level:2},{value:"5. Send and Receive Messages with SDK",id:"5-send-and-receive-messages-with-sdk",level:2},{value:"6. Shutdown Servers",id:"6-shutdown-servers",level:2}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"This section will describe steps to quickly deploy a RocketMQ cluster with a single node; Commands to send and receive messages to/from it are also included as proof of work."),(0,a.kt)("admonition",{title:"SYSTEM REQUIREMENT",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"64-bit OS\uff0cLinux/Unix/macOS is recommended"),(0,a.kt)("li",{parentName:"ol"},"64-bit JDK 1.8+"))),(0,a.kt)("h2",{id:"1get-apache-rocketmq"},"1.Get Apache RocketMQ"),(0,a.kt)("admonition",{title:"Download RocketMQ",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Apache RocketMQ is distributed both in binary and source packages.  Click ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-source-release.zip"},"here")," to download Apache RocketMQ 5.0.0 source package. You may prefer ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-bin-release.zip"},"prebuilt binary package"),", which can be run directly since it has been compiled.")),(0,a.kt)("p",null,"The following instruction takes the application of RocketMQ 5.0.0 source package in Linux environment as an example in order to introduce the installation process of RocketMQ."),(0,a.kt)("p",null,"Extract the source package of RocketMQ 5.0.0, then compile and build the binary executables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ unzip rocketmq-all-5.0.0-source-release.zip\n$ cd rocketmq-all-5.0.0-source-release/\n$ mvn -Prelease-all -DskipTests -Dspotbugs.skip=true clean install -U\n$ cd distribution/target/rocketmq-5.0.0/rocketmq-5.0.0\n")),(0,a.kt)("h2",{id:"2-start-nameserver"},"2. Start NameServer"),(0,a.kt)("p",null,"After the installation of RocketMQ, start the NameServer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"### start namesrv\n$ nohup sh bin/mqnamesrv &\n \n### verify namesrv \n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Once we see ",(0,a.kt)("strong",{parentName:"p"},"'The Name Server boot success..'")," from namesrv.log, it means the NameServer has been started successfully.")),(0,a.kt)("h2",{id:"3-start-broker-and-proxy"},"3. Start Broker and Proxy"),(0,a.kt)("p",null,"After nameserver startup, we need start the broker and proxy. We recommend Local deployment mode, where Broker and Proxy are deployed in the same process. We also support cluster deployment mode. Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/deploymentOperations/01deploy"},"Deployment introduction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"### start broker\n$ nohup sh bin/mqbroker -n localhost:9876 --enable-proxy &\n\n### verify broker\n$ tail -f ~/logs/rocketmqlogs/broker_default.log \nThe broker[broker-a,192.169.1.2:10911] boot success...\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Once we see \u201cThe broker","[brokerName,ip:port]"," boot success..\u201d from broker.log, it means the Broker has been started successfully.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Thus far, a single-Master RocketMQ cluster has been deployed, and we are able to send and receive simple messages by scripts.")),(0,a.kt)("h2",{id:"4-send-and-receive-messages-with-tools"},"4. Send and Receive Messages with tools"),(0,a.kt)("p",null,"Before test with tools, we need set the nameserver address to system. like system environment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"NAMESRV_ADDR"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ export NAMESRV_ADDR=localhost:9876\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,a.kt)("h2",{id:"5-send-and-receive-messages-with-sdk"},"5. Send and Receive Messages with SDK"),(0,a.kt)("p",null,"We can also try to use the client sdk to send and receive messages, you can see more details from ",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-clients"},"rocketmq-clients"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a java project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add sdk dependency to ",(0,a.kt)("em",{parentName:"p"},"pom.xml"),", remember to replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"rocketmq-client-java-version")," with the ",(0,a.kt)("a",{href:"https://search.maven.org/search?q=g:org.apache.rocketmq%20AND%20a:rocketmq-client-java"},"latest release"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.rocketmq</groupId>\n    <artifactId>rocketmq-client-java</artifactId>\n    <version>${rocketmq-client-java-version}</version>\n</dependency> \n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create topic by mqadmin cli tools."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqadmin updatetopic -n localhost:9876 -t TestTopic -c DefaultCluster\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Java project you have created, create a program that sends messages and run it with the following code:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.rocketmq.client.apis.*;\nimport org.apache.rocketmq.client.apis.consumer.ConsumeResult;\nimport org.apache.rocketmq.client.apis.consumer.MessageListener;\nimport org.apache.rocketmq.client.apis.consumer.SimpleConsumer;\nimport org.apache.rocketmq.client.apis.message.Message;\nimport org.apache.rocketmq.client.apis.message.MessageBuilder;\nimport org.apache.rocketmq.client.apis.message.MessageView;\nimport org.apache.rocketmq.client.apis.producer.Producer;\nimport org.apache.rocketmq.client.apis.producer.SendReceipt;\nimport java.time.Duration;\nimport java.util.List;\npublic class ProducerExample {\n    public static void main(String[] args) throws ClientException {\n        String endpoint = "localhost:8081";\n        String topic = "Your Topic";\n        ClientServiceProvider provider = ClientServiceProvider.loadService();\n        ClientConfigurationBuilder builder = ClientConfiguration.newBuilder().setEndpoints(endpoint);\n        ClientConfiguration configuration = builder.build();\n        Producer producer = provider.newProducerBuilder()\n                .setTopics(topic)\n                .setClientConfiguration(configuration)\n                .build();\n        Message message = provider.newMessageBuilder()\n                .setTopic(topic)\n                .setKeys("messageKey")\n                .setTag("messageTag")\n                .setBody("messageBody".getBytes())\n                .build();\n        try {\n            SendReceipt sendReceipt = producer.send(message);\n            System.out.println(sendReceipt.getMessageId());\n        } catch (ClientException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Java project you have created, create a consumer demo program and run it. Apache RocketMQ support ",(0,a.kt)("a",{parentName:"p",href:"/docs/featureBehavior/06consumertype"},"SimpleConsumer")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/featureBehavior/06consumertype"},"PushConsumer"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.rocketmq.client.apis.*;\nimport org.apache.rocketmq.client.apis.consumer.ConsumeResult;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpression;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpressionType;\nimport org.apache.rocketmq.client.apis.consumer.PushConsumer;\n\nimport java.io.IOException;\nimport java.util.Collections;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class PushConsumerExample {\n    private static final Logger LOGGER = LoggerFactory.getLogger(PushConsumerExample.class);\n\n    private PushConsumerExample() {\n    }\n\n    public static void main(String[] args) throws ClientException, IOException, InterruptedException {\n        final ClientServiceProvider provider = ClientServiceProvider.loadService();\n        String endpoints = "localhost:8081";\n        ClientConfiguration clientConfiguration = ClientConfiguration.newBuilder()\n                .setEndpoints(endpoints)\n                .build();\n        String tag = "*";\n        FilterExpression filterExpression = new FilterExpression(tag, FilterExpressionType.TAG);\n        String consumerGroup = "Your ConsumerGroup";\n        String topic = "Your Topic";\n        PushConsumer pushConsumer = provider.newPushConsumerBuilder()\n                .setClientConfiguration(clientConfiguration)\n                .setConsumerGroup(consumerGroup)\n                .setSubscriptionExpressions(Collections.singletonMap(topic, filterExpression))\n                .setMessageListener(messageView -> {\n                    // LOGGER.info("Consume message={}", messageView);\n                    System.out.println("Consume message!!");\n                    return ConsumeResult.SUCCESS;\n                })\n                .build();\n        Thread.sleep(Long.MAX_VALUE);\n        //pushConsumer.close();\n    }\n}\n')))),(0,a.kt)("h2",{id:"6-shutdown-servers"},"6. Shutdown Servers"),(0,a.kt)("p",null,"After finishing the practice, we could shut down the service by the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqshutdown broker\nThe mqbroker(36695) is running...\nSend shutdown request to mqbroker(36695) OK\n\n$ sh bin/mqshutdown namesrv\nThe mqnamesrv(36664) is running...\nSend shutdown request to mqnamesrv(36664) OK\n")))}m.isMDXComponent=!0}}]);