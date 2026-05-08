---
outline: deep
---

# JUC 并发编程

这一部分主要整理 Java 并发编程相关内容，核心包括线程基础、锁机制、CAS、线程池、并发容器以及线程协作工具。

## 推荐整理方向

- 线程的创建方式
- `synchronized` 的原理
- `volatile` 的作用
- `synchronized` 和 `ReentrantLock` 的区别
- CAS 和 ABA 问题
- 线程池核心参数
- `CountDownLatch`、`CyclicBarrier`、`Semaphore` 的使用场景

### 什么是 Java 中的线程同步？有哪些实现方式？

线程同步是指在多线程环境下，通过一定的机制控制多个线程对共享资源的访问顺序和访问方式，保证结果的正确性，避免出现竞态条件、数据不一致等问题。它的核心不仅是“同一时刻只允许一个线程进入临界区”，还包括线程之间的协作与执行时机控制。

面试时可以这样回答：

::: tip 标准回答
Java 中的线程同步，本质上是为了保证共享资源在并发访问场景下的正确性，核心目标包括原子性、可见性和有序性。常见的实现方式主要有三类。

第一类是 `synchronized`。它是 Java 提供的内置锁，可以直接修饰实例方法、静态方法或者代码块，由 JVM 帮我们完成加锁和释放锁，写法简单，而且是可重入的，适合大多数基础同步场景。

第二类是 `Lock` 接口及其实现类，比如 `ReentrantLock`。它需要手动调用 `lock()` 和 `unlock()`，通常会配合 `try-finally` 使用。相比 `synchronized`，它的灵活性更高，支持可中断锁、超时获取锁、公平锁以及多个 `Condition` 条件队列，适合更复杂的并发控制。

第三类是 JUC 提供的原子类和并发同步工具。原子类如 `AtomicInteger`、`AtomicLong`，底层基于 CAS，适合做单个共享变量的无锁原子更新。并发同步工具如 `CountDownLatch`、`CyclicBarrier`、`Semaphore`，更适合做线程协作控制，比如等待一组线程执行完成、让多个线程同时开始，或者限制同一时刻可访问某资源的线程数量。

需要注意的是，`CountDownLatch`、`CyclicBarrier`、`Semaphore` 严格来说不是原子类，而是并发同步工具。
:::

::: tip 高频追问
如果面试官继续问 `synchronized` 和 `ReentrantLock` 的区别，可以重点回答两点：一是 `synchronized` 由 JVM 自动释放锁，使用更简单；二是 `ReentrantLock` 功能更丰富，适合需要可中断、超时控制或公平锁的场景。
:::
