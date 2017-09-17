angular组件通信是很长常见的功能,现在总结下,常见通信主要用一下三种

 1. 父组件 => 子组件
 2. 子组件 => 父组件
 3. 组件A = > 组件B
![Screenshot.png-19.9kB][1]

| 父组件 => 子组件        | 子组件 => 父组件   |  sibling  => sibling   |
| --------   | -----:  | :----:  |
| @input     | @output |        |
| setters (本质上还是@input)        |   注入父组件   |      |
| ngOnChanges() (不推荐使用)        |        |    |
| 局部变量       |        |    |
| @ViewChild()       |        |    |
| service       |   service     |  service  |
| Rxjs的Observalbe    |  Rxjs的Observalbe       |  Rxjs的Observalbe   |
|localStorage,sessionStorage   |  localStorage,sessionStorage       |  localStorage,sessionStorage   |


  [1]: http://ojefm7q7h.bkt.clouddn.com/Screenshot.png