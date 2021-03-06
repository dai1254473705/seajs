js-util-lib
==== 

> JavaScript 工具函数库

## Install

```sh
npm install --save js-util-lib
```

or

```sh
<script src="../../js.utils.lib.js"></script>
```

### 1. [jsUtilLib.query](https://github.com/dai1254473705/js-util-lib/tree/dev/src/query/index.js)

> + 获取当前浏览器url上的参数，或者指定链接的参数
> + 可以获取全部参数，或者指定参数

+ <a href="#query.getAllParams">jsUtilLib.query.getAllParams&nbsp;--&nbsp;获取url全部参数</a>
+ <a href="#query.getQueryString">jsUtilLib.query.getQueryString&nbsp;--&nbsp;获取url某个参数</a>

### 2. [jsUtilLib.validata](https://github.com/dai1254473705/js-util-lib/tree/dev/src/validata/index.js)

> + 校验

+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isNull&nbsp;--&nbsp;是否为空||undefined || null</a>
+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isString&nbsp;--&nbsp;是否是字符串</a>
+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isMobile&nbsp;--&nbsp;判断是否是手机号</a>
+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isTelephone&nbsp;--&nbsp;判断是否是座机号</a>
+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isIdCardNum&nbsp;--&nbsp;判断是否是身份证号</a>
+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isBankCardNum&nbsp;--&nbsp;判断是否是银行卡号</a>
+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isEmail&nbsp;--&nbsp;判断是否是邮箱</a>
+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isEnString&nbsp;--&nbsp;判断是不是都是字母</a>
+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isZhString&nbsp;--&nbsp;判断是不是都是中文</a>
+ <a href="#jsUtilLib.validata">jsUtilLib.validata.isUrl&nbsp;--&nbsp;判断是不是url地址</a>

### 3. [jsUtilLib.dataMask](https://github.com/dai1254473705/js-util-lib/tree/dev/src/dataMask/index.js)

> + 脱敏处理

+ <a href="#jsUtilLib.dataMask">jsUtilLib.dataMask.mobile&nbsp;--&nbsp;手机号脱敏</a>
+ <a href="#jsUtilLib.dataMask">jsUtilLib.dataMask.idCardNum&nbsp;--&nbsp;身份证号脱敏</a>
+ <a href="#jsUtilLib.dataMask">jsUtilLib.dataMask.bankCardNum&nbsp;--&nbsp;银行卡号脱敏</a>
+ <a href="#jsUtilLib.dataMask">jsUtilLib.dataMask.telephone&nbsp;--&nbsp;固定电话脱敏</a>
+ <a href="#jsUtilLib.dataMask">jsUtilLib.dataMask.chineseName&nbsp;--&nbsp;中文姓名脱敏</a>
+ <a href="#jsUtilLib.dataMask">jsUtilLib.dataMask.email&nbsp;--&nbsp;邮箱脱敏</a>

### 4. [jsUtilLib.image](https://github.com/dai1254473705/js-util-lib/tree/dev/src/image/index.js)

> + 图片处理

+ <a href="#jsUtilLib.image.base64">jsUtilLib.image.base64&nbsp;--&nbsp;图片转base64</a>
+ <a href="#jsUtilLib.image.size">jsUtilLib.image.size&nbsp;--&nbsp;获取图片宽高</a>

### 5. [jsUtilLib.guid](https://github.com/dai1254473705/js-util-lib/tree/dev/src/guid/index.js)

> + 生成GUID || UUID (随机生成，不能保证绝对没有重复)

+ <a href="#jsUtilLib.guid.get">jsUtilLib.guid.get&nbsp;--&nbsp;生成GUID</a>

### 5. [jsUtilLib.device](https://github.com/dai1254473705/js-util-lib/tree/dev/src/device/index.js)

> + 获取设备信息

+ <a href="#jsUtilLib.device.os">jsUtilLib.device.os&nbsp;--&nbsp;获取当前系统信息</a>
+ <a href="#jsUtilLib.device.typeos">jsUtilLib.device.type&nbsp;--&nbsp;获取当前设备类型（移动端和pc端）</a>

## 使用方法：

## 1.jsUtilLib.query
---
### <h3 id="query.getAllParams">1. getAllParams<h3> 

> `jsUtilLib.query.getAllParams(url:String,cover:Boolean);`

+ `url` 选填，默认为当前页面的url
+ `cover` 默认为true, true 时会覆盖相同的key，false时会保留所有参数
+ 如：
+   url = 'http://js/utils/lib?aaa=1&bbb=3&aaa=4'
+   if `cover = true` :
+      {aaa:4,bbb=3}
+   if `cover = false` :
+      {aaa:[1,4],bbb=3}
	
```sh
jsUtilLib.query.getAllParams(null,true);
// 或者
jsUtilLib.query.getAllParams();
	
```
	
### <h3 id="query.getQueryString">2.getQueryString<h3> 
 
> `jsUtilLib.query.getQueryString(name:String<required>,url:String);`

```sh
/**
 * Getting parameters from URL or custom string;
 * @param { String } `name` The key corresponding to the value you want;
 * @param { String } `url` 
 * @example :
 *  url = 'http://js/utils/lib?aaa=1&bbb=3&aaa=4'
 *  this.getQueryString('aaa'); // 4
 *  this.getQueryString('aaa','your custom url'); 
 */
jsUtilLib.query.getQueryString('sdf');
```

## 2.jsUtilLib.validata
---
### <h3 id="jsUtilLib.validata">jsUtilLib.validata<h3>

> + `jsUtilLib.validata.isNull(str:String<required>);`
> + `jsUtilLib.validata.isString(str:String<required>);`
> + `jsUtilLib.validata.isMobile(str:String<required>);`
> + `jsUtilLib.validata.isTelephone(str:String<required>);`
> + `jsUtilLib.validata.isIdCardNum(str:String<required>);`
> + `jsUtilLib.validata.isBankCardNum(str:String<required>);`
> + `jsUtilLib.validata.isEmail(str:String<required>);`
> + `jsUtilLib.validata.isEnString(str:String<required>);`
> + `jsUtilLib.validata.isZhString(str:String<required>);`
> + `jsUtilLib.validata.isUrl(str:String<required>);`

```sh
    console.log('是否为空',jsUtilLib.validata.isNull('')); // 是否为空 true
    console.log('是否是字符串',jsUtilLib.validata.isString('')); // 是否是字符串 true
    console.log('判断是否是手机号',jsUtilLib.validata.isMobile('')); // 判断是否是手机号 false
    console.log('判断是否是座机号',jsUtilLib.validata.isTelephone('')); // 判断是否是座机号 false
    console.log('判断是否是身份证号',jsUtilLib.validata.isIdCardNum('')); // 判断是否是身份证号 false
    console.log('判断是否是银行卡号',jsUtilLib.validata.isBankCardNum('')); // 判断是否是银行卡号 false
    console.log('判断是否是邮箱',jsUtilLib.validata.isEmail('')); // 判断是否是邮箱 false
    console.log('判断是不是都是字母',jsUtilLib.validata.isEnString('')); // 判断是不是都是字母 false
    console.log('判断是不是都是中文',jsUtilLib.validata.isZhString('')); // 判断是不是都是中文 false
    console.log('判断是不是url地址',jsUtilLib.validata.isUrl('')); // 判断是不是url地址 false
```

## 3.jsUtilLib.dataMask
---
### <h3 id="jsUtilLib.dataMask">jsUtilLib.dataMask<h3>

> + `jsUtilLib.dataMask.mobile(str:String<required>);`
> + `jsUtilLib.dataMask.idCardNum(str:String<required>);`
> + `jsUtilLib.dataMask.bankCardNum(str:String<required>);`
> + `jsUtilLib.dataMask.telephone(str:String<required>);`
> + `jsUtilLib.dataMask.chineseName(str:String<required>);`
> + `jsUtilLib.dataMask.email(str:String<required>);`

```sh
    console.log('手机号',jsUtilLib.dataMask.mobile('13019219923')); // 手机号 130****9923
    console.log('座机',jsUtilLib.dataMask.telephone('010-51662227')); // 座机 ****2227
    console.log('身份证号',jsUtilLib.dataMask.idCardNum('130184188202121212'));//身份证号 ************1212
    console.log('银行卡号',jsUtilLib.dataMask.bankCardNum('6217002260009086123'));// 银行卡号 621700**********6123
    console.log('中文名',jsUtilLib.dataMask.chineseName('李啊地方'));// 中文名 李*方
    console.log('邮箱',jsUtilLib.dataMask.email('abcd@qq.com'));// 邮箱 a**@qq.com
```

## 4.jsUtilLib.image
---
### <h3 id="jsUtilLib.image.base64">jsUtilLib.image.base64<h3>

> + `jsUtilLib.image.base64(url:String<required>,callback:Function<required>,quality:Float||Number);`

```sh
// 获取图片base64
jsUtilLib.image.base64('../../img/demo.jpg',function(error,data){
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
},1);
```
### <h3 id="jsUtilLib.image.size">jsUtilLib.image.size<h3>

> + `jsUtilLib.image.size(url:String<required>,callback:Function<required>);`

```sh
// 获取图片宽高
jsUtilLib.image.size('../../img/demo.jpg',function(error,data){
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
},1);
```
## 4.jsUtilLib.guid

---
### <h3 id="jsUtilLib.guid.get">jsUtilLib.guid.get<h3>

```sh
console.log('guid:',jsUtilLib.guid.get()); // guid: a91a7228-da1b-4026-af47-232c0dcd9a2a
```

### 5. jsUtilLib.device

---
### <h3 id="jsUtilLib.device.os">jsUtilLib.device.os<h3>

> + 获取当前系统信息  
> + 返回值：ios|android|windowphone|windows|macos|''

```sh
console.log('系统信息',jsUtilLib.device.os()); //系统信息 windows
```

### <h3 id="jsUtilLib.device.type">jsUtilLib.device.type<h3>

> + 获取当前设备类型（移动端和pc端）
> + 返回值：mobile|pc|''

```sh
console.log('pc还是移动端',jsUtilLib.device.type());//pc还是移动端 pc
```