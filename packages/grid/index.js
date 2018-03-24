import Col from './src/col.vue'
import Row from './src/row.vue'

const grid = {
  Col,
  Row
}

Object.keys(grid).forEach(key => {
  grid[key].install = function (Vue) {
    Vue.component(grid[key].name, grid[key])
  }
})

export { Col, Row }
