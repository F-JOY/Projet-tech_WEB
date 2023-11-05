export  const state={
    navigation: [
        {
          id: 1,
          path: "/",
          label: "Accueil",
        },
        {
          id: 2,
          path: "/bouquets",
          label: "Bouquets",
        },
        {
          id: 3,
          path: "/fleurs",
          label: "Fleurs",
        },
        {
          id: 4,
          path: "/compte",
          label: "Mon Compt",
        },
      ],
      slides: [
        {
          id: 1,
          image: "/img/sl1.jpg",
          titre: "Jardins Sur-Mesure",
          sousTitre:
            "Transformer votre espace extérieur en un paradis floral unique",
          class: "carousel-item active",
        },
        {
          id: 2,
          image: "/img/sl2.png",
          titre: "Mariages Élégants",
          sousTitre: "Sublimez votre mariage avec des fleurs exceptionnelles",
          class: "carousel-item",
        },
        {
          id: 3,
          image: "/img/sl3.png",
          titre: "Cadeaux Fleuris",
          sousTitre:
            "Cadeaux Fleurs : Témoignage d'Affection en Bouquets et Paniers",
          class: "carousel-item",
        },
      ],
      mesBouquets:[
      {
        id:1,
        nom:'Bouquet de Tunis',
        descr:'Un dosage parfait de jasmins et de tulipes, des coulers éclatantes et du soleil toute l\'année chez vous',
        image:"/images/Btulipe.jpg",
        prix:'1500.00'
      },
      {
        id:2,
        nom:'Bouquet d\'Alger',
        descr:'Un dosage parfait de jasmins et de senteurs méditeriannes , des odeurs éclatantes pour égayer votre bureau',
        image:"/images/Bjasmin.jpg",
        prix:"2000.00"
      },
      {
        id:3,
        nom:'Bouquet d\'Oran',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"/images/blys.jpg",
        prix:"2000.00"
      }
    ],
    Fleurs:[
        {
            id:1,
            nom:"jasmin",
            discr:"Facile d’entretien, le jasmin est un séduisant arbuste grimpant à la magnifique floraison estivale blanche ou jaune qui exhale un doux parfum."

        },{
            id:2,
        },{
            id:3,
        },{
            id:4,
        }
    ]

}