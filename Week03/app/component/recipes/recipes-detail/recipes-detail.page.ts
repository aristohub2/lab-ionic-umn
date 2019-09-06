import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../../models/recipes.model';
import { RecipesService } from 'src/app/service/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {
  recipe: Recipes;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('rId')){return;}
        this.recipe = this.recipesService.getRecipes(paramMap.get('rId'));
      }
    )
  }

  getRecipes(rId: string){
    this.recipe = this.recipesService.getRecipes(rId);
    console.log(this.recipe)
  }

  goBack(){
    this.router.navigate(['/recipes'])
  }

  async delete() {
    const alert = await this.alertController.create({
      header: 'Delete item?',
      message: 'Are you sure want to delete this bruh?',
      buttons: [
        {
          text: 'Kepencet'
        },
        {
          text: 'I Disgust!',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.recipesService.deleteRecipes(this.recipe.id);
            this.router.navigate(['/recipes'])
            this.presentToast();
          }
        },
      ]
    });

    await alert.present();
  }

  async presentToast(){
    let toast = await this.toastCtrl.create({
      message: 'Item deleted!!!!!!!!!!!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
