import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleProveedor } from '../Models/DetalleProveedor';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http:HttpClient) { }
  private urlEndPoint:string="http://localhost:8080/detalleProveedor"

  createDetalleProve(DetallePro:DetalleProveedor){
    return this.http.post<DetalleProveedor>(this.urlEndPoint + "/detallesProvnew",DetallePro )
  }
}
