<template>
  <svg id="coffee" width="240" height="240"></svg>
</template>
<script>
export default {
  mounted(){
    let coffeeCanvas = new Zdog.Illustration({
      // set canvas with selector
      element: '#coffee',
      dragRotate: true,
      rotate: { x: Zdog.TAU/5 }
    });

    let cupGroup = new Zdog.Group({
      addTo: coffeeCanvas,
    });

    // add circle
    let cupPart = new Zdog.Ellipse({
      addTo: cupGroup,
      diameter: 70,
      // quarters: 2,
      stroke: 10,
      color: 'white',
      // rotate: { x: Zdog.TAU/4 },
      // translate: { x: 50, z: 20 },
    });
    cupPart.copy({ translate: { z: 5 } });
    cupPart.copy({ translate: { z: 10 } });
    cupPart.copy({ translate: { z: 15 } });
    cupPart.copy({ translate: { z: 20 } });
    cupPart.copy({ translate: { z: -5 }, scale: .95 });
    cupPart.copy({ translate: { z: -10 }, scale: .9 });
    cupPart.copy({ translate: { z: -15 }, scale: .8 });
    cupPart.copy({ translate: { z: -20 }, scale: .7 });
    cupPart.copy({ translate: { z: -22.5 }, scale: .6 });
    cupPart.copy({ translate: { z: -25 }, scale: .5 });
    cupPart.copy({ translate: { z: -27.5 }, scale: .4 });
    cupPart.copy({ translate: { z: -30 }, scale: .25, fill: true });
    new Zdog.Ellipse({
      addTo: cupGroup,
      diameter: 25,
      quarters: 2,
      stroke: 10,
      color: 'white',
      rotate: { x: Zdog.TAU/4 },
      translate: { x: 40, z: 5 },
    });

    new Zdog.Ellipse({
      addTo: coffeeCanvas,
      diameter: 120,
      stroke: 10,
      fill: true,
      color: 'white',
      translate: { z: -40 },
    });
    new Zdog.Ellipse({
      addTo: coffeeCanvas,
      diameter: 90,
      fill: true,
      color: '#efefef',
      translate: { z: -35 },
    });

    // add coffee
    let coffeeGroup = new Zdog.Group({
      addTo: coffeeCanvas,
    });
    // new Zdog.Hemisphere({
    //   addTo: coffeeGroup,
    //   diameter: 60,
    //   stroke: false,
    //   color: '#201816',
    //   rotate: { x: Zdog.TAU/2 },
    // });
    // new Zdog.Cylinder({
    //   addTo: coffeeGroup,
    //   diameter: 60,
    //   length: 20,
    //   stroke: false,
    //   color: '#201816',
    //   rotate: { x: Zdog.TAU/2 },
    //   translate: { z: 10 },
    // });
    new Zdog.Cylinder({
      addTo: coffeeGroup,
      diameter: 60,
      length: 0,
      stroke: false,
      color: '#201816',
      rotate: { x: Zdog.TAU/2 },
      translate: { z: 20 },
    });

    let smokeGroup = new Zdog.Group({
      addTo: coffeeCanvas,
      rotate: { x: Zdog.TAU/4 },
      translate: { z: 40 },
    });
    let smokePart = new Zdog.Shape({
      addTo: smokeGroup,
      path: [
        { x: 0, y: -15 }, // start
        { bezier: [
          { x: -10, y: 0 }, // start control point
          { x: 10, y: 0 }, // end control point
          { x: 0, y: 15 }, // end point
        ]},
      ],
      closed: false,
      stroke: 10,
      color: 'rgba(255,255,255,.55)',
      translate: { x: 15, z: -10 },
    });
    smokePart.copy({ translate: { x: -15, z: -10 } });
    smokePart.copy({ translate: { x: 0, z: 10, y: 5 } });

    // update & render
    let smokeDirection = 'up';
    function animate() {
      // console.log(smokeGroup.translate.z);
      if (smokeGroup.translate.z > 50) {
        smokeDirection = 'down';
      } else if (smokeGroup.translate.z < 40){
        smokeDirection = 'up';
      }
      smokeGroup.translate.z += smokeDirection == 'up' ? 0.1 : -0.1;
      coffeeCanvas.updateRenderGraph();
      requestAnimationFrame(animate);
    }

    animate();
  },
}
</script>
<style lang="scss" scoped>
#coffee {
  background-color: #6e4228;
  background: radial-gradient(#956f5a 0%, #6e4228 100%);
  cursor: move;
  width: 100%;
  height: 100%;
}
</style>
