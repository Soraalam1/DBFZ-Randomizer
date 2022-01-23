import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random Team Picker (beta)';

  Characters = [
    {
      name: "Goku Super Saiyan",
    active: true,
    imageUrl: "https://dba.bn-ent.net/character/images/select_goku-SS_off.png"
    },
    {
      name: "Vegeta Super Saiyan",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_vegeta-SS_off.png"
    },
    {
      name: "Trunks",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_trunks_off.png"
    },
    {
      name: "Teen Gohan",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_gohan-y_off.png"
    },
    {
      name: "Frieza",
      active: true,
      imageUrl: "https://cdn.discordapp.com/attachments/239873523223494657/772596925647159337/select_freeza_off.png"
    },
    {
      name: "Majin Buu",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_majinBoo-z_off.png"
    },
    {
      name: "Cell",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_cell_off.png"
    },
    {
      name: "Krillin",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_kuririn_off.png"
    },
    {
      name: "Piccolo",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_piccolo_off.png"
    },
    {
      name: "Android 16",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_no16_off.png"
    },
    {
      name: "Android 18",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_no18_off.png"
    },
    {
      name: "Goku (SSGSS)",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_gokuSsgss_off.png"
    },
    {
      name: "Vegeta (SSGSS)",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_vegetaSsgss_off.png"
    },
    {
      name: "Yamcha",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_yamcha_off.png"
    },
    {
      name: "Tien",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_tenshinhan_off.png"
    },
    {
      name: "Nappa",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_nappa_off.png"
    },
    {
      name: "Ginyu",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_ginyu_off.png"
    },
    {
      name: "Gotenks",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_gotenks_off.png"
    },
    {
      name: "Adult Gohan",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_gohan_off.png"
    },
    {
      name: "Kid Buu",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_majinBoo_off.png"
    },
    {
      name: "Beerus (Bills)",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_beerus_off.png"
    },
    {
      name: "Hit",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_hit_off.png"
    },
    {
      name: "Goku Black",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_gokubl_off.png"
    },
    {
      name: "Android 21",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_no21_off.png"
    },
    {
      name: "Bardock",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_barduck_off.png"
    },
    {
      name: "Broly (Z)",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_broly_off.png"
    },
    {
      name: "Zamasu",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_zamasu_off.png"
    },
    {
      name: "Vegito (SSGSS)",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_vegetto_off.png"
    },
    {
      name: "Goku",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_goku_off.png"
    },
    {
      name: "Vegeta",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_vegeta_off.png"
    },
    {
      name: "Cooler",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_cooler_off.png"
    },
    {
      name: "Android 17",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_no17_off.png"
    },
    {
      name: "Jiren",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_jiren_off.png"
    },
    {
      name: "Videl",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_videl_off.png"
    },
    {
      name: "Goku (GT)",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_goku-gt_off.png"
    },
    {
      name: "Janemba",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_janemba_off.png"
    },
    {
      name: "Gogeta",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_gogeta_off.png"
    },
    {
      name: "Broly (DBS)",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_broly-dbs_off.png"
    },
    {
      name: "Kefla",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_kefla_off.png"
    },
    {
      name: "Goku (Ultra Instinct)",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_goku-ui_off.png"
    },
    {
      name: "Master Roshi",
      active: true,
      imageUrl: "https://dba.bn-ent.net/character/images/select_masterroshi_off.png"
    },
    {
       name: "Gogeta (SS4)",
       active: true,
       imageUrl: "https://dba.bn-ent.net/character/images/select_gogetaSS4_off.png"
       },
       {
         name: "Android 21 (Lab Coat)",
         active: true,
         imageUrl: "https://i.imgur.com/QJTKtIU.png"
       },

    ];

  result: [any, any, any];



toggleActive(character) {
    if (character.active){
      character.active = false;
    }
    else { character.active = true; }
  }

randomize(){
   const activeCharacters = [];
   this.Characters.forEach(character => {
     if (character.active){
       activeCharacters[activeCharacters.length] = character;
     }
   });
     const randomChar1 = activeCharacters[Math.floor(Math.random() * activeCharacters.length)];
     let randomChar2 = activeCharacters[Math.floor(Math.random() * activeCharacters.length)];
     if (randomChar2 === randomChar1) {
       while (randomChar2 === randomChar1) {
         randomChar2 = activeCharacters[Math.floor(Math.random() * activeCharacters.length)];
       }
     }
     let randomChar3 = activeCharacters[Math.floor(Math.random() * activeCharacters.length)];
     if (randomChar3 === randomChar1 || randomChar3 === randomChar2) {
       while (randomChar3 === randomChar1 || randomChar3 === randomChar2) {
         randomChar3 = activeCharacters[Math.floor(Math.random() * activeCharacters.length)];
       }
     }
     this.result = [randomChar1, randomChar2, randomChar3];
   }
}
