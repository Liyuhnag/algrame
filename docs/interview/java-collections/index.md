---
outline: deep
---

# Java 集合类

这一部分建议围绕 `List`、`Set`、`Map` 三大体系整理，重点覆盖底层结构、扩容机制、线程安全问题以及常见集合之间的选型。

## 推荐整理方向

- `ArrayList` 和 `LinkedList` 的区别
- `HashMap` 的底层结构
- `HashMap` 和 `ConcurrentHashMap` 的区别
- `HashSet` 如何保证元素不重复
- `TreeMap` 和 `HashMap` 的区别

### HashMap 为什么线程不安全？

HashMap 的结构修改没有同步保护，多线程同时 `put` 时可能出现数据覆盖、链表或树结构状态不一致、扩容期间数据迁移异常等问题。面试回答时不要只说“线程不安全”，要说清楚问题来自并发写和扩容迁移。

::: tip 回答思路
先说明 HashMap 适合单线程或外部同步场景，再对比 ConcurrentHashMap 的节点级并发控制和更安全的并发访问能力。
:::
