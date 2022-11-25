const app = new Vue({
  el: '#app',
  data: {
    titulo: {
      infusiones: 'Tabla Infusiones',
      chocolates: 'Tabla Chocolates',
      leches: 'Tabla Leches'
    },
    clase:{
      infusiones: ['text-center', 'table-bordered'],
      chocolates: ['text-center','table-dark', 'table-hover', 'table-bordered'],
      leches: ['text-center','table-bordered', 'border-danger', 'text-danger'],
      sinstock: 'sinStock'
    },
    infusiones: [
      {
        nombre: "Inti Grey",
        marca: "Inti Zen",
        precio: 354.12,
        stock: true
      },
      {
        nombre: "Silencio Andino",
        marca: "Inti Zen",
        precio: 354.12,
        stock: true
      },
      {
        nombre: "Patagonia Bee",
        marca: "Inti Zen",
        precio: 384.33,
        stock: false
      }
    ],
    chocolates: [
      {
        nombre: "Chocolate 55% Cacao",
        marca: "Chocolate Colonial",
        precio: 341.45,
        stock: true
      },
      {
        nombre: "Chocolate 70% Cacao + Stevia",
        marca: "Chocolate Colonial",
        precio: 389.35,
        stock: true
      },
      {
        nombre: "Chocolate Para Taza",
        marca: "Chocolate Colonial",
        precio: 320.15,
        stock: true
      }
    ],
    leches: [
      {
        nombre: "Leche de Almendras s/Azucar",
        marca: "Cocoon",
        precio: 410.56,
        stock: false
      },
      {
        nombre: "Leche de Almendras Chocolatada",
        marca: "Cocoon",
        precio: 401.12,
        stock: true
      },
      {
        nombre: "Leche de Almendras Original",
        marca: "Cocoon",
        precio: 401.12,
        stock: true
      }
    ]
  }
})