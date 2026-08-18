export function expectedScore(rating:number, opponent:number){return 1/(1+Math.pow(10,(opponent-rating)/400));}
export function calculateElo(rating:number, opponent:number, actual:0|0.5|1, gamesPlayed:number){const k=gamesPlayed<30?32:16;return Math.round(rating+k*(actual-expectedScore(rating,opponent)));}
export const TIERS=[
 {name:'Quartz',min:0},{name:'Amethyst',min:300},{name:'Topaz',min:600},{name:'Emerald',min:900},{name:'Sapphire',min:1200},{name:'Ruby',min:1500},{name:'Diamond',min:1800},{name:'Obsidian',min:2100}
];
export function tierForElo(elo:number){return [...TIERS].reverse().find(t=>elo>=t.min)?.name??'Quartz';}
