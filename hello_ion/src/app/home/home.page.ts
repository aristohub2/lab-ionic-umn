import { Component } from '@angular/core';
import { Prodi } from '../prodi/prodi.model';
import { ProdiService } from '../prodi/prodi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  campus :string;
  website: string;
  prodi_if: Prodi;
  if_str: string;


  prodi: Prodi[];
  constructor(private prodiService: ProdiService) {}
  
  ngOnInit(){
    this.campus = "Universitas Multimedia Nusantara";
    this.website = "www.umn.ac.id"
    this.prodi = this.prodiService.getAllProdi();
    // this.prodi_if = this.prodiService.getInformatika();
    // this.if_str = this.prodi_if.nama_prodi;
  }
  singkatCampus(){
    this.campus = "UMN";
  }
  getAllProdi(){
    this.prodi =this.prodiService.getAllProdi();
  }
  // Informatika(){
  //   this.prodi =this.prodiService.getInformatika();
  // }
  // SInformasi(){
  //   this.prodi=this.prodiService.getSInformasi();
  // }
}
