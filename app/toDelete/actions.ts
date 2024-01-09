import { Game, ScenerioResult } from "../app/games/kuhn/definitions";

export const clearGame = (): Game => {
  return {
    hero: 9999,
    nextPlayer: 0,
    lastAction: 1,
    players: [
      { name: "Player 1", stack: 99, bet: 1, cards: [] },
      { name: "Player 2", stack: 99, bet: 1, cards: [] },
    ],
    actions: [
      { player: "Player 1", choice: "ante", amount: 1 },
      { player: "Player 2", choice: "ante", amount: 1 },
    ],
  };
};

export const clearScenarioResult = (): ScenerioResult => {
  return {
    strat: [0, 0],
    reach_prob: 0,
    hero_range: [0, 0, 0],
    vill_range: [0, 0, 0],
    hero_hand_eq: 0,
    hero_eqb: [0, 0, 0],
    vill_eqb: [0, 0, 0],
    explain: "",
  };
};
