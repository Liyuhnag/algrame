---
outline: deep
---

# MySQL

MySQL 问题建议围绕索引、事务、锁、MVCC、执行计划和慢 SQL 优化组织。

## 推荐整理方向

- 索引底层结构和回表
- 最左前缀原则
- 事务的四大特性和隔离级别
- MVCC 的实现原理
- InnoDB 行锁、间隙锁、临键锁
- 慢 SQL 排查与优化

::: warning 高频追问
解释 MVCC 时需要把 undo log、ReadView、事务隔离级别放在一起讲，否则容易只背概念。
:::
