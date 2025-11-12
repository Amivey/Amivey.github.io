$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(350, 650, 50, 25, "Red");
    createPlatform(450, 550, 50, 25, "Orange");
    createPlatform(650, 500, 50, 25, "Yellow");
    createPlatform(800, 400, 3, 100, "Black");
    createPlatform(800, 399, 100, 3, "Black");
    createPlatform(750, 500, 52, 3, "Black");
    createPlatform(900, 400, 3, 300, "Black");
    createPlatform(900, 700, 100, 3, "Black");
    createPlatform(900, 520, 20, 3, "Orange");
    createPlatform(1000, 400, 3, 300, "Black");
    createPlatform(1000, 400, 30, 3, "Black");
    createPlatform(1000, 600, 100, 3, "Black");
    createPlatform(1100, 400, 3, 200, "Black");
    createPlatform(1200, 400, 3, 200, "Black");
    createPlatform(1200, 400, 30, 3, "Black");
    createPlatform(1300, 550, 30, 3, "Orange");


    // TODO 3 - Create Collectables
    createCollectable("database", 900, 480, 0, 0);
    createCollectable("diamond", 450, 510, 0, 0);
    createCollectable("database", 1300, 510, 0, 0);
    // TODO 4 - Create Cannons
    createCannon("top", 650, 600);
    createCannon("top", 1000, 1000);
    createCannon("top", 1400, 250);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
