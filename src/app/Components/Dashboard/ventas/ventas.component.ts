import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
Chart.register(...registerables)
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ctx:any
  label:any[]= [];
  data:any[]= [];
  label2:any[]= [];
  data2:any[]= [];
  constructor(private carrioservice:CarritoComprasService) { }

  ngOnInit(): void {
    this.getDetalles()
    this.getDetalles2()
  }

  cargar(labels:any,data:any){
    this.ctx = document.getElementById('myChart6');
    new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Dinero Recaudado',
          data: data ,
          backgroundColor: [
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)'
          ],
        }]
      },
      
    });

  }
  getDetalles(){
    this.carrioservice.consultaVentas().subscribe(
      detalles=>{
        
        for(let det of detalles){
          console.log(det[0]);
          console.log(det[1]);
          if(det[0]==1){this.label.push("Enero")}
          else if(det[0]==2){this.label.push("Enero")}
          else if(det[0]==3){this.label.push("Febrero")}
          else if(det[0]==4){this.label.push("Marzo")}
          else if(det[0]==5){this.label.push("Abril")}
          else if(det[0]==6){this.label.push("Mayo")}
          else if(det[0]==7){this.label.push("Junio")}
          else if(det[0]==8){this.label.push("Julio")}
          else if(det[0]==9){this.label.push("Agosto")}
          else if(det[0]==10){this.label.push("Septiembre")}
          else if(det[0]==11){this.label.push("Noviembre")}
          else if(det[0]==12){this.label.push("Diciembre")}
          this.data.push(det[1])
        }
        this.cargar(this.label,this.data)
        console.log(detalles);
      }
    );
  }
  getDetalles2(){
    this.carrioservice.contarVentas().subscribe(
      detalles=>{
        
        for(let det of detalles){
          console.log(det[0]);
          console.log(det[1]);
          if(det[0]==1){this.label.push("Enero")}
          else if(det[0]==2){this.label2.push("Enero")}
          else if(det[0]==3){this.label2.push("Febrero")}
          else if(det[0]==4){this.label2.push("Marzo")}
          else if(det[0]==5){this.label2.push("Abril")}
          else if(det[0]==6){this.label2.push("Mayo")}
          else if(det[0]==7){this.label2.push("Junio")}
          else if(det[0]==8){this.label2.push("Julio")}
          else if(det[0]==9){this.label2.push("Agosto")}
          else if(det[0]==10){this.label2.push("Septiembre")}
          else if(det[0]==11){this.label2.push("Noviembre")}
          else if(det[0]==12){this.label2.push("Diciembre")}
          this.data2.push(det[1])
        }
        this.cargar2(this.label2,this.data2)
        console.log(detalles);
      }
    );
  }
  cargar2(labels:any,data:any){
    this.ctx = document.getElementById('myChart5');
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Ventas Realizadas',
          data: data ,
          backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)'
          ],
        }]
      },
      
    });

  }

}
