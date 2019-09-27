import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdiService } from '../prodi/prodi.service';
import { Prodi } from '../prodi/prodi.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-prodi-detil',
  templateUrl: './prodi-detil.page.html',
  styleUrls: ['./prodi-detil.page.scss'],
})
export class ProdiDetilPage implements OnInit {

  prodi: Prodi;
  constructor(private activatedRoute: ActivatedRoute, private prodiService: ProdiService, private alertController: AlertController,private router: Router) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        this.prodi = this.prodiService.getProdi(paramMap.get('kode'));
      }
    );
    
  }

  async hapusProdi(){
    const alert = await this.alertController.create({
      header: 'Yakin?',
      message: 'Beneran mau hapus prodi?',
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Coba bos',
        role:  'cancel'
      },
      {
        text: 'Delete',
        handler:()=>{
          this.prodiService.deleteProdi(this.prodi.kode_prodi);
          this.router.navigate(['/home']);
        }
      }
    ]
    });
    await alert.present();
  }
}
