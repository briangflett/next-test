import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../firebase/firebaseClient";
import { doc, getDoc } from "firebase/firestore";
import { ScenerioResult } from "../../games/kuhn/definitions";

export async function GET(request: NextRequest, response: NextResponse) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  // const obj = Object.fromEntries(searchParams.entries());
  // const mockJsonData: JsonData = {
  //     player1_jack: {
  //       strat: [0.67, 0.33],
  //       reach_prob: 0.33,
  //       hero_range: [0.33, 0.33, 0.33],
  //       vill_range: [0.0, 0.5, 0.5],
  //       hero_hand_eq: 0.0,
  //       hero_eqb: [0.33, 0.33, 0.33],
  //       vill_eqb: [0.0, 0.5, 0.5],
  //       explain:
  //         "Our hand has 0% equity. Betting offers villain 3:1 odds. To keep villain indifferent between calling and folding with a bluff catcher (a Q) we need to construct a betting range with 75% value and 25% bluffs. (Villain will be indifferent to calling with a Q if he only wins 25% of the time, getting 3:1 odds). When villain has a Q our range will be 50% J and 50% K, so we can bet K 100% and J 33% to maintain the 75/25 value/bluff ratio.",
  //     },
  //     player1_queen: {
  //       strat: [1, 0],
  //       reach_prob: 0.33,
  //       hero_range: [0.33, 0.33, 0.33],
  //       vill_range: [0.5, 0.0, 0.5],
  //       hero_hand_eq: 0.5,
  //       hero_eqb: [0.0, 0.66, 0.33],
  //       vill_eqb: [0.5, 0.0, 0.5],
  //       explain:
  //         "With a mid strength hand vs villain's perfectly polar range we have a bluff catcher and therefore check 100%.",
  //     },
  //     player1_king: {
  //       strat: [0, 1],
  //       reach_prob: 0.33,
  //       hero_range: [0.33, 0.33, 0.33],
  //       vill_range: [0.5, 0.5, 0.0],
  //       hero_hand_eq: 1.0,
  //       hero_eqb: [0.0, 0.33, 0.66],
  //       vill_eqb: [0.5, 0.5, 0.0],
  //       explain:
  //         "Our hand has 100% equity. We bet 100% of the time, which also allows our bluffs to work at the maximum frequency.",
  //     },
  //     player1_jack_check_bet: {
  //       strat: [1, 0],
  //       reach_prob: 0.22,
  //       hero_range: [0.4, 0.6, 0.0],
  //       vill_range: [0.0, 0.5, 0.5],
  //       hero_hand_eq: 0.0,
  //       hero_eqb: [0.4, 0.6, 0.0],
  //       vill_eqb: [0.0, 0.0, 1.0],
  //       explain:
  //         "We have 0% equity and do not have an option to bluff. We must fold 100%.",
  //     },
  //     player1_queen_check_bet: {
  //       strat: [0.33, 0.67],
  //       reach_prob: 0.22,
  //       hero_range: [0.4, 0.6, 0.0],
  //       vill_range: [0.25, 0.0, 0.75],
  //       hero_hand_eq: 0.25,
  //       hero_eqb: [0.4, 0.6, 0.0],
  //       vill_eqb: [0.25, 0.0, 0.75],
  //       explain:
  //         "We have a bluff catcher vs villain's perfectly polar range. Getting 3:1 odds we call with the Minimum Defence Frequency of 67% to keep villain indifferent to bluffing us. We never have a King in this spot, and we fold 100% with a Jack, therefore we must call with a Queen the full 67%.",
  //     },
  //     player1_king_check_bet: {
  //       strat: [0.5, 0.5],
  //       reach_prob: 0.0,
  //       hero_range: [0.4, 0.6, 0.0],
  //       vill_range: [0.25, 0.75, 0.0],
  //       hero_hand_eq: 1.0,
  //       hero_eqb: [0.4, 0.0, 0.6],
  //       vill_eqb: [0.25, 0.0, 0.75],
  //       explain:
  //         "The probability of reaching this scenario is 0%. We never check with a King.",
  //     },
  //     player2_jack_check: {
  //       strat: [0.67, 0.33],
  //       reach_prob: 0.16,
  //       hero_range: [0.33, 0.33, 0.33],
  //       vill_range: [0.0, 1.0, 0.0],
  //       hero_hand_eq: 0.0,
  //       hero_eqb: [0.33, 0.33, 0.33],
  //       vill_eqb: [0.0, 1.0, 0.0],
  //       explain:
  //         "Our hand has 0% equity. Betting offers villain 3:1 odds. To keep villain indifferent between calling and folding with a bluff catcher (a Q) we need to construct a betting range with 75% value and 25% bluffs. (Villain will be indifferent to calling with a Q if he only wins 25% of the time, getting 3:1 odds). When villain has a Q our range will be 50% J and 50% K, so we can bet K 100% and J 33% to maintain the 75/25 value/bluff ratio.",
  //     },
  //     player2_queen_check: {
  //       strat: [0, 1],
  //       reach_prob: 0.11,
  //       hero_range: [0.33, 0.33, 0.33],
  //       vill_range: [1.0, 0.0, 0.0],
  //       hero_hand_eq: 1.0,
  //       hero_eqb: [0.0, 0.33, 0.66],
  //       vill_eqb: [1.0, 0.0, 0.0],
  //       explain:
  //         "The only hand villain checks is a Jack or a Queen. Since we have the Queen villain must have a Jack. We have 100% equity last to act so we always bet.",
  //     },
  //     player2_king_check: {
  //       strat: [0, 1],
  //       reach_prob: 0.28,
  //       hero_range: [0.33, 0.33, 0.33],
  //       vill_range: [0.4, 0.6, 0.0],
  //       hero_hand_eq: 1.0,
  //       hero_eqb: [0.33, 0.0, 0.66],
  //       vill_eqb: [0.4, 0.6, 0.0],
  //       explain: "We have 100% equity last to act so we always bet.",
  //     },
  //     player2_jack_bet: {
  //       strat: [1, 0],
  //       reach_prob: 0.16,
  //       hero_range: [0.33, 0.33, 0.33],
  //       vill_range: [0.0, 0.0, 1.0],
  //       hero_hand_eq: 0.0,
  //       hero_eqb: [0.66, 0.33, 0.0],
  //       vill_eqb: [0.0, 0.0, 1.0],
  //       explain: "We have 0% equity and can't bluff so we fold 100%.",
  //     },
  //     player2_queen_bet: {
  //       strat: [0.67, 0.33],
  //       reach_prob: 0.22,
  //       hero_range: [0.33, 0.33, 0.33],
  //       vill_range: [0.25, 0.0, 0.75],
  //       hero_hand_eq: 0.25,
  //       hero_eqb: [0.33, 0.33, 0.33],
  //       vill_eqb: [0.25, 0.0, 0.75],
  //       explain:
  //         "We have a bluff catcher vs villain's polar range. Getting 3:1 odds we call with the Minimum Defence Frequency of 67% to keep villain indifferent to bluffing us. When villain is bluffing, we have a K 50% and a Q 50% of the time. We call with a K 100%, and therefore call with a Q 33% to maintain the 67% MDF.",
  //     },
  //     player2_king_bet: {
  //       strat: [0, 1],
  //       reach_prob: 0.05,
  //       hero_range: [0.33, 0.33, 0.33],
  //       vill_range: [1.0, 0.0, 0.0],
  //       hero_hand_eq: 1.0,
  //       hero_eqb: [0.0, 0.33, 0.66],
  //       vill_eqb: [1.0, 0.0, 0.0],
  //       explain: "We have 100% equity so we always call.",
  //     },
  //   };
  //   // debugger;
  //   console.log("key ", key, " mockJsonData[key] ", mockJsonData[key]);
  //   return mockJsonData[key];

  if (!key) {
    return;
  }

  const docRef = doc(db, "kuhn-explanations", key);
  console.log("docRef = ", docRef);
  const docSnap = await getDoc(docRef);
  console.log("docSnap = ", docSnap);
  let kuhn: ScenerioResult | null = null;
  if (docSnap.exists()) {
    // @ts-ignore
    kuhn = docSnap.data();
    console.log("The program worked, and the returned data is... ", kuhn);
  } else {
    console.log("Data not found");
  }
  return NextResponse.json(kuhn);
}
