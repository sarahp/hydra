a.hide(
)
a.show(
    osc(0.14, 0.06, 0.05)
      .color(3, -0.64, 8)
      .rotate(4)
      .pixelate(50)
      .kaleid(2))
    .colorama(2, 4, 0.9)
      .modulate(
        osc(5, 30, 10)
          // .scale(15)
          // .rotate(0,1)
      )
    .luma(-8)
    .scale(2)
    .kaleid(2)
    .repeat()
    .modulateScale(osc(4,0.1).thresh([.2,.7].fast(-4,0))
    .modulateRotate(osc(3,5).thresh([.9,.3]))
    .out(o0)
  )
)


a.setSmooth(3)
a.setCutoff(2)
a.setScale(0.4)
a.setBins(9)

a.settings[0].cutoff = 6
a.settings[0].scale = 2

//@SarahPStudio on Twitch, Twitter, YouTube, and Instagram.
//Brain Food playlist from Spotify
