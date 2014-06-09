# Tech Stack

* JavaScript
* mocha

## 第四问

### [DONE]武器只有一个特性, 伤害是掉血
* 战士 fight 普通人, 普通人 fight 战士
* 战士 fight 战士

### [TODO]武器特性是否触发是随机的

### [TODO]武器只有一个特性, 伤害不是掉血
* 战士 fight 普通人, 普通人 fight 战士
* 战士 fight 战士
 
### [TODO]武器有多个特性
* 战士 fight 普通人, 普通人 fight 战士
* 战士 fight 战士


## 第三问

###相比第二问的主要修改

* A src/warrior.js 加入继承关系，复写attack方法，同样计算attackeeInjury的时候加入了判断
# A test/testWarrior.js 增加了三种带有战士的角色对战的测试用例，测试每次攻击后对blood的产生的影响
* M src/fightDetail.js 生成字符串的过程中加入了判断
* M src/player.js 计算attackeeInjury的时候加入了判断
# M test/testGame.js 增加了带职业信息的测试用例，测试了四种不同角色的对战



# 第一问

* 对打游戏
* 有两个人，下称玩家
* 每个人都有血值
* 有攻击力
* 没有防御力
* 有名字
* 可以互相对打
* 游戏开始，双方互殴，你一下我一下，直到一人死亡，打印出xx被打败了。
* 只需要写核心逻辑，不需要考虑界面。
 
输出

    李四被打败了.


##Feedback

```

* 封装性的练习，不写set/get，假定属性只能被本类访问
* 把view和流程传进去
* printer的参数，最好是一个抽象的知识，而不是domain biz term(player)
* 循环和循环里的操作应该是分开的

```    