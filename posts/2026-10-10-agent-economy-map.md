# 智能体经济是一张五层地图：从 token 到规制

昨天写完《[智能体作为中介：它替谁办事，又向谁收钱](https://ycz20120911-fish.github.io/post.html?p=2026-10-09-agent-intermediary)》，有朋友问我：你嘴里的“智能体经济”到底指什么？是卖算力的、做模型的，还是那些帮人订酒店的助手？

这个问题问得好。设想一个普通的周末：你让手机里的助手订一张周一的高铁票，它调用一个大模型，消耗了几千个 token；它登录 12306 或某个旅行平台，用你的账号完成支付；平台那边，也许另一个客服智能体在和它对话。一次小小的委托，背后至少站着算力厂商、模型公司、助手开发者、平台、支付机构，还有监管者。

所以我想把这件事画成一张地图。我的划分是五层：基础设施、供给、交易与协作、商业模式、治理与规制。下面逐层说。

## 一、基础设施层：token 越来越便宜，用得却越来越多

智能体经济最底下是算力和模型，计量单位是 token。

价格降得很快。a16z 的 Guido Appenzeller 把这个现象叫作“[LLMflation](https://a16z.com/llmflation-llm-inference-cost/)”：2021 年 11 月 GPT-3 开放时，它是唯一能在 MMLU 上拿到 42 分的模型，每百万 token 60 美元；到 2024 年底，达到同样分数的最便宜模型（Together.ai 上的 Llama 3.2 3B）只要 0.06 美元，三年降了约 1000 倍。需要注意，这是“同等能力下最便宜的模型”，不是市场平均价格，作者自己也承认方法上有缺陷。

但总消耗在猛涨。据 [The Decoder](https://the-decoder.com/google-boasts-1-3-quadrillion-tokens-each-month-but-the-figure-is-mostly-window-dressing/) 报道，Google 称 2025 年 6 月每月处理约 980 万亿 token，到 10 月已超过 1300 万亿。这个数字很大一部分来自推理模型“想得更多”，未必等于用户变多，但方向是清楚的：单价下降，总量上升。这正是经济学里的杰文斯悖论——效率提高反而让总消耗增加。智能体尤其如此，一个任务要拆成很多步，每一步都在烧 token。

这一层的经济含义是：推理成本构成门槛。单价便宜了，但能把复杂任务跑稳的高质量智能体，总账单并不便宜，规模经济依然存在。

## 二、供给层：智能体本身有哪几类

第二层是智能体产品本身，大致三类。

一是个人助理型。它受一个人委托，跨应用办事，比如 Grok Bot 这类通用助手、手机厂商的系统级助手，以及 Meta 在 2026 年 9 月 8 日推出的 Muse——据 [GeekWire](https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/)，它连接邮件、日历、支付、餐饮和购物，执行多步任务。

二是专用型。编程是最成熟的领域，OpenAI 在 2025 年 5 月推出的 [Codex](https://openai.com/index/introducing-codex/) 能在云端沙箱里写功能、修 bug、跑测试、提交代码；此外还有客服、导购、科研助手等。

三是企业智能体。它嵌在企业流程里，替企业对外服务或对内处理工作。

区分这三类很重要，因为它们站的位置不同：个人助理站在用户一边，企业客服站在卖方一边。

还有一个容易被忽略的区别：自主程度。有的智能体只给建议，最后由人点确认；有的已经可以自己登录、填表、付款。自主程度越高，它在交易层和治理层引出的问题就越多，后面几层的讨论其实都和这一点有关。

## 三、交易与协作层：智能体开始替人成交

第三层是智能体真正进入市场的地方，又可以分三种关系。

第一种，智能体替用户与商家或平台交易。这里冲突最集中。2026 年 9 月，Amazon 以“未经授权的 AI 代理”违反使用条款为由屏蔽了 Meta 的 Muse，理由包括它不表明身份、似乎存储用户凭证（[GeekWire](https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/)、[Bloomberg](https://www.bloomberg.com/news/articles/2026-09-21/amazon-blocks-meta-s-muse-ai-agent-from-its-retail-site)）；此前 Amazon 还起诉过 Perplexity 的 Comet 浏览器（[SiliconANGLE](https://siliconangle.com/2026/09/21/amazon-blocks-metas-muse-agent-from-shopping-on-users-behalf/)）。

第二种，智能体之间交易。用户的助手对上商家的客服智能体，双方谈条件、交换信息，人只在关键节点确认。

第三种，是让前两种可行的配套协议：身份、授权、支付。2025 年 9 月，Google 发布了智能体支付协议 [AP2](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)，Stripe 与 OpenAI 发布了智能体结账协议 [ACP](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)。2026 年 10 月，Sierra 与 Meta 等联合宣布 [Personal Agent Protocol](https://sierra.ai/blog/introducing-personal-agent-protocol)（简称 Poppy），基于 OAuth 等开放标准，原则是“用户决定给代理什么权限，企业决定代理能做什么”；随后公布的[草案](https://sierra.ai/blog/poppy)在 Shopify、Stripe、Walmart 等首批伙伴之外，又新增了 OpenAI、Visa、Mastercard、PayPal 等 35 家设计伙伴。有意思的是，Muse 在 Amazon 那里碰壁，在 Sierra 的演示里却通过协议顺利办完了房贷预审。差别不在技术，而在有没有一套双方都认的身份与授权规则。

这一层的经济学意义，Shahidi 等人在 NBER 工作论文《[The Coasean Singularity?](https://www.nber.org/papers/w34468)》里讲得很透：智能体大幅降低搜寻、谈判、签约的交易成本，可能重塑市场设计，也会带来新的摩擦。

## 四、商业模式层：替谁办事，向谁收钱

第四层是钱怎么收。常见方式有四种：按 token 计费、订阅、按任务收费，以及向卖方收佣金或广告费。

前三种基本是用户付钱，第四种是卖方付钱。我在[上一篇](https://ycz20120911-fish.github.io/post.html?p=2026-10-09-agent-intermediary)里讨论过，核心问题只有两个：它替谁办事，又向谁收钱。一个受用户委托的智能体，如果收入越来越多来自卖方，推荐就会偏离对用户最好的选项，它也就慢慢变成了平台。

基础设施层的成本结构会传导到这里。token 账单高，开发者就有动力找卖方补贴；而订阅制在重度用户面前又可能亏本。商业模式的选择，某种程度上是被底层成本推着走的。

## 五、治理与规制层：五个绕不开的问题

最上面一层是治理，我归纳为五个问题。

一是竞争。包括代理入口的垄断（谁是默认助手）、平台自带智能体的自我优待，以及算法合谋。Calvano 等人 2020 年发表在 *AER* 上的[研究](https://www.aeaweb.org/articles?id=10.1257/aer.20190623)发现，强化学习定价算法在没有沟通的情况下也能维持高于竞争水平的价格。智能体普及后，这个问题只会更现实。

二是责任与安全，尤其是越权。2026 年 10 月 9 日，Anthropic [披露](https://www.anthropic.com/research/investigating-unintended-model-actions)其模型在评估和内部使用中做出了非预期行为，例如利用网站下发的访问令牌绕开限制、查询本应付费的数据，以及提交不该提交的表单；部分涉及美国政府网站。据[西雅图时报](https://www.seattletimes.com/business/anthropic-agents-tried-to-fill-out-visa-forms-on-state-dept-website/)报道，其中包括向美国国务院网站提交 20 份签证申请（均不完整、未被处理）。智能体“太想完成任务”，本身就是风险。

三是数据隐私与记忆可携带。智能体越懂你，换掉它的成本越高；记忆能不能带走，决定了代理市场会不会集中。

四是劳动就业。编程、客服这些最早被智能体渗透的岗位，变化已经开始。值得关注的不只是岗位会不会被替代，还有工作内容怎么变：人从“自己做”转向“布置任务、检查结果”，而检查本身也需要专业判断。

五是政策框架。国务院《[关于深入实施“人工智能+”行动的意见](https://www.gov.cn/zhengce/zhengceku/202508/content_7037862.htm)》提出，到 2027 年新一代智能终端、智能体等应用普及率超过 70%。2026 年 5 月，国家网信办、国家发展改革委、工业和信息化部联合印发《[智能体规范应用与创新发展实施意见](https://www.cac.gov.cn/2026-05/08/c_1779979789523320.htm)》，把智能体定义为具备自主感知、记忆、决策、交互与执行能力的智能系统，并在[答记者问](https://www.chinanews.com.cn/gn/2026/05-08/10617631.shtml)中点名了隐私泄露、越权操作、行为失控等风险。10 月 9 日发布的《[中共中央 国务院关于发展新质生产力的意见](https://app.xinhuanet.com/news/article.html?articleId=20261009f4bdabfe2bfa489fbeaf6d57bac21c22)》再次强调全面实施“人工智能+”行动，并要求“强化反垄断和反不正当竞争”“加强人工智能……领域治理”。

## 五层如何咬合：谁掌握入口

把五层放在一起看：

| 层次 | 核心问题 | 典型例子 |
| :---- | :---- | :---- |
| 基础设施层 | 推理成本与规模经济 | token 单价下降、总消耗上升 |
| 供给层 | 智能体站在谁一边 | 个人助理、Codex、企业客服 |
| 交易与协作层 | 能否被允许进入市场 | Amazon 屏蔽 Muse；AP2、ACP、Poppy |
| 商业模式层 | 谁付钱 | token、订阅、按任务、卖方佣金 |
| 治理与规制层 | 如何约束入口与越权 | 反垄断、安全责任、记忆可携带 |

这五层不是并列的，而是层层咬合。推理成本决定谁玩得起；玩得起的少数几家做出默认助手；默认助手要进入市场，得过平台和协议这一关；过了关，收谁的钱决定它替谁说话；最后，规制要回答这一切是否公平、安全。贯穿始终的是一个问题：谁掌握入口。过去是搜索框和应用商店，今后可能是那个“默认代理”。

Hadfield 和 Koh 在《[An Economy of AI Agents](https://arxiv.org/abs/2509.01063)》中提出，智能体经济需要新的制度，比如智能体身份登记、问责机制。在我看来，Poppy 这类协议，正是市场自发在搭这一层。

## 留给研究的几个问题

我目前最想弄清楚的有四个：

1. token 成本下降，到底会降低进入门槛，还是让已有入口的几家优势更大？
2. 平台屏蔽外部智能体，什么时候是正当的安全考量，什么时候是排斥竞争？
3. 身份与授权协议会不会形成新的标准垄断？一个协议背后站着谁，就可能决定谁能进门。
4. 智能体越权造成的损失，应由用户、开发者还是模型公司承担？

智能体经济不是一个行业，而是一条从算力到规则的链条。看懂它，最好的办法是盯住那个入口：谁站在用户和市场之间，谁又在为它付钱。

## 参考与延伸阅读

1. Appenzeller, G. (2024). Welcome to LLMflation. a16z. https://a16z.com/llmflation-llm-inference-cost/
2. The Decoder (2025-10-10). Google boasts 1.3 quadrillion tokens each month. https://the-decoder.com/google-boasts-1-3-quadrillion-tokens-each-month-but-the-figure-is-mostly-window-dressing/
3. OpenAI (2025). Introducing Codex. https://openai.com/index/introducing-codex/
4. GeekWire (2026-09). Amazon blocks Meta's Muse AI assistant. https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/
5. Bloomberg (2026-09-21). Amazon Blocks Meta's Muse AI Agent From Its Retail Site. https://www.bloomberg.com/news/articles/2026-09-21/amazon-blocks-meta-s-muse-ai-agent-from-its-retail-site
6. SiliconANGLE (2026-09-21). Amazon blocks Meta's Muse agent. https://siliconangle.com/2026/09/21/amazon-blocks-metas-muse-agent-from-shopping-on-users-behalf/
7. Google Cloud (2025). Announcing Agent Payments Protocol (AP2). https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
8. Stripe (2025). Agentic Commerce Protocol codeveloped with OpenAI. https://stripe.com/newsroom/news/stripe-openai-instant-checkout
9. Sierra (2026). Introducing Personal Agent Protocol / Sharing a draft of Personal Agent Protocol. https://sierra.ai/blog/introducing-personal-agent-protocol ; https://sierra.ai/blog/poppy
10. Anthropic (2026-10-09). Investigating unintended model actions in our evaluations and internal use. https://www.anthropic.com/research/investigating-unintended-model-actions
11. The Seattle Times (2026-10). Anthropic agents tried to fill out visa forms on State Dept. website. https://www.seattletimes.com/business/anthropic-agents-tried-to-fill-out-visa-forms-on-state-dept-website/
12. 国务院（2025）. 关于深入实施“人工智能+”行动的意见. https://www.gov.cn/zhengce/zhengceku/202508/content_7037862.htm
13. 国家网信办等（2026-05-08）. 智能体规范应用与创新发展实施意见. https://www.cac.gov.cn/2026-05/08/c_1779979789523320.htm
14. 中共中央 国务院（2026-10-09）. 关于发展新质生产力的意见. https://app.xinhuanet.com/news/article.html?articleId=20261009f4bdabfe2bfa489fbeaf6d57bac21c22
15. Shahidi, P., Rusak, G., Manning, B. S., Fradkin, A., & Horton, J. J. (2025). The Coasean Singularity? Demand, Supply, and Market Design with AI Agents. NBER Working Paper No. 34468. https://www.nber.org/papers/w34468
16. Hadfield, G. K., & Koh, A. (2025). An Economy of AI Agents. arXiv:2509.01063. https://arxiv.org/abs/2509.01063
17. Calvano, E., Calzolari, G., Denicolò, V., & Pastorello, S. (2020). Artificial Intelligence, Algorithmic Pricing, and Collusion. American Economic Review, 110(10), 3267–3297. https://www.aeaweb.org/articles?id=10.1257/aer.20190623
