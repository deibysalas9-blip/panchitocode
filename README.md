# ⚔️ Joc de Batalla per Torns

Projecte TypeScript — Llicència de programació

## Estructura del projecte

```
batalla/
├── src/
│   ├── Character.ts   → Classe personatge (atac, defensa, vida)
│   ├── Team.ts        → Classe equip (3 personatges)
│   ├── Player.ts      → Classe jugador (nom + equip)
│   ├── Game.ts        → Lògica principal del joc (torns, guanyador)
│   └── main.ts        → Punt d'entrada, configuració dels jugadors
├── dist/              → Codi compilat (generat per tsc)
├── tsconfig.json
└── package.json
```

## Instal·lació i ús

```bash
npm install
npm run build       # compila TypeScript → dist/
node dist/main.js   # executa el joc
```

Per compilar en mode watch (mentre desenvolopes):

```bash
npm run dev
```

## Regles del combat

- Cada jugador té **3 personatges**
- S'ataquen per torns (P1 ataca → P2 contraataca)
- Dany = `attackPower - defense` (mínim 1)
- Quan un personatge mor, entra el següent
- Guanya el jugador amb personatges vius al final

## Diagrama de classes

```
Character          Team                 Player          Game
─────────          ────                 ──────          ────
-name              -characters[]   1    -name           -player1
-health            +addCharacter() ─◆── -team           -player2
-attackPower       +getCharacters()     +getTeam()      +start()
-defense           +getActive()         +getName()
+attack(target)    +hasAlive()
+takeDamage(n)     +showStatus()
+isAlive()
+showStatus()
+getName()
```
