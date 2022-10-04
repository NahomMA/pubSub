# pubSub
This post is about the implementation of MQTT protocol for embedded devices: MQTT is bassed on the publish-subscribe model. There is also a broker server to enable this messagenging from publisher to subscriber. you can look at the figure below for more reference.


![alt text](https://assets.emqx.com/images/a6baf485733448bc9730f47bf1f41135.png?imageMogr2/thumbnail/1520x)

In this messaging application, information providers (publishers) have no direct link to subscribers, but the interactions between publishers and subscribers are controlled by brokers.

In a publish/subscribe system, a publisher does not need to know who uses the information (publication) that it provides, and a subscriber does not need to know who provides the information that it receives as the result of a subscription. Publications are sent from publishers to the broker, subscriptions are sent from subscribers to the broker, and the broker forwards the publications to the subscribers.
 
The broker ensures that messages are delivered to the correct subscribers. A typical publish/subscribe system has more than one publisher and more than one subscriber. But in this small project, there is only one publisher and one subscriber: You can expand it more as wish.

The publisher generates a message that it wants to publish and defines the topic of the message. A subscriber registers a request for a publication by specifying the topic (or topics) of the published messages that it is interested in. Subscriptions to the broker might include the following information:
   a. The subscription point from which it wants to receive publications.
   b. The content filter should be applied to the published message.
   c. The name of the queue (known as the subscriber queue) on which publications that match the criteria selected are placed. This queue can be a cluster queue so that publications can be distributed to clustered subscribers.



## Requirements for this project are:
### 1. Familiarity with nodejs:

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications
Visit the  Node.js website for installation and also how to get started with it.

#### 2. Raspberry pi
You can go through online searching on how to set up Raspberry pi, configure wifi and install node js on it. I have a separate GitHub repo: you can check on it. 

### 3. Node Package Manager installed on your computer and raspberry pi
  You can use either NPM or YARN for JS package management but for this specific project, I used NPM for this specific project. NPM is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages called the npm registry.

### 4. WIFI/LAN network:
I assumed your embedded device ( raspberry pi) can be a publisher or subscriber in the same network as your computer and the broker server is running on your computer. You can even access your server from the browser.


