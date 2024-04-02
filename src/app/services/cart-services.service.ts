import { Injectable } from '@angular/core';

// Definimos la interfaz para representar un producto
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  // Array para almacenar los productos del carrito
  private cart: Product[] = [];

  constructor() { }

  // Crear Método para añadir un producto al carrito
  agregarProductoAlCarrito(producto: Product) {
    this.cart.push(producto);
  }

  // Crear Método para eliminar un producto del carrito por su ID
  eliminarProductoDelCarritoPorId(id: number) {
    this.cart = this.cart.filter(producto => producto.id !== id);
  }

  // Crear Método para obtener todos los productos del carrito
  obtenerTodosLosProductosDelCarrito() {
    return this.cart;
  }

  // Crear Método para calcular el precio total de los productos en el carrito
  calcularPrecioTotalDelCarrito() {
    let precioTotal = 0;
    this.cart.forEach(producto => {
      precioTotal += producto.price;
    });
    return precioTotal;
  }

  // Crear Método para vaciar el carrito
  vaciarCarrito() {
    this.cart = [];
  }

}
