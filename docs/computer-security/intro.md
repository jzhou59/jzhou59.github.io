---
sidebar_position: 1
---

# Introduction
Notes for computer security, mostly crypto related.

## 一、计算机安全介绍

### 1.1 背景
1. 传统手段： 物理方法 + 管理方法。
2. 信息时代：自动化工具 + 信息传输过程和存储过程中的保护手段。

### 1.2 定义
1. 计算机（信息）安全：维护计算机系统（包括硬件，软件，固件，数据，通信等）的四个特性，作为保护数据和组织黑客的整体性要求。
    * 保密性 confidentiality
    * 完整性 integrity
    * 可获得性 availability
    * 身份认证 authentication
2. 网络安全：在分布式系统的传输过程中保护数据。
3. 互联网安全：在不同网络之间通信过程中保护数据。

### 1.3 安全架构
来自ITU(International Telecommunication Union)-T X.800 制定的OSI(Open System Interconnect)安全架构。

### 1.4 关注要点
1. 预防 deter
2. 检测 detect
3. 阻止 prevent
4. 纠正 correct

### 1.5 安全（攻击）等级
1. 低 对系统造成有限的不良反应。
2. 中 对系统造成严重的不良反应。
3. 高 对系统造成灾难性的不良反应。

### 1.6 面临的挑战
1. 复杂，需要常规的监管，可能对系统造成负担。
2. 潜在风险的识别，不可检测（除非受到攻击），遭受没有考虑到的攻击“马后炮”。
3. 需要非直觉的判断，算法，应用场景的设置。




## 二、计算机安全角度
主要分为三个角度：攻击，机制，服务。
服务采取多种机制嵌在系统中用于抵抗攻击。
```
graph LR
Attack-->System
Mechanism-->Service
Service-->System
```
### 2.1 攻击角度
分为潜在威胁和已有攻击，但通常不区分指代。
攻击的形式有主动攻击和被动攻击。
攻击内容可以分类为四种：
1. 中断 interruption
2. 拦截 interception
3. 更改 modification
4. 伪造 fabrication

![攻击角度.png](https://upload-images.jianshu.io/upload_images/23770791-b21b4327fef3aeae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.1.1 主动攻击
即对应到攻击内容的 [1][3][4]，具体的形式有伪造数据，更改数据，重发数据，对某一个特定目标实施拒绝访问攻击等等。
常见的主动攻击场景：
1. 中断：拒绝访问。
2. 更改：病毒，网站入侵，外部渗透，破坏网站，僵尸网络，破坏网络。
3. 伪造：主机挟持，无限网络广播，即时消息群发，公共网络占用。

#### 2.1.2 被动攻击
即对应到攻击内容的[2]，具体形式有获取并浏览数据，分析流量获取信息流模式、通信双方以及双方的通信频率和时长等。
常见的被动攻击场景：
1. 拦截：盗取数据，盗取硬件资源，盗取知识产权；金融诈骗，电信诈骗；捕获密码；暴露DNS。

### 2.2 服务角度
服务的目标：强化数据处理和传输系统，使用安全机制防范攻击。
服务的特征：
1. 完整性 integrity
2. 身份认证 authentication
3. 保密性 confidentiality
4. 不可重置 non-repudiation
5. 访问控制 access control
6. 可获得性 availability

### 2.3 机制角度
安全机制的目标是预防检测和恢复，一个机制可能值对应某一个攻击的某个方面，争对一个攻击或者多个攻击，安全服务综合地使用多个安全机制。
协议层具体机制：
1. 加密
2. 数字签名
3. 访问控制
4. 数据完整性检测
5. 身份认证系统
6. 流量填充
7. 路由控制
8. 公证系统
9. ...

拓展机制：
1. 可信功能
2. 安全标签
3. 事件检测
4. 安全审核
5. 安全恢复
6. ...

## 三、计算机安全模型
### 3.1 数据传输模型
![数据传输模型.png](https://upload-images.jianshu.io/upload_images/23770791-168575b81e9d6b9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 3.2 访问控制模型
![访问控制模型.png](https://upload-images.jianshu.io/upload_images/23770791-5c7def6ac7c59fd3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

