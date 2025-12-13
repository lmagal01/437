import { html } from "lit";
import { View } from "@calpoly/mustang";
import { Model } from "../model";
import { Msg } from "../messages";

// Map team names to their image paths
const TEAM_LOGOS: { [key: string]: string } = {
  "Arsenal FC": "/images/Arsenal.png",
  "FC Bayern München": "/images/Bayern.png",
  "Paris Saint-Germain FC": "/images/Paris.png",
  "Manchester City FC": "/images/ManCity.png",
  "Atalanta BC": "/images/Atalanta.png",
  "FC Internazionale Milano": "/images/InterMilan.png",
  "Real Madrid CF": "/images/RealMadrid.png",
  "Club Atlético de Madrid": "/images/Atletico.png",
  "Liverpool FC": "/images/Liverpool.png",
  "Borussia Dortmund": "/images/Dortmund.png",
  "Tottenham Hotspur FC": "/images/Tottenham.png",
  "Chelsea FC": "/images/Chelsea.png",
  "Sporting Clube de Portugal": "/images/Sporting.png",
  "FC Barcelona": "/images/Barcelona.png",
  "Olympique de Marseille": "/images/Marseille.png",
  "Juventus FC": "/images/Juventus.png",
  "Galatasaray SK": "/images/Galataray.png",
  "AS Monaco FC": "/images/Monaco.png",
  "SSC Napoli": "/images/Napoli.png",
  "FC København": "/images/Copenhagen.png",
  "Sport Lisboa e Benfica": "/images/Benfica.png",
  "Paphos FC": "/images/Pafos.png",
  "Royale Union Saint-Gilloise": "/images/Union SG.png",
  "Athletic Club": "/images/AthleticBilbao.png",
  "PAE Olympiakos SFP": "/images/Olympiacos.png",
  "Club Brugge KV": "/images/ClubBrugge.png",
  "FK Bodø/Glimt": "/images/BodoGlimt.png",
  "SK Slavia Praha": "/images/SlaviaPraha.png",
  "AFC Ajax": "/images/Ajax.png",
  "Villarreal CF": "/images/Villareal.png",
  "FK Kairat": "/images/Kairat.png",
  "Qarabağ Ağdam FK": "/images/Qarabag.png"
};

// Hardcoded data from API (fetched Dec 12, 2025)
const STANDINGS_DATA = [
  { position: 1, team: "Arsenal FC", played: 6, won: 6, draw: 0, lost: 0, goalsFor: 17, goalsAgainst: 1, goalDifference: 16, points: 18 },
  { position: 2, team: "FC Bayern München", played: 6, won: 5, draw: 0, lost: 1, goalsFor: 18, goalsAgainst: 7, goalDifference: 11, points: 15 },
  { position: 3, team: "Paris Saint-Germain FC", played: 6, won: 4, draw: 1, lost: 1, goalsFor: 19, goalsAgainst: 8, goalDifference: 11, points: 13 },
  { position: 4, team: "Manchester City FC", played: 6, won: 4, draw: 1, lost: 1, goalsFor: 12, goalsAgainst: 6, goalDifference: 6, points: 13 },
  { position: 5, team: "Atalanta BC", played: 6, won: 4, draw: 1, lost: 1, goalsFor: 8, goalsAgainst: 6, goalDifference: 2, points: 13 },
  { position: 6, team: "FC Internazionale Milano", played: 6, won: 4, draw: 0, lost: 2, goalsFor: 12, goalsAgainst: 4, goalDifference: 8, points: 12 },
  { position: 7, team: "Real Madrid CF", played: 6, won: 4, draw: 0, lost: 2, goalsFor: 13, goalsAgainst: 7, goalDifference: 6, points: 12 },
  { position: 8, team: "Club Atlético de Madrid", played: 6, won: 4, draw: 0, lost: 2, goalsFor: 15, goalsAgainst: 12, goalDifference: 3, points: 12 },
  { position: 9, team: "Liverpool FC", played: 6, won: 4, draw: 0, lost: 2, goalsFor: 11, goalsAgainst: 8, goalDifference: 3, points: 12 },
  { position: 10, team: "Borussia Dortmund", played: 6, won: 3, draw: 2, lost: 1, goalsFor: 19, goalsAgainst: 13, goalDifference: 6, points: 11 },
  { position: 11, team: "Tottenham Hotspur FC", played: 6, won: 3, draw: 2, lost: 1, goalsFor: 13, goalsAgainst: 7, goalDifference: 6, points: 11 },
  { position: 12, team: "Newcastle United FC", played: 6, won: 3, draw: 1, lost: 2, goalsFor: 13, goalsAgainst: 6, goalDifference: 7, points: 10 },
  { position: 13, team: "Chelsea FC", played: 6, won: 3, draw: 1, lost: 2, goalsFor: 13, goalsAgainst: 8, goalDifference: 5, points: 10 },
  { position: 14, team: "Sporting Clube de Portugal", played: 6, won: 3, draw: 1, lost: 2, goalsFor: 12, goalsAgainst: 8, goalDifference: 4, points: 10 },
  { position: 15, team: "FC Barcelona", played: 6, won: 3, draw: 1, lost: 2, goalsFor: 14, goalsAgainst: 11, goalDifference: 3, points: 10 },
  { position: 16, team: "Olympique de Marseille", played: 6, won: 3, draw: 0, lost: 3, goalsFor: 11, goalsAgainst: 8, goalDifference: 3, points: 9 },
  { position: 17, team: "Juventus FC", played: 6, won: 2, draw: 3, lost: 1, goalsFor: 12, goalsAgainst: 10, goalDifference: 2, points: 9 },
  { position: 18, team: "Galatasaray SK", played: 6, won: 3, draw: 0, lost: 3, goalsFor: 8, goalsAgainst: 8, goalDifference: 0, points: 9 },
  { position: 19, team: "AS Monaco FC", played: 6, won: 2, draw: 3, lost: 1, goalsFor: 7, goalsAgainst: 8, goalDifference: -1, points: 9 },
  { position: 20, team: "Bayer 04 Leverkusen", played: 6, won: 2, draw: 3, lost: 1, goalsFor: 10, goalsAgainst: 12, goalDifference: -2, points: 9 },
  { position: 21, team: "PSV", played: 6, won: 2, draw: 2, lost: 2, goalsFor: 15, goalsAgainst: 11, goalDifference: 4, points: 8 },
  { position: 22, team: "Qarabağ Ağdam FK", played: 6, won: 2, draw: 1, lost: 3, goalsFor: 10, goalsAgainst: 13, goalDifference: -3, points: 7 },
  { position: 23, team: "SSC Napoli", played: 6, won: 2, draw: 1, lost: 3, goalsFor: 6, goalsAgainst: 11, goalDifference: -5, points: 7 },
  { position: 24, team: "FC København", played: 6, won: 2, draw: 1, lost: 3, goalsFor: 10, goalsAgainst: 16, goalDifference: -6, points: 7 },
  { position: 25, team: "Sport Lisboa e Benfica", played: 6, won: 2, draw: 0, lost: 4, goalsFor: 6, goalsAgainst: 8, goalDifference: -2, points: 6 },
  { position: 26, team: "Paphos FC", played: 6, won: 1, draw: 3, lost: 2, goalsFor: 4, goalsAgainst: 9, goalDifference: -5, points: 6 },
  { position: 27, team: "Royale Union Saint-Gilloise", played: 6, won: 2, draw: 0, lost: 4, goalsFor: 7, goalsAgainst: 15, goalDifference: -8, points: 6 },
  { position: 28, team: "Athletic Club", played: 6, won: 1, draw: 2, lost: 3, goalsFor: 4, goalsAgainst: 9, goalDifference: -5, points: 5 },
  { position: 29, team: "PAE Olympiakos SFP", played: 6, won: 1, draw: 2, lost: 3, goalsFor: 6, goalsAgainst: 13, goalDifference: -7, points: 5 },
  { position: 30, team: "Eintracht Frankfurt", played: 6, won: 1, draw: 1, lost: 4, goalsFor: 8, goalsAgainst: 16, goalDifference: -8, points: 4 },
  { position: 31, team: "Club Brugge KV", played: 6, won: 1, draw: 1, lost: 4, goalsFor: 8, goalsAgainst: 16, goalDifference: -8, points: 4 },
  { position: 32, team: "FK Bodø/Glimt", played: 6, won: 0, draw: 3, lost: 3, goalsFor: 9, goalsAgainst: 13, goalDifference: -4, points: 3 },
  { position: 33, team: "SK Slavia Praha", played: 6, won: 0, draw: 3, lost: 3, goalsFor: 2, goalsAgainst: 11, goalDifference: -9, points: 3 },
  { position: 34, team: "AFC Ajax", played: 6, won: 1, draw: 0, lost: 5, goalsFor: 5, goalsAgainst: 18, goalDifference: -13, points: 3 },
  { position: 35, team: "Villarreal CF", played: 6, won: 0, draw: 1, lost: 5, goalsFor: 4, goalsAgainst: 13, goalDifference: -9, points: 1 },
  { position: 36, team: "FK Kairat", played: 6, won: 0, draw: 1, lost: 5, goalsFor: 4, goalsAgainst: 15, goalDifference: -11, points: 1 }
];

export class StandingsViewElement extends View<Model, Msg> {
  constructor() {
    super("uefa:model");
  }

  getQualificationClass(position: number): string {
    if (position <= 8) return "qualify-ro16";
    if (position <= 24) return "qualify-playoff";
    return "eliminated";
  }

  render() {
    return html`
    <center>
      <div class="standings-container">
        <h2>UEFA Champions League Standings 2025/26</h2>
        <p class="updated">League Phase - After Matchday 6</p>
        <a href="/app"> Back to Home</a>
        
        <table class="standings-table">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            ${STANDINGS_DATA.map((team) => html`
              <tr class="${this.getQualificationClass(team.position)}">
                <td class="position">${team.position}</td>
                <td class="team-name-cell">
                  ${TEAM_LOGOS[team.team] 
                    ? html`<img src="${TEAM_LOGOS[team.team]}" alt="${team.team}" class="team-logo-small" />`
                    : html``
                  }
                  <span class="team-name">${team.team}</span>
                </td>
                <td>${team.played}</td>
                <td>${team.won}</td>
                <td>${team.draw}</td>
                <td>${team.lost}</td>
                <td>${team.goalsFor}</td>
                <td>${team.goalsAgainst}</td>
                <td class="${team.goalDifference >= 0 ? 'positive' : 'negative'}">
                  ${team.goalDifference > 0 ? '+' : ''}${team.goalDifference}
                </td>
                <td class="points">${team.points}</td>
              </tr>
            `)}
          </tbody>
        </table>
        
        
      </div>
      </center>
    `;
  }

  createRenderRoot() {
    return this;
  }
}