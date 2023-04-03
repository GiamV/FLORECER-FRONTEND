import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-listar-pro',
  templateUrl: './listar-pro.component.html',
  styleUrls: ['./listar-pro.component.css']
})
export class ListarProComponent implements OnInit {

  rows = [];

  selected = [];

  columns: any[] = [{ name: 'producto' }, { name: 'stock' }, { name: 'precio' },  { name: 'precioCompra' }];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  productos:Producto[]=[];
  productoss:Producto[]=[];
  productosfiltro:Producto[]=[];
  constructor(private rutaActiva: ActivatedRoute,private router:Router, private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos=>{
        this.productos=productos;

        console.log(productos);
      }
    );
  }
  Delete(producto:Producto){
    this.productoService.deleteProductoEstado(producto)
    .subscribe(data=>{
      this.productoService.getProductos().subscribe(
        productos=>{
          this.productos=productos;
          console.log(productos);
        }
      );
    })
  }
  Editar(producto:Producto):void{
    localStorage.setItem("idProducto",producto.idProducto.toString());
    this.router.navigate(["cliente/cliente-editproducto"]);
  }
  onSelect({ productoss }) {
    console.log('Select Event', productoss, this.productoss);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  // avisar(){
  //   for( let pro of this.productos){
  //     if(pro.categoria.idCategoria!=3){
  //       this.productosfiltro.push(pro);
  //     }
  //   }
  // }

}
