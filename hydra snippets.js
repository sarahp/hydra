Olivia Jack

osc(6, 0, 3)
  .color(1.14, 0.6,80)
  .rotate(0.92, 0.3)
  .pixelate(20, 10)
  .mult(osc(500, 0.03).thresh(6).rotate(0, -0.4))
  .modulateRotate(osc(20, 0).thresh(0.3, 0.6atom://welcome/welcome), () => 0.1 + mouse.x * 0.002)
  .out(o0)

  // by Rodrigo Velasco
// https://yecto.github.io/

osc(3, 0.2, 0).color(2, 0.7, 1).modulate(o1, 0.8).diff(o1).out(o0)
osc(() => (a.fft[0]*39), 0.2, 0).color(0, 1, 2).rotate(1.57).out(o1)
osc(30, 0.2, 0).out(o2)

// by Olivia Jack
// @_ojack_

osc(20, 0.01, 1.1)
	.kaleid(5)
	.color(2.83,0.91,0.39)
	.rotate(0, 0.1)
	.modulate(o0, () => mouse.x * 0.0003)
	.scale(1.01)
  	.out(o0)

    // by Zach Krall
    // http://zachkrall.online/

    osc(10, 0.9, 300)
    .color(0.9, 0.7, 0.8)
    .diff(
      osc(45, 0.3, 100)
      .color(0.9, 0.9, 0.9)
      .rotate(0.18)
      .pixelate(12)
      .kaleid()
    )
    .scrollX(10)
    .colorama()
    .luma()
    .repeatX(4)
    .repeatY(4)
    .modulate(
      osc(1, -0.9, 300)
    )
    .scale(2)
    .out()

    // by Sebastian Avila
// http://www.sebastian-avila.com/

a.show()
//SOUND

a.setScale (10  )
a.setBins (6)
//
a.settings[0].cutoff = 1
a.settings[1].cutoff = 2
a.settings[2].cutoff = 4
a.settings[3].cutoff = 6
a.settings[4].cutoff = 8
a.settings[5].cutoff = 9

shape(3).scale(()=> a.fft[4]*2 +1).kaleid(2)
.add(osc(12).colorama(1).color(2,3,4))
.blend(o0).color(0,1,1)
.blend(o0).rotate(()=> a.fft[1]*0.1 -0.2)
.scrollY(-0.32,-0.2)
.add(shape(7).color(2,1,0.5).repeat(-3,3).add(shape(2).scale(1).kaleid(5).color(0,1,0.5)).scrollY(()=> a.fft[0]*0.7 -0.1,-0.02)).scale(()=> a.fft[2]*0.2 -1)
//.scale(()=> a.fft[3]*2 -1)
.scrollY(-21,-0.2)
.rotate(-0.1,()=> a.fft[3]*0.02 -0.1)
.out(o0)
// by Rodrigo Velasco
// https://yecto.github.io/

.osc(3, 0.2, 0).color(2, 0.7, 1).modulate(o1, 0.8).diff(o1).out(o0)
.osc(() => (a.fft[0]*39), 0.2, 0).color(0, 1, 2).rotate(1.57).out(o1)
.osc(30, 0.2, 0).out(o2)

// by Nelson Vera
// twitter: @nel_sonologia



// Save of WIT Conference

//Darkness 2 & Fieldnotes

shape(1.25,0.7,0.25)
  .color(1,8,7)
  .repeat(3,6)
  .scale(2)
  .repeat(5, 5, ({time}) => Math.sin(time), ({time}) => Math.sin(time/4))
  .out(o0)

//First Day

osc(20,0.01,1.2)
	.kaleid(5)
	.color(3,4,5)
	.rotate(3, .7)
	.modulate(o1, () => mouse.x * 0.0003)
	.scale(0.7)
  .out(o1)

//Rabbitholes

voronoi(3,2,0.6)
  .color(5,5,3)
  .scale(3)
  .scrollY(0.8,0.6)
  .out(o2)

  src(o1)
    // .colorama(1)
    // .color(3,0,6)
    .rotate(1,2)
    .kaleid(5)
    .repeat(1, 1, ({time}) => Math.sin(time), ({time}) => Math.sin(time/5))
    .out(o3)

render(o3)


// acid bus seat
// by Will Humphreys
// https://github.com/TheWispy

osc(200).color(0.3,0.1,0.5
  ).rotate(0.30, 0.1).modulate(osc(10).rotate(0.8).add(o0, 0.1)).add(osc(13,0.01,1).color(0.3,0.8,1)).out(o0)
  osc(70,0.05, 0.6).color(1,0.6,0.2).diff(o0).modulate(o1,0.05).out(o1)
  //shape(1.25,0.7,0.23).color(0,0,0).kaleid(5).diff(o1).modulate(o2,0.5).out(o2)
  render(o1)

// by Rodrigo Velasco
// https://yecto.github.io/

osc(18, 0.1, 0).color(2, 0.1, 2)
.mult(osc(20, 0.01, 0)).repeat(2, 20).rotate(0.5).modulate(o1)
.scale(1, () =>  (a.fft[0]*0.9 + 2)).diff(o1).out(o0)
osc(20, 0.2, 0).color(2, 0.7, 0.1).mult(osc(40)).modulateRotate(o0, 0.2)
.rotate(0.2).out(o1)

// by Sebastian Avila
// http://www.sebastian-avila.com/

//

a.setScale (10  )
a.setBins (6)
//
a.settings[0].cutoff = 1
a.settings[1].cutoff = 2
a.settings[2].cutoff = 4
a.settings[3].cutoff = 6
a.settings[4].cutoff = 8
a.settings[5].cutoff = 9


shape(4).scale(()=> a.fft[4]*2 +1)
.blend(o0).add(shape(3).color(0,0,0.7))
.blend(o0).color(1,1,1)
.blend(o0).rotate(()=> a.fft[1]*0.1 -0.2)
.scrollY(-0.32,-0.2)
.add(shape(20).color(2,0,0).scrollY(()=> a.fft[0]*0.7 -0.1,-0.02)).scale(()=> a.fft[2]*0.7 -0.8)
.scale(()=> a.fft[3]*2 -1)
.modulate(o0,()=> a.fft[2]*0.1 -0.2)
.rotate(-0.1,()=> a.fft[3]*0.7 -0.1)
.out(o0)

osc(20, 0.03, 1.7).kaleid().mult(osc(20, 0.001, 0).rotate(1.58)).blend(o0, 0.94).modulateScale(osc(10, 0),-0.03).scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time))).out(o0)


// by Olivia Jack
// https://ojack.github.io

osc(6, 0, 0.8)
  .color(1.14, 0.6,.80)
  .rotate(0.92, 0.3)
  .pixelate(20, 10)
  .mult(osc(40, 0.03).thresh(0.4).rotate(0, -0.02))
  .modulateRotate(osc(20, 0).thresh(0.3, 0.6), () => 0.1 + mouse.x * 0.002)
  .out(o0)

  // by Nelson Vera
// twitter: @nel_sonologia

osc(8,-0.5, 1).color(-1.5, -1.5, -1.5).blend(o0).rotate(-0.5, -0.5).modulate(shape(4).rotate(0.5, 0.5).scale(2).repeatX(2, 2).modulate(o0, () => mouse.x * 0.0005).repeatY(2, 2)).out(o0)

// by Débora Falleiros Gonzales
// https://www.gonzalesdebora.com/

a.show()

a.hide()

a.show()
  osc(10)
  .repeat(5)
    .out(o0)

a.setSmooth(0.7)

a.setCutoff(6)

a.setScale(5)

a.setBins(6)

a.settings[0].cutoff = 2

a.settings[0].scale = 4

render(o0)



//Play time with Pam
// by Nelson Vera
// twitter: @nel_sonologia
osc(3,7,4).color(4, 3, 3).blend(o0).rotate(-2, -3).modulate(shape(5).rotate(-1.5, -1.4).scale(11).repeatX(3,3).modulate(o0, () => mouse.x * 0.0005).repeatY(14, 13)).kaleid(4).scale(-0.2).repeat(1,1).out(o0)

//Sarah and Pam Jam for Bridgeset, Secret Synth Society 8/3

osc(10, 0.9, 8)
.color(4, 9, 4)
.diff(
  osc(3, 0.7, 3)
  .color(6, 7, 9)
  .rotate(2,3)
  .pixelate(10)
  .kaleid(3)
  .scale(12)
)
.colorama(6, 7, 4)
.luma()
.modulate(
  osc(0.4, -0.9, 400)
)
.scale(11)
.out()

///no this one

a.hide()
a.show(
    osc(1, 0.9, 8)
    .color(4, 9, 4)
    .diff(
      osc(3, 0.7, 3)
      .color(6, 7, 4)
      .rotate(7)
      .pixelate(50)
      .kaleid(8)
    )
    .colorama(4, 7, 4)
    .modulate(
      osc(0.9, -0.9, 800)
      .kaleid()
    )
    .luma()
    .scale(1)
    .out()
  )

a.setSmooth(3)
a.setCutoff(6)
a.setScale(6)
a.setBins(6)

a.settings[0].cutoff = 2
a.settings[0].scale = 4


a.hide()
a.show(
    osc(1, 0.9, 8)
    .color(4, 9, 7)
    .diff(
      osc(3, 0.7, 30)
      .color(6, 7, 4)
      .rotate(7)
      .pixelate(50)
      .kaleid(2)
    )
    .colorama(4, 7, 4)
    .modulate(
      osc(0.9, 0.5, 800)
      .scale(10)
    )
    .luma()
    .scale(10)
    .out()
  )

a.setSmooth(3)
a.setCutoff(6)
a.setScale(6)
a.setBins(6)

a.settings[0].cutoff = 2
a.settings[0].scale = 4


//Saving again because I want to

a.hide()
a.show(
    osc(1, 0.9, 8)
    .color(4, 9, 7)
    .diff(
      osc(3, 0.7, 30)
      .color(6, 7, 4)
      .rotate(7)
      .pixelate(50)
      .kaleid(2)
    )
    .colorama(4, 7, 4)
    .modulate(
      osc(0.9, 0.5, 800)
      .scale(10)
    )
    .luma()
    .scale(10)
    .out()


a.setSmooth(3)
a.setCutoff(6)
a.setScale(6)
a.setBins(6)

a.settings[0].cutoff = 2
a.settings[0].scale = 4

// by Olivia Jack
// https://ojack.github.io

osc(4, 0.1, 0.8).color(1.04,0, -1.1).rotate(0.30, 0.1).pixelate(2, 20).modulate(noise(2.5), () => 1.5 * Math.sin(0.08 * time)).out(o0)


/// Cat Fans Practice

a.hide(
  osc(-2, 4, 4)
  .rotate(3)
  .color(2, 6, 4)
  .scale(10)
  .pixelate(30)
  .modulate(noise(1.4))
)
a.show(
    (osc(2, 1.8, 1.8)
    .color(2, 2.6, 1.5)
    .rotate(7)
    .pixelate(4, 10)
    .modulate(noise(1.25), () => 1.8 * Math.sin(0.11 * time))
    .scale(0.738)
    .repeat(1,1)
    .out(o0)
  )
  )

a.setSmooth(6)
a.setCutoff(4)
a.setScale(0.4)
a.setBins(6)

a.settings[0].cutoff = 2
a.settings[0].scale = 4
