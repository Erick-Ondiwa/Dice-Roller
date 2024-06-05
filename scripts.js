const dice_input =document.getElementById('num_of_dice');
const dice_nums =document.getElementById('dice_nums');
const disp_imgs =document.getElementById('dice_imgs');
const roll_button =document.getElementById('roll');

let diceNums = [];
let diceImgs = [];
function rollDice(){
  let dice_to_roll = dice_input.value;
  for(let i = 1; i <= dice_to_roll; i++){

    let dice_rolled = Math.floor(Math.random() * 6) + 1;
    diceNums.push(dice_rolled);

    diceImgs.push(`<img src="images/${dice_rolled}.png" alt="">`);
  }
}
roll_button.addEventListener('click', ()=>{
  rollDice();

  dice_nums.textContent = `dice: ${diceNums.join(", ")}`;
  disp_imgs.innerHTML = `${diceImgs.join(" ")}`;
});