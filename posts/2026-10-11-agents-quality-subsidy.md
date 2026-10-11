# 智能体会补贴好产品吗？——从 Collison 的“质量补贴”说起

北京时间 10 月 10 日早上，Stripe 的 CEO Patrick Collison 在 X 上发了一篇长帖，题目很随意：“Assorted things I've been mulling over regarding agents in the economy”（关于经济中的智能体，我最近琢磨的几件事）。[这篇帖子](https://x.com/patrickc/status/2108706907859116280)到我写作时已有约 132 万次浏览。里面最常被转引的是这一句：

> “Personal agents will, I think, act as a kind of structural subsidy for product quality. How would markets look different if individuals always spent at least 10 hours researching their purchases?”

译成中文：我认为个人智能体将成为一种对产品质量的结构性补贴。如果每个人购买前都至少研究 10 个小时，市场会有什么不同？

他的意思是：今天做出更好产品的企业，常常输在“没人知道”，大家还是继续买 ACME 公司的捕鼠器；而当智能体替每个人做功课，“在边际上，专注把产品做好将成为更有效的公司战略”。Shopify 的 CEO Tobi Lütke [转引](https://x.com/tobi/status/2109048992026009863)这句话，只评了一句“Yes, and well put”（是的，说得好）。

值得注意的是 Collison 自己留的余地。他写道：“Much of what I'm writing hinges on the assumption that personal agents will be on the consumer's side.”——我写的很多内容取决于一个假设：个人智能体站在消费者一边。

同一天，投资人 Michael Mignano 发了[另一篇帖子](https://x.com/mignano/status/2108922642833043457)。它没有回应 Collison，却恰好问到了那个假设的软肋：智能体干活要花推理成本，谁来付？按量向用户收费会随成本下降变成逐底竞争，而大多数任务又不值得逐次付费，“This is why advertising dominated as the primary business model of the past 30 years”（这就是过去 30 年广告成为主导商业模式的原因）。他的结论是：“We may be headed toward a new world of haves and have nots.”（我们可能正走向一个“有者”与“无者”的新世界。）

我觉得把这两篇放在一起读才完整。下面先说 Collison 的机制为什么在经济学上说得通，再说现实里有哪些力量在往反方向拉，最后谈我自己的判断。

## 为什么智能体可能让竞争转向质量

先看几个熟悉的场景。

订机票到最后一步，页面上跳出一个“行程保险”，你急着付款，顺手就买了。Collison 在帖子里专门举了这个例子：这类加购的价格通常远高于一份普通保单。再比如视频会员，首月几块钱，之后自动续费，很多人几个月后才发现自己一直在付钱。还有买东西，大部分人只看前几个搜索结果，懒得多比。

这三件事对应经济学里三种不同的机制。

**一是搜索成本。** Diamond（[1971](https://doi.org/10.1016/0022-0531(71)90013-5)）提出过一个有名的悖论：只要消费者每多问一家都要付出一点成本，哪怕很小，均衡价格也可能一路滑到垄断价——因为每个卖家都知道顾客懒得走开。后来 Stahl（[1989](https://ideas.repec.org/a/aea/aecrev/v79y1989i4p700-712.html)）证明，市场中“零搜索成本”的知情顾客比例越高，价格越接近边际成本。智能体做的，正是把搜索成本压到接近零，同时把知情顾客的比例往上推。

**二是隐蔽的附加价格。** Gabaix 和 Laibson（[2006](https://doi.org/10.1162/qjec.2006.121.2.505)）研究过那个机票保险式的局面：当一部分顾客“短视”、不注意附加费时，企业有动力把附加价格藏起来，而且竞争不会自动消除这种隐藏；精明的顾客被短视的顾客补贴了。如果每个人身边都有一个不会疲倦、会把总价算清楚的智能体，“短视者”变少，这个隐蔽的均衡就难以维持。

**三是惯性。** Collison 有一句话说得很准：“today, people who forget to cancel subscriptions subsidize those who don't”——今天，忘记退订的人在补贴记得退订的人。智能体替你盯着账单、自动退订，等于降低了转换成本，削弱了靠惯性吃饭的那部分利润。

这不完全是想象。Brown 和 Goolsbee（[2002](https://doi.org/10.1086/339714)）研究过美国互联网比价网站兴起的时期，发现定期寿险价格因此下降了约 8%–15%，而且只出现在被比价网站覆盖的险种里。比价网站可以看作智能体的一个很初级的前身。

把这三条合起来，就是“质量补贴”的严格含义：过去企业的优势有很大一块来自分销、注意力和惯性——你被看见、你是默认选项、顾客懒得换。智能体压低了这些成本，质量信息传递变便宜了，投在质量上的每一块钱回报就更高。广告原本是质量的一种昂贵信号，如果智能体能直接读评测、退货率和可靠性数据，这个信号的价值就会下降。这也是我前几天在《[谁在接管你的系统1？](https://ycz20120911-fish.github.io/post.html?p=2026-10-05-system1)》里讨论的问题的另一面：企业擅长收割人的系统1，而一个忠于用户的智能体，相当于给每个人配了一个不会累的系统2。

## 现实在往哪边走

问题在于，眼下的现实有不少地方在往反方向走。

**智能体开始卖广告。** OpenAI 从 2026 年 2 月 9 日起在美国的 ChatGPT 免费层和 Go 层[测试广告](https://openai.com/index/testing-ads-in-chatgpt/)，8 月已扩展到英国、日本、韩国等市场，付费的 Plus、Pro 等层级不显示广告。OpenAI 承诺“Ads do not influence the answers ChatGPT gives you”（广告不影响 ChatGPT 给你的回答）。我愿意相信这个承诺在字面上成立；但我的看法是，付费位置哪怕和答案分开，也在重新分配用户的注意力，而“付费才无广告”恰好就是 Mignano 说的“有者与无者”。

**平台自己做智能体，同时服务买卖双方。** 2025 年双 11 发布会上，淘宝推出了“AI 万能搜”等 6 款 AI 导购应用。据[新华网](http://www.news.cn/tech/20251017/57e012d41c514e16b87024ef8f01d07a/c.html)报道，平台称复杂语义下搜索相关性提升 20 个百分点，同时“商家广告 ROI 提升 12%”；阿里方面的表述是希望 AI“能解决消费痛点，也能让商家获得增长”。这样的智能体很有用，但它的目标函数里明确写着商家，和 Collison 假设的“站在消费者一边”不是一回事。

**在位平台一边挡外部智能体，一边自建。** Amazon 2025 年 11 月起诉 Perplexity，指其 Comet 浏览器智能体未表明身份就登录用户账户购物；地区法院今年 3 月颁发了初步禁令，第九巡回法院 8 月 4 日[撤销了禁令](https://law.justia.com/cases/federal/appellate-courts/ca9/26-1444/26-1444-2026-08-04.html)，认为在《计算机欺诈和滥用法》（CFAA）意义上“访问”Amazon 的是用户而不是 Perplexity，但其他诉求仍未了结。与此同时，Amazon 自己的“[Buy for Me](https://www.aboutamazon.com/news/retail/amazon-shopping-app-buy-for-me-brands)”智能体可以替用户去第三方品牌网站下单。

**智能体也会被“优化”。** 我在《[从媒人到智能体](https://ycz20120911-fish.github.io/post.html?p=2026-10-10-intermediary-matching)》里提过“智能体 SEO”。Allouah 等人（[arXiv 2508.02630](https://arxiv.org/abs/2508.02630)）在模拟市场里发现，购物智能体有明显的位置偏好，需求会集中到少数产品上，模型一更新，市场份额就会“drastically reshuffle”（剧烈洗牌）；卖方只对商品描述做“minor tweaks”（细微调整），份额就能显著提高。这意味着企业省下的广告费，可能不是投进质量，而是投进“讨好智能体”。

**连提出者本人也有利害关系。** 2025 年 9 月，Stripe 与 OpenAI 共同推出智能体结账协议 [ACP](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)，用户可以在 ChatGPT 里直接向 Etsy 商户下单，Shopify 商户“即将接入”。也就是说，Collison 和 Lütke 都是智能体购物的直接受益方。这不说明他们说错了，只是读的时候应当心里有数。

**监管这条路也不顺。** 美国联邦贸易委员会（FTC）2024 年 10 月以 3 比 2 通过“点击即可退订”规则，2025 年 7 月 8 日被第八巡回法院以程序瑕疵[整体撤销](https://law.justia.com/cases/federal/appellate-courts/ca8/24-3388/24-3388-2025-07-08.html)。退订这件事，眼下更多要靠 Rocket Money 这类私人服务。

还有一个值得记住的先例：机器人投顾。据 [Morningstar](https://www.morningstar.com/personal-finance/are-robo-advisors-still-worth-it) 2025 年的统计，16 家机器人投顾的中位费率是 0.25%，大约是人工顾问（约 1%）的四分之一；但近一年费率基本“stable”（稳定），Betterment 的高端服务则是 0.65%。入口带来的降价是真的，但降到一定程度，行业整合之后，竞争就转向了功能差异，价格不一定继续往下走。

## 质量补贴，还是路由税

把上面这些放在一起，我的判断是：智能体会不会成为“质量补贴”，不取决于技术多聪明，而取决于两个老问题——它替谁办事，谁为它付钱。这正是我在《[智能体作为中介：它替谁办事，又向谁收钱](https://ycz20120911-fish.github.io/post.html?p=2026-10-09-agent-intermediary)》里用来给中介分类的两个维度。

Collison 帖子里其实也提到了另一种可能：很多互联网公司靠“需求路由”（demand routing）赚钱，而这种生意往往建立在人们注意力短暂的基础上。如果智能体向卖方收钱来决定把需求导向谁，它省下的搜索成本就不会变成消费者剩余，而会变成一笔新的过路费。我把这种情形叫作“路由税”。

| | 质量补贴 | 路由税 |
| :---- | :---- | :---- |
| 谁为智能体付钱 | 用户（订阅、按任务） | 卖方（广告、返佣、付费入围） |
| 排序依据 | 价格、质量、适配度 | 质量之外，还有谁付了钱、谁更会“讨好”模型 |
| 消费者得到什么 | 更低总价、更少隐蔽费用 | 省了时间，但剩余部分被入口拿走 |
| 企业最划算的投入 | 改进产品、公开可核验的质量数据 | 竞价买位置、做智能体 SEO |
| 现实雏形 | 付费层个人助手、退订代理 | 广告支持的免费助手、平台内置导购 |

这张表是我的概括，不是实证结论。两列之间也不是非此即彼，现实中大多数智能体会落在中间。我真正担心的是方向：如果推理成本靠卖方补贴，智能体就会像我在“代理入口”那个框架里说的那样，沿着收入来源一步步“平台化”，最后成为一个换了面孔的新平台。届时企业竞争的仍是分销，只不过分销渠道从搜索框和货架，换成了那个默认的智能体。

## 让补贴落到质量上，需要什么条件

如果希望 Collison 描述的那个世界更可能出现，我认为至少需要四个条件：

1. **忠实义务。** 受用户委托的智能体，应当承担类似受托人的义务：推荐的依据是用户的利益，而不是卖方给了多少钱。
2. **付费关系披露。** 广告、返佣、付费入围都要明确标注，最好能让用户（或用户的另一个智能体）机读这些关系。
3. **接入与互操作。** 平台屏蔽外部智能体有时确有安全理由，但应当区分安全与排斥竞争；身份认证、可机读接口、非歧视接入是可用的工具。Amazon 与 Perplexity 的案子说明，这个问题已经进入了法院。
4. **可携带。** 用户的偏好和记忆要能带走，否则换代理的成本太高，入口就会集中，补贴落到谁手里也就由少数几家说了算。

还有几个问题，我目前没有答案，打算之后用数据去检验：

1. 在智能体渗透率高的品类里，销量对客观质量指标（评测分、退货率）的反应是否变强、对广告投入的反应是否变弱？
2. 卖方会不会反过来增加混淆——拆分 SKU、设计更复杂的条件折扣——来抵消智能体的比价能力？Ellison 和 Ellison（[2009](https://doi.org/10.3982/ECTA5708)）在比价网站上已经看到过这种反应。
3. 带广告的免费智能体与付费智能体相比，推荐结果的性价比是否系统性更差？如果是，“有者与无者”就不只是一句感叹，而是一种新的价格歧视。

## 结语

Collison 的“质量补贴”是个漂亮的说法，背后的经济学也站得住：搜索、注意力和惯性的成本下降，好产品就更容易被看见。但他自己也承认，这一切取决于智能体站在消费者一边。现实中，推理要花钱，广告是最现成的付费方，平台也在自建智能体。所以我的看法是：智能体本身不会自动补贴质量，它补贴的是为它付钱的人。规则把它留在用户这一边，它才可能是质量补贴；否则，它就是一笔新的路由税。

## 参考与延伸阅读

1. Collison, P. (2026-10-09 UTC). Assorted things I've been mulling over regarding agents in the economy. X. https://x.com/patrickc/status/2108706907859116280
2. Lütke, T. (2026-10-10). Quote post on X. https://x.com/tobi/status/2109048992026009863
3. Mignano, M. (2026-10-10). Post on X. https://x.com/mignano/status/2108922642833043457
4. Diamond, P. A. (1971). A Model of Price Adjustment. Journal of Economic Theory, 3(2), 156–168. https://doi.org/10.1016/0022-0531(71)90013-5
5. Stahl, D. O. (1989). Oligopolistic Pricing with Sequential Consumer Search. American Economic Review, 79(4), 700–712. https://ideas.repec.org/a/aea/aecrev/v79y1989i4p700-712.html
6. Gabaix, X., & Laibson, D. (2006). Shrouded Attributes, Consumer Myopia, and Information Suppression in Competitive Markets. Quarterly Journal of Economics, 121(2), 505–540. https://doi.org/10.1162/qjec.2006.121.2.505
7. Brown, J. R., & Goolsbee, A. (2002). Does the Internet Make Markets More Competitive? Evidence from the Life Insurance Industry. Journal of Political Economy, 110(3), 481–507. https://doi.org/10.1086/339714
8. Ellison, G., & Ellison, S. F. (2009). Search, Obfuscation, and Price Elasticities on the Internet. Econometrica, 77(2), 427–452. https://doi.org/10.3982/ECTA5708
9. Allouah, A., Besbes, O., Figueroa, J. D., Kanoria, Y., & Kumar, A. (2025). What Is Your AI Agent Buying? arXiv:2508.02630. https://arxiv.org/abs/2508.02630
10. OpenAI (2026). Testing ads in ChatGPT. https://openai.com/index/testing-ads-in-chatgpt/
11. 新华网（2025-10-17）. 淘宝全新发布6款AI导购应用 升级20亿商品库. http://www.news.cn/tech/20251017/57e012d41c514e16b87024ef8f01d07a/c.html
12. Amazon.com Services LLC v. Perplexity AI, Inc., No. 26-1444 (9th Cir. Aug. 4, 2026). https://law.justia.com/cases/federal/appellate-courts/ca9/26-1444/26-1444-2026-08-04.html
13. Amazon (2025). Buy for Me. https://www.aboutamazon.com/news/retail/amazon-shopping-app-buy-for-me-brands
14. Stripe (2025). Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol codeveloped with OpenAI. https://stripe.com/newsroom/news/stripe-openai-instant-checkout
15. Custom Communications, Inc. v. FTC, No. 24-3388 (8th Cir. July 8, 2025). https://law.justia.com/cases/federal/appellate-courts/ca8/24-3388/24-3388-2025-07-08.html
16. Morningstar (2025). Are Robo-Advisors Still Worth It? https://www.morningstar.com/personal-finance/are-robo-advisors-still-worth-it
17. Shahidi, P., Rusak, G., Manning, B. S., Fradkin, A., & Horton, J. J. (2025). The Coasean Singularity? Demand, Supply, and Market Design with AI Agents. NBER Working Paper No. 34468. https://www.nber.org/papers/w34468
