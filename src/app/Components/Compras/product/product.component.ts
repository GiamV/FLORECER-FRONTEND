import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleProveedor } from 'src/app/Models/DetalleProveedor';
import { Producto } from 'src/app/Models/Producto';
import { ProveedorService } from 'src/app/Service/proveedor.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  urlTree: any;
  id: any;
  cat:String
  constructor(private rutaActiva: ActivatedRoute,private router:Router,private proveedorService:ProveedorService) {
    console.log(this.rutaActiva.snapshot.paramMap.get('id'));
    this.id=this.rutaActiva.snapshot.paramMap.get('id');
   }
   productos:  DetalleProveedor[]=[];
  public producto:Producto = new Producto()

  ngOnInit(): void {
    this.proveedorService.getProveedoresID(this.id).subscribe(
      productos=>{
        this.productos=productos;
        console.log(productos);
      }
    );
    
  }
  ObtenerInfo(producto:Producto):void{
    localStorage.setItem("codPro",producto.idProducto.toString());
    this.router.navigate(["productodetalle"]);
    console.log(producto);
  }


}
