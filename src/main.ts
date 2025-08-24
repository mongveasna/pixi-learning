// import * as PIXI from 'pixi.js'

import { Application, Sprite, Assets } from 'pixi.js'

async function main() {
  // 1. Create the application without options
  const app = new Application()
  await app.init({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb, // or "0x1099bb"
  })

  // 3. Append the canvas to your container
  // 2) Mount the canvas
  document.getElementById('game-root')?.appendChild(app.canvas)

  const bunnyTex = await Assets.load(
    'https://png.pngtree.com/png-vector/20240103/ourmid/pngtree-blank-playing-card-ace-spades-bet-png-image_11049998.png'
  )
  const bunny = new Sprite(bunnyTex)
  //   bunny.scale.x *= 1
  bunny.anchor.set(0.5)
  bunny.position.set(app.renderer.width / 2, app.renderer.height / 2)

  // 4) Interactivity (v8 style)
  bunny.eventMode = 'static'
  bunny.cursor = 'pointer'
  bunny.on('pointerdown', () => (bunny.rotation += 0.5))
  app.stage.addChild(bunny)
}

main()
