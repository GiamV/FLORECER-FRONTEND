import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../Models/Proveedor';
import { DetalleProveedor } from '../Models/DetalleProveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private urlEndPoint:string="http://localhost:8080/proveedor"
  private urlEndPoint2:string="http://localhost:8080/detalleProveedor"
  constructor(private http:HttpClient) { } 

  getProveedor():Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(this.urlEndPoint + "/proveedores");
  }

  getProveedoresID(idpro: number):Observable<DetalleProveedor[]>{
    return this.http.get<DetalleProveedor[]>(this.urlEndPoint2 + "/detallesProvid/"+idpro);
  }
  
}
