"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var import_mongo = require("./services/mongo");
var import_uefa_team_svc = __toESM(require("./services/uefa-team-svc"));
const teams = [
  {
    name: "Ajax (NED)",
    href: "/Ajax.html",
    imgSrc: "/images/Ajax.png"
  },
  {
    name: "Arsenal (ENG)",
    href: "/Arsenal.html",
    imgSrc: "/images/Arsenal.png"
  },
  {
    name: "Atalanta (ITA)",
    href: "/Atalanta.html",
    imgSrc: "/images/Atalanta.png"
  },
  {
    name: "Athletic Bilbao (ESP)",
    href: "/AthleticBilbao.html",
    imgSrc: "/images/AthleticBilbao.png"
  },
  {
    name: "Atletico Madrid (ESP)",
    href: "/Atletico.html",
    imgSrc: "/images/Atletico.png"
  },
  {
    name: "Dortmund (GER)",
    href: "/Dortmund.html",
    imgSrc: "/images/Dortmund.png"
  },
  {
    name: "Barcelona (ESP)",
    href: "/Barcelona.html",
    imgSrc: "/images/Barcelona.png"
  },
  {
    name: "Bayern Munich (GER)",
    href: "/Bayern.html",
    imgSrc: "/images/Bayern.png"
  },
  {
    name: "Benfica (POR)",
    href: "/Benfica.html",
    imgSrc: "/images/Benfica.png"
  },
  {
    name: "BodoGlimt (NOR)",
    href: "/Bodo.html",
    imgSrc: "/images/BodoGlimt.png"
  },
  {
    name: "Chelsea (ENG)",
    href: "/Chelsea.html",
    imgSrc: "/images/Chelsea.png"
  },
  {
    name: "Club Brugge (BEL)",
    href: "/ClubBrugge.html",
    imgSrc: "/images/ClubBrugge.png"
  },
  {
    name: "Copenhagen (DEN)",
    href: "/Copenhagen.html",
    imgSrc: "/images/Copenhagen.png"
  },
  {
    name: "Galatasaray (TUR)",
    href: "/Galatasaray.html",
    imgSrc: "/images/Galataray.png"
  },
  {
    name: "Inter Milan (ITA)",
    href: "/InterMilan.html",
    imgSrc: "/images/InterMilan.png"
  },
  {
    name: "Juventus (ITA)",
    href: "/Juventus.html",
    imgSrc: "/images/Juventus.png"
  },
  {
    name: "Kairat Almaty (KAZ)",
    href: "/Kairat.html",
    imgSrc: "/images/Kairat.png"
  },
  {
    name: "Liverpool (ENG)",
    href: "/Liverpool.html",
    imgSrc: "/images/Liverpool.png"
  },
  {
    name: "Manchester City (ENG)",
    href: "/ManCity.html",
    imgSrc: "/images/ManCity.png"
  },
  {
    name: "Marseille (FRA)",
    href: "/Marseille.html",
    imgSrc: "/images/Marseille.png"
  },
  {
    name: "Monaco (FRA)",
    href: "/Monaco.html",
    imgSrc: "/images/Monaco.png"
  },
  {
    name: "Napoli (ITA)",
    href: "/Napoli.html",
    imgSrc: "/images/Napoli.png"
  },
  {
    name: "Olympiakos (GRE)",
    href: "/Olympiacos.html",
    imgSrc: "/images/Olympiacos.png"
  },
  {
    name: "Pafos (CYP)",
    href: "/Pafos.html",
    imgSrc: "/images/Pafos.png"
  },
  {
    name: "PSG (FRA)",
    href: "/Paris.html",
    imgSrc: "/images/Paris.png"
  },
  {
    name: "Qarabag (Aze)",
    href: "/Qarabag.html",
    imgSrc: "/images/Qarabag.png"
  },
  {
    name: "Real Madrid (ESP)",
    href: "/RealMadrid.html",
    imgSrc: "/images/RealMadrid.png"
  },
  {
    name: "Slavia Praha (CZE)",
    href: "/Slavia.html",
    imgSrc: "/images/SlaviaPraha.png"
  },
  {
    name: "Sporting CP(POR)",
    href: "/Sporting.html",
    imgSrc: "/images/Sporting.png"
  },
  {
    name: "Tottenham (ENG)",
    href: "/Tottenham.html",
    imgSrc: "/images/Tottenham.png"
  },
  {
    name: "Union SG (BEL)",
    href: "/Union.html",
    imgSrc: "/images/Union SG.png"
  },
  {
    name: "Villareal (ESP)",
    href: "/Villareal.html",
    imgSrc: "/images/Villareal.png"
  }
];
function seedTeams() {
  return __async(this, null, function* () {
    try {
      yield (0, import_mongo.connect)("uefa");
      console.log("Connected to database");
      console.log("Adding teams...");
      for (const team of teams) {
        yield import_uefa_team_svc.default.create(team);
        console.log(`${team.name}`);
      }
      console.log(`
Successfully seeded ${teams.length} teams!`);
      process.exit(0);
    } catch (error) {
      console.error("Error seeding teams:", error);
      process.exit(1);
    }
  });
}
seedTeams();
