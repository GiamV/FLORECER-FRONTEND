import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Service/producto.service';
@Component({
  selector: 'app-det-product',
  templateUrl: './det-product.component.html',
  styleUrls: ['./det-product.component.css']
})
export class DetProductComponent implements OnInit {
  productos:Producto[]=[];
  producto:Producto = new Producto();
  constructor(private router:Router, private productoService:ProductoService) { }

  ngOnInit(): void {
  }
  Editar(){
    let codPro=localStorage.getItem("codPro"); 
    this.productoService.getProductoId(+codPro!)
    .subscribe(data=>{
      this.producto=data;
    })
  }

}
