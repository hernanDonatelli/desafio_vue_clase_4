Vue.component('componente-productos',{
  props: {
    nombre: String,
    marca: String,
    precio: Number,
    stock: Boolean,
    clase: String
  },
  template: /*html*/`
    <tr>
      <td>{{nombre}}</td>
      <td>{{marca}}</td>
      <td>{{precio}}</td>
      <td>{{stock ? 'Hay stock' : 'Sin stock'}}</td>
    </tr>
  `
})