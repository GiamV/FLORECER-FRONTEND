import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';


@Component({
  selector: 'app-hamburguesa',
  templateUrl: './hamburguesa.component.html',
  styleUrls: ['./hamburguesa.component.css']
})
export class HamburguesaComponent implements OnInit {
  urlTree: any;
  id: any;
  cat:String

  constructor(private rutaActiva: ActivatedRoute,private router:Router, private productoService:ProductoService) {
    this.urlTree = this.router.parseUrl(this.router.url);

    this.id = this.urlTree.queryParams['id'];
   }

  productos:Producto[]=[];
  public producto:Producto = new Producto()


  ngOnInit(): void {
    if(this.id==1){
      this.cat="Niños";
    }
    console.log(this.id)
    this.productoService.getProductoIdCat(this.id).subscribe(
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
