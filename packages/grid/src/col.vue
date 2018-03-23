<template>
  <div class="col" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'us-col',
  props: {
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    offset: [Number, String],
    push: [Number, String],
    pull: [Number, String],
    span: [Number, String],
    order: [Number, String]
  },
  computed: {
    classes () {
      let classList = [
        {
          [`col-${this.span}`]: this.span,
          [`order-${this.order}`]: this.order,
          [`offset-${this.offset}`]: this.offset 
        }
      ]
      const sizes = ['xs', 'sm', 'md', 'lg']
      sizes.forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`col-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          let props = this[size]
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== 'span' ? `${prop}-${size}-${props[prop]}` : `col-${size}-${props[prop]}`
            )
          })
        }
      })
      return classList
    }
  }
}
</script>
