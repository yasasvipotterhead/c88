
// Create canvas variable
var canvas = new.fabric.canvas('myCanvas')
//Set initial positions for ball and hole images.

ball_x =0
ball_y=0
hole_x=400
hole_y=800
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img))
   hole_obj =Img
   hole_obj.scaleToWidth(50)
hole_obj.scaleToHeight(50)
hole_obj.set({
	top: hole_y
	left:hole_x
})

	new_image();
}

function new_image()
{
	function load_img(){
		fabric.Image.fromURL("ball.png", function(Img))
	   ball_obj =Img
	   ball_obj_obj.scaleToWidth(50)
	ball_obj.scaleToHeight(50)
	ball_obj.set({
		top: ball_y
		left:ball_x
	})
	
		new_image();
	}// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x == hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj)
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		{
			if(ball_y<=450){
			 ball_y=ball_y+block_image_height
			  console.log("blovk image height = "+ block_image_height)
   console.log("When up arrrow key is pressed ,x"+ ball_x)
   canvas.remove(ball_obj)
   new_image()
   
			}	// Write a code to move ball upward.
	}

	function down()
	{
		 if(ball_y<=450){
          ball_y=ball_y+block_image_height
           console.log("blovk image height = "+ block_image_height)
console.log("When down arrrow key is pressed ,x"+ ball_x)
canvas.remove(ball_obj)
new_image()

		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			/	{
				if(ball_y<=450){
				 ball_y=ball_y+block_image_height
				  console.log("blovk image height = "+ block_image_height)
	   console.log("When down arrrow key is pressed ,x"+ ball_x)
	   canvas.remove(ball_obj)
	   new_image()
	   
				}/ Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			{
				if(ball_y<=450){
				 ball_y=ball_y+block_image_height
				  console.log("blovk image height = "+ block_image_height)
	   console.log("When down arrrow key is pressed ,x"+ ball_x)
	   canvas.remove(ball_obj)
	   new_image()
	   
				}// Write a code to move ball right side.
		}
	}
	
}

