import type { MenuCategory } from "../types/menu";

export const menuData: MenuCategory[] = [
  {
    key: "soups",
    titleKey: "categories.soups",
    items: [
      { id: 1, nameKey: "menu.soups.ushbere.name", image: "images/Dumpling-Soup.jpg", descriptionKey: "menu.soups.ushbere.description", price: 5 },
      { id: 2, nameKey: "menu.soups.mushroom.name", image: "images/mushroom-soup.jpg", descriptionKey: "menu.soups.mushroom.description", price: 5 },
      { id: 3, nameKey: "menu.soups.lentil.name", image: "images/lentil-soup.jpg", descriptionKey: "menu.soups.lentil.description", price: 5 },
      { id: 4, nameKey: "menu.soups.chicken.name", image: "images/chickensoup.jpg", descriptionKey: "menu.soups.chicken.description", price: 5 },
    ]
  },
  {
    key: "salads",
    titleKey: "categories.salads",
    items: [
      { id: 5, nameKey: "menu.salads.bakuTomato.name", image: "images/tomato-salad.jpg", descriptionKey: "menu.salads.bakuTomato.description", price: 8 },
      { id: 6, nameKey: "menu.salads.shepherd.name", image: "images/coban-salad.jpg", descriptionKey: "menu.salads.shepherd.description", price: 5 },
      { id: 7, nameKey: "menu.salads.tongue.name", image: "images/Tongue-salad.jpg", descriptionKey: "menu.salads.tongue.description", price: 6 },
      { id: 8, nameKey: "menu.salads.rukola.name", image: "images/rukola-salad.jpg", descriptionKey: "menu.salads.rukola.description", price: 12 },
      { id: 9, nameKey: "menu.salads.gavurdagi.name", image: "images/gavurdagi-salad.jpg", descriptionKey: "menu.salads.gavurdagi.description", price: 5 },
      { id: 10, nameKey: "menu.salads.crispyEggplant.name", image: "images/crispy-eggplant.jpg", descriptionKey: "menu.salads.crispyEggplant.description", price: 12 },
      { id: 11, nameKey: "menu.salads.caesarShrimp.name", image: "images/shrimp-caesar.jpg", descriptionKey: "menu.salads.caesarShrimp.description", price: 16 },
      { id: 12, nameKey: "menu.salads.caesarChicken.name", image: "images/chicken-caesar.jpg", descriptionKey: "menu.salads.caesarChicken.description", price: 12 },
      { id: 13, nameKey: "menu.salads.blackPlum.name", image: "images/plum-salad.jpg", descriptionKey: "menu.salads.blackPlum.description", price: 5 },
      { id: 14, nameKey: "menu.salads.grill.name", image: "images/vegetable-salad.jpg", descriptionKey: "menu.salads.grill.description", price: 5 },
      { id: 15, nameKey: "menu.salads.mimosa.name", image: "images/mimosa-salad.jpg", descriptionKey: "menu.salads.mimosa.description", price: 5 },
      { id: 16, nameKey: "menu.salads.chefSpecial.name", image: "images/chef-salad.jpg", descriptionKey: "menu.salads.chefSpecial.description", price: 5 },
      { id: 17, nameKey: "menu.salads.capital.name", image: "images/capital-salad.jpg", descriptionKey: "menu.salads.capital.description", price: 5 },
      { id: 18, nameKey: "menu.salads.greek.name", image: "images/greek-salad.jpg", descriptionKey: "menu.salads.greek.description", price: 6 },
    ]
  },
  {
    key: "coldAppetizers",
    titleKey: "categories.coldAppetizers",
    items: [
      { id: 19, nameKey: "menu.coldAppetizers.salmon.name", image: "images/salmon-fillet.jpg", descriptionKey: "menu.coldAppetizers.salmon.description", price: 12 },
      { id: 20, nameKey: "menu.coldAppetizers.eggplantLevengi.name", image: "images/Eggplant-levengi.jpg", descriptionKey: "menu.coldAppetizers.eggplantLevengi.description", price: 6 },
      { id: 21, nameKey: "menu.coldAppetizers.eggplantRolls.name", image: "images/Eggplant-rolls.jpg", descriptionKey: "menu.coldAppetizers.eggplantRolls.description", price: 4 },
      { id: 22, nameKey: "menu.coldAppetizers.fishPlatter.name", image: "images/Fish-platter.jpg", descriptionKey: "menu.coldAppetizers.fishPlatter.description", price: 24 },
      { id: 23, nameKey: "menu.coldAppetizers.picklesPlatter.name", image: "images/pickles-plate.jpg", descriptionKey: "menu.coldAppetizers.picklesPlatter.description", price: 5 },
      { id: 24, nameKey: "menu.coldAppetizers.meatPlatter.name", image: "images/smoked-meat.jpg", descriptionKey: "menu.coldAppetizers.meatPlatter.description", price: 22 },
      { id: 25, nameKey: "menu.coldAppetizers.mushroomSpinach.name", image: "images/Mushroom-spinach.jpg", descriptionKey: "menu.coldAppetizers.mushroomSpinach.description", price: 5 },
      { id: 26, nameKey: "menu.coldAppetizers.olives.name", image: "images/olives-bowl.jpg", descriptionKey: "menu.coldAppetizers.olives.description", price: 6 },
      { id: 27, nameKey: "menu.coldAppetizers.fruitPlatter.name", image: "images/fruit-platter.jpg", descriptionKey: "menu.coldAppetizers.fruitPlatter.description", price: 10 },
      { id: 28, nameKey: "menu.coldAppetizers.pate.name", image: "images/Pate.jpg", descriptionKey: "menu.coldAppetizers.pate.description", price: 5 },
      { id: 29, nameKey: "menu.coldAppetizers.cheeseEuro.name", image: "images/cheese-platter.jpg", descriptionKey: "menu.coldAppetizers.cheeseEuro.description", price: 18 },
      { id: 30, nameKey: "menu.coldAppetizers.cheeseLocal.name", image: "images/herb-cheese.jpg", descriptionKey: "menu.coldAppetizers.cheeseLocal.description", price: 14 },
      { id: 31, nameKey: "menu.coldAppetizers.vegetableBouquet.name", image: "images/vegetable-platter.jpg", descriptionKey: "menu.coldAppetizers.vegetableBouquet.description", price: 9 },
    ]
  },
  {
    key: "hotAppetizers",
    titleKey: "categories.hotAppetizers",
    items: [
      { id: 32, nameKey: "menu.hotAppetizers.blinMeat.name", image: "images/Crepes.jpg", descriptionKey: "menu.hotAppetizers.blinMeat.description", price: 5 },
      { id: 33, nameKey: "menu.hotAppetizers.blinCheese.name", image: "images/Crepes-cottage.jpg", descriptionKey: "menu.hotAppetizers.blinCheese.description", price: 4 },
      { id: 34, nameKey: "menu.hotAppetizers.nuggets.name", image: "images/chicken-nuggets.jpg", descriptionKey: "menu.hotAppetizers.nuggets.description", price: 12 },
      { id: 35, nameKey: "menu.hotAppetizers.chickenWings.name", image: "images/crispy-chicken-wings.jpg", descriptionKey: "menu.hotAppetizers.chickenWings.description", price: 12 },
    ]
  },
  {
    key: "fish",
    titleKey: "categories.fish",
    items: [
      { id: 36, nameKey: "menu.fish.sturgeon.name", image: "images/Sturgeon.jpg", descriptionKey: "menu.fish.sturgeon.description", price: 35 },
      { id: 37, nameKey: "menu.fish.shrimpGuvech.name", image: "images/tempura-shrimp.jpg", descriptionKey: "menu.fish.shrimpGuvech.description", price: 18 },
      { id: 38, nameKey: "menu.fish.doradoFri.name", image: "images/grilled-sea.jpg", descriptionKey: "menu.fish.doradoFri.description", price: 26 },
      { id: 39, nameKey: "menu.fish.doradoVeg.name", image: "images/Grilled-dorado.jpg", descriptionKey: "menu.fish.doradoVeg.description", price: 26 },
      { id: 40, nameKey: "menu.fish.troutVeg.name", image: "images/trout-fish.jpg", descriptionKey: "menu.fish.troutVeg.description", price: 26 },
      { id: 41, nameKey: "menu.fish.troutFried.name", image: "images/Fried-trout.jpg", descriptionKey: "menu.fish.troutFried.description", price: 22 },
      { id: 42, nameKey: "menu.fish.kutumFried.name", image: "images/Whole-fried-kutum.jpg", descriptionKey: "menu.fish.kutumFried.description", price: 45 },
      { id: 43, nameKey: "menu.fish.kutumLevengi.name", image: "images/Whole-boneless-kutum-levengi.jpg", descriptionKey: "menu.fish.kutumLevengi.description", price: 46 },
      { id: 44, nameKey: "menu.fish.sturgeonCherry.name", image: "images/Sturgeon-in-cherry-cornelian.jpg", descriptionKey: "menu.fish.sturgeonCherry.description", price: 35 },
      { id: 45, nameKey: "menu.fish.sudak.name", image: "images/Fried-pike-perch.jpg", descriptionKey: "menu.fish.sudak.description", price: 35 },
    ]
  },
  {
    key: "pasta",
    titleKey: "categories.pasta",
    items: [
      { id: 46, nameKey: "menu.pasta.alfredo.name", image: "images/fettuccine-alfredo.jpg", descriptionKey: "menu.pasta.alfredo.description", price: 12 },
      { id: 47, nameKey: "menu.pasta.arrabbiata.name", image: "images/arrabbiata-pasta.jpg", descriptionKey: "menu.pasta.arrabbiata.description", price: 12 },
      { id: 48, nameKey: "menu.pasta.rigatoni.name", image: "images/Rigatoni-pasta.jpg", descriptionKey: "menu.pasta.rigatoni.description", price: 8 },
      { id: 49, nameKey: "menu.pasta.carbonara.name", image: "images/spaghetti-carbonara.jpg", descriptionKey: "menu.pasta.carbonara.description", price: 13 },
    ]
  },
  {
    key: "hotMeals",
    titleKey: "categories.hotMeals",
    items: [
      { id: 50, nameKey: "menu.hotMeals.buglama.name", image: "images/Buglama.jpg", descriptionKey: "menu.hotMeals.buglama.description", price: 16 },
      { id: 51, nameKey: "menu.hotMeals.medallionRice.name", image: "images/beef-steak.jpg", descriptionKey: "menu.hotMeals.medallionRice.description", price: 18 },
      { id: 52, nameKey: "menu.hotMeals.medallionPotato.name", image: "images/Beef-medallion.jpg", descriptionKey: "menu.hotMeals.medallionPotato.description", price: 18 },
      { id: 53, nameKey: "menu.hotMeals.shepherdRoast.name", image: "images/Shepherd-roast.jpg", descriptionKey: "menu.hotMeals.shepherdRoast.description", price: 16 },
      { id: 54, nameKey: "menu.hotMeals.dolmaVeg.name", image: "images/Dolma-(vegetable).jpg", descriptionKey: "menu.hotMeals.dolmaVeg.description", price: 12 },
      { id: 55, nameKey: "menu.hotMeals.dolmaLeaf.name", image: "images/Dolma-(grape leaf).jpg", descriptionKey: "menu.hotMeals.dolmaLeaf.description", price: 12 },
      { id: 56, nameKey: "menu.hotMeals.jigo.name", image: "images/Jigo.jpg", descriptionKey: "menu.hotMeals.jigo.description", price: 24 },
      { id: 57, nameKey: "menu.hotMeals.lambPomegranate.name", image: "images/beef pomegranate.jpg", descriptionKey: "menu.hotMeals.lambPomegranate.description", price: 16 },
      { id: 58, nameKey: "menu.hotMeals.beefLanget.name", image: "images/beef strips.jpg", descriptionKey: "menu.hotMeals.beefLanget.description", price: 16 },
      { id: 59, nameKey: "menu.hotMeals.juicyLamb.name", image: "images/Juicy-lamb-maca.jpg", descriptionKey: "menu.hotMeals.juicyLamb.description", price: 16 },
      { id: 60, nameKey: "menu.hotMeals.cherryBeef.name", image: "images/Beef-tenderloin.jpg", descriptionKey: "menu.hotMeals.cherryBeef.description", price: 22 },
      { id: 61, nameKey: "menu.hotMeals.kefliLamb.name", image: "images/Kefli-lamb.jpg", descriptionKey: "menu.hotMeals.kefliLamb.description", price: 24 },
      { id: 62, nameKey: "menu.hotMeals.kefliChicken.name", image: "images/Kefli-young-chicken.jpg", descriptionKey: "menu.hotMeals.kefliChicken.description", price: 22 },
      { id: 63, nameKey: "menu.hotMeals.tabaka.name", image: "images/roasted-chicken.jpg", descriptionKey: "menu.hotMeals.tabaka.description", price: 18 },
      { id: 64, nameKey: "menu.hotMeals.chickenLangetRice.name", image: "images/chicken-strips.jpg", descriptionKey: "menu.hotMeals.chickenLangetRice.description", price: 12 },
      { id: 65, nameKey: "menu.hotMeals.chickenLangetFri.name", image: "images/Chicken-langet.jpg", descriptionKey: "menu.hotMeals.chickenLangetFri.description", price: 13 },
    ]
  },
  {
    key: "saj",
    titleKey: "categories.saj",
    items: [
      { id: 66, nameKey: "menu.saj.beefSaj.name", image: "images/beef-saj.jpg", descriptionKey: "menu.saj.beefSaj.description", price: 40 },
      { id: 67, nameKey: "menu.saj.lambSaj.name", image: "images/lamb-saj.jpg", descriptionKey: "menu.saj.lambSaj.description", price: 35 },
      { id: 68, nameKey: "menu.saj.chickenSaj.name", image: "images/chicken-saj.jpg", descriptionKey: "menu.saj.chickenSaj.description", price: 30 },
    ]
  },
  {
    key: "plov",
    titleKey: "categories.plov",
    items: [
      { id: 69, nameKey: "menu.plov.fisincan.name", image: "images/rice.jpg", descriptionKey: "menu.plov.fisincan.description", price: 8 },
      { id: 70, nameKey: "menu.plov.sebzi.name", image: "images/Sabzi-plov.jpg", descriptionKey: "menu.plov.sebzi.description", price: 16 },
      { id: 71, nameKey: "menu.plov.shuyud.name", image: "images/Dill-plov.jpg", descriptionKey: "menu.plov.shuyud.description", price: 12 },
      { id: 72, nameKey: "menu.plov.tursuQovurma.name", image: "images/Pickled-meat-plov.jpg", descriptionKey: "menu.plov.tursuQovurma.description", price: 14 },
    ]
  },
  {
    key: "kebabs",
    titleKey: "categories.kebabs",
    items: [
      { id: 73, nameKey: "menu.kebabs.whitefishGrid.name", image: "images/White-fish.jpg", descriptionKey: "menu.kebabs.whitefishGrid.description", price: 24 },
      { id: 74, nameKey: "menu.kebabs.antrikot.name", image: "images/antrikot-kabab.png", descriptionKey: "menu.kebabs.antrikot.description", price: 14 },
      { id: 75, nameKey: "menu.kebabs.beefBasdirma.name", image: "images/Beef basdirma.jpg", descriptionKey: "menu.kebabs.beefBasdirma.description", price: 15 },
      { id: 76, nameKey: "menu.kebabs.potatoEmber.name", image: "images/potatos.jpg", descriptionKey: "menu.kebabs.potatoEmber.description", price: 6 },
      { id: 77, nameKey: "menu.kebabs.potatoLule.name", image: "images/potatoLule.jpg", descriptionKey: "menu.kebabs.potatoLule.description", price: 6 },
      { id: 78, nameKey: "menu.kebabs.chickenGrid.name", image: "images/Farm-chicken.jpg", descriptionKey: "menu.kebabs.chickenGrid.description", price: 16 },
      { id: 79, nameKey: "menu.kebabs.lambBasdirma.name", image: "images/Lamb-basdirma.jpg", descriptionKey: "menu.kebabs.lambBasdirma.description", price: 13 },
      { id: 80, nameKey: "menu.kebabs.lambTike.name", image: "images/Lamb-tike-kebab.jpg", descriptionKey: "menu.kebabs.lambTike.description", price: 13 },
      { id: 81, nameKey: "menu.kebabs.luleKebab.name", image: "images/Lula-kebab.jpg", descriptionKey: "menu.kebabs.luleKebab.description", price: 13 },
      { id: 82, nameKey: "menu.kebabs.sturgeonKebab.name", image: "images/Sturgeon-kebab.jpg", descriptionKey: "menu.kebabs.sturgeonKebab.description", price: 35 },
      { id: 83, nameKey: "menu.kebabs.hunter.name", image: "images/Hunter-lula.jpg", descriptionKey: "menu.kebabs.hunter.description", price: 13 },
      { id: 84, nameKey: "menu.kebabs.vegetableKebab.name", image: "images/grilled-vegetables.jpg", descriptionKey: "menu.kebabs.vegetableKebab.description", price: 3 },
      { id: 85, nameKey: "menu.kebabs.chickenKebab.name", image: "images/Chicken-kebab.jpg", descriptionKey: "menu.kebabs.chickenKebab.description", price: 10 },
    ]
  },
  {
    key: "tandir",
    titleKey: "categories.tandir",
    items: [
      { id: 86, nameKey: "menu.tandir.lambBasket.name", image: "images/Lamb-basket.jpg", descriptionKey: "menu.tandir.lambBasket.description", price: 90 },
      { id: 87, nameKey: "menu.tandir.lambShoulder.name", image: "images/Lamb-shoulder.jpg", descriptionKey: "menu.tandir.lambShoulder.description", price: 60 },
      { id: 88, nameKey: "menu.tandir.lambLeg.name", image: "images/Lamb-leg.jpg", descriptionKey: "menu.tandir.lambLeg.description", price: 90 },
      { id: 89, nameKey: "menu.tandir.beefShapalaq.name", image: "images/Beef-shapalaq.jpg", descriptionKey: "menu.tandir.beefShapalaq.description", price: 20 },
      { id: 90, nameKey: "menu.tandir.chickenTandir.name", image: "images/Farm-chicken-tendir.jpg", descriptionKey: "menu.tandir.chickenTandir.description", price: 20 },
    ]
  },
  {
    key: "garnishes",
    titleKey: "categories.garnishes",
    items: [
      { id: 91, nameKey: "menu.garnishes.rice.name", image: "images/rice.jpg", descriptionKey: "menu.garnishes.rice.description", price: 4 },
      { id: 92, nameKey: "menu.garnishes.homeFries.name", image: "images/potatos.jpg", descriptionKey: "menu.garnishes.homeFries.description", price: 5 },
      { id: 93, nameKey: "menu.garnishes.fries.name", image: "images/fires.jpg", descriptionKey: "menu.garnishes.fries.description", price: 6 },
      { id: 94, nameKey: "menu.garnishes.buckwheat.name", image: "images/Buckwheat.jpg", descriptionKey: "menu.garnishes.buckwheat.description", price: 4 },
      { id: 95, nameKey: "menu.garnishes.boiledVeg.name", image: "images/grilled-vegetables.jpg", descriptionKey: "menu.garnishes.boiledVeg.description", price: 6 },
      { id: 96, nameKey: "menu.garnishes.spaghetti.name", image: "images/Spaghetti.jpg", descriptionKey: "menu.garnishes.spaghetti.description", price: 8 },
    ]
  },
  {
    key: "sauces",
    titleKey: "categories.sauces",
    items: [
      { id: 97, nameKey: "menu.sauces.ezme.name", image: "images/Spicy-ezme.jpg", descriptionKey: "menu.sauces.ezme.description", price: 5 },
      { id: 98, nameKey: "menu.sauces.babaganush.name", image: "images/Baba-ganoush.jpg", descriptionKey: "menu.sauces.babaganush.description", price: 5 },
      { id: 99, nameKey: "menu.sauces.haydari.name", image: "images/Haydari.jpg", descriptionKey: "menu.sauces.haydari.description", price: 5 },
      { id: 100, nameKey: "menu.sauces.hummus.name", image: "images/Hummus.jpg", descriptionKey: "menu.sauces.hummus.description", price: 5 },
      { id: 101, nameKey: "menu.sauces.shakshuka.name", image: "images/Shakshuka.jpg", descriptionKey: "menu.sauces.shakshuka.description", price: 5 },
    ]
  },
  {
    key: "extras",
    titleKey: "categories.extras",
    items: [
      { id: 102, nameKey: "menu.extras.bread.name", image: "images/Bread.jpg", descriptionKey: "menu.extras.bread.description", price: 3 },
      { id: 103, nameKey: "menu.extras.iceCream.name", image: "images/Ice-cream.jpg", descriptionKey: "menu.extras.iceCream.description", price: 10 },
      { id: 104, nameKey: "menu.extras.ketchup.name", image: "images/Ketchup.jpg", descriptionKey: "menu.extras.ketchup.description", price: 2 },
      { id: 105, nameKey: "menu.extras.lemon.name", image: "images/limon.jpg", descriptionKey: "menu.extras.lemon.description", price: 2 },
      { id: 106, nameKey: "menu.extras.mayo.name", image: "images/Mayonnaise.jpg", descriptionKey: "menu.extras.mayo.description", price: 2 },
      { id: 107, nameKey: "menu.extras.blinSour.name", image: "images/Sour-cream-blini.jpg", descriptionKey: "menu.extras.blinSour.description", price: 5 },
    ]
  },
];