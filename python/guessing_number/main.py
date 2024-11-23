from Game import Game
from utils import validate_int

while True:
  isPlaying = input('Wanna guess the number? Y/n\n').lower()

  if  isPlaying != 'y':
    break

  highest_number = validate_int(input('What number is supposed to be the highest?\n'))
  # highest_number could be set internally (class Game)
  # so the class would be instantiate only once.
  # actual: it's being called everytime we start playing to set the highest_number
  game = Game(highest_number)
  game.set_random_number()
  guess: int = 0

  while game.get_random_number() != guess:
    guess = validate_int(input('What is your guess?\n'))
    game.guess_number(guess)
