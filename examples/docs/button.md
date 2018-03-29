## Button 
---

### 示例
#### 普通按钮
---
<div class="demo-display">
  <div class="layout">
    <div class="container">
         <us-button calss="us-button">default</us-button>
        <us-button calss="us-button" type='primary'>primary</us-button>
        <us-button class="us-button" type="danger">danger</us-button>
        <hr/>
        <us-button calss="us-button" size="small">default</us-button>
        <us-button calss="us-button" type='primary'size="small">primary</us-button>
        <us-button class="us-button" type="danger"size="small">danger</us-button>
        <hr/>
        <us-button calss="us-button" size="large">default</us-button>
        <us-button calss="us-button" type='primary'size="large">primary</us-button>
        <us-button class="us-button" type="danger"size="large">danger</us-button>
        <hr/>
        <us-button class="us-button" type="primary" round>胶囊按钮</us-button>
        <hr/>
        <us-button class="us-button" type="danger" block>danger</us-button>
    </div>
  </div>
  <div class="code-display">

:::demo
```html
        <us-button calss="us-button">default</us-button>
        <us-button calss="us-button" type='primary'>primary</us-button>
        <us-button class="us-button" type="danger">danger</us-button>
        <us-button calss="us-button" size="small">default</us-button>
        <us-button calss="us-button" type='primary'size="small">primary</us-button>
        <us-button class="us-button" type="danger"size="small">danger</us-button>
        <us-button calss="us-button" size="large">default</us-button>
        <us-button calss="us-button" type='primary'size="large">primary</us-button>
        <us-button class="us-button" type="danger"size="large">danger</us-button>
        <us-button class="us-button" type="primary" round>胶囊按钮</us-button>
        <us-button class="us-button" type="danger" block>danger</us-button>
    
```
:::

  </div>
</div>

### With Icon
 
<div class="demo-display">
  <div class="layout">
    <div class="container">
    </div>
  </div>
  <div class="code-display">

:::demo
```html
   
    
```
:::

  </div>
</div>

### 参数
| 参数 | 默认值  | 可取值 | Type |
| :------: | :------: | :------: | :------: |
| type | default | default primary danger | String |
| size | normal | small, normal, large | String|
| plain | false | false or true |Boolean|