Hooks.once('diceSoNiceReady', (dice3d) => {
  const MOD_ID = 'skykings-dice';
  const mod = foundry.utils.getRoute(`modules/${MOD_ID}`);

  dice3d.addSystem({ id: MOD_ID, name: "Sky King's Tomb" });
  dice3d.addTexture('skystone', {
    name: 'Sky Stone',
    composite: 'multiply',
    source: `${mod}/assets/textures/stone.png`
  });

  dice3d.addColorset({
    name: 'Sky Kings Tomb',
    description: "Runen auf geschmiedetem Stein – Sky King's Tomb",
    category: "Sky King's Tomb",
    texture: 'skystone',
    foreground: '#ffb45a',
    background: '#2b2b2b',
    outline: '#caa36b',
    edge: '#8a5d2a',
    material: 'metal'
  }, 'preferred');

  const base = `${mod}/assets/labels`;
  const L = (die, faces) => faces.map(f => `${base}/${die}/${f}.png`);

  dice3d.addDicePreset({ type: 'd4',   labels: L('d4',  [1,2,3,4]),                      colorset: 'Sky Kings Tomb', system: MOD_ID });
  dice3d.addDicePreset({ type: 'd6',   labels: L('d6',  [1,2,3,4,5,6]),                  colorset: 'Sky Kings Tomb', system: MOD_ID });
  dice3d.addDicePreset({ type: 'd8',   labels: L('d8',  [1,2,3,4,5,6,7,8]),              colorset: 'Sky Kings Tomb', system: MOD_ID });
  dice3d.addDicePreset({ type: 'd10',  labels: L('d10', [0,1,2,3,4,5,6,7,8,9]),          colorset: 'Sky Kings Tomb', system: MOD_ID });
  dice3d.addDicePreset({ type: 'd12',  labels: L('d12', [1,2,3,4,5,6,7,8,9,10,11,12]),   colorset: 'Sky Kings Tomb', system: MOD_ID });
  dice3d.addDicePreset({ type: 'd20',  labels: L('d20', [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), colorset: 'Sky Kings Tomb', system: MOD_ID });
  dice3d.addDicePreset({ type: 'd100', labels: L('d100',['00','10','20','30','40','50','60','70','80','90']),  colorset: 'Sky Kings Tomb', system: MOD_ID });
});
