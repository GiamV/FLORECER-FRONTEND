import { Producto } from "./Producto";
import { Proveedor } from "./Proveedor";

export class DetalleProveedor{
    public idCategoria!:number;
    public producto!: Producto;
    public proveedor!:Proveedor;
    public estado!:number;
}