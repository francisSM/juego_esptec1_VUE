import { createRouter, createWebHistory } from 'vue-router'; // Asegúrate de importar estos métodos
import GameCharacters from '../components/GameCharacters.vue';
import BattleStages from '../components/BattleStages.vue';
import SpecialMoves from '../components/SpecialMoves.vue';

const routes = [
  { path: '/characters', component: GameCharacters },
  { path: '/stages', component: BattleStages },
  { path: '/moves', component: SpecialMoves },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
