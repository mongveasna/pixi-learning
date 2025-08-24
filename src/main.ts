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
  const sprite = new Sprite(bunnyTex)
  //   bunny.scale.x *= 1
  sprite.anchor.set(0.5)
  sprite.position.set(app.renderer.width / 2, app.renderer.height / 2)

  // 4) Interactivity (v8 style)
  //   sprite.eventMode = 'static'
  sprite.cursor = 'pointer'
  sprite.on('pointerdown', () => (sprite.rotation += 0.5))
  app.stage.addChild(sprite)

  const keys: Record<string, boolean> = {}
  window.addEventListener('keydown', (e) => (keys[e.code] = true))
  window.addEventListener('keyup', (e) => (keys[e.code] = false))
  app.ticker.add((ticker) => {
    const dt = ticker.deltaTime // numeric
    // console.log(dt)
    sprite.rotation += 0.05 * dt
    const speed = 5 * dt
    if (keys['ArrowLeft']) sprite.x -= speed
    if (keys['ArrowRight']) sprite.x += speed
    if (keys['ArrowUp']) sprite.y -= speed
    if (keys['ArrowDown']) sprite.y += speed
  })
}

main().catch(console.error)
