import random
from utils import validate_Int

# start
class DiceGame:
  is_playing: bool = True
  highest_number: int = 0
  many_dices: int = 0

  def set_dice_highest_number(self):
    self.highest_number = int(input('Higher number on the dice:\n'))
    validate_Int(self.highest_number)

  def set_many_dices(self):
    self.many_dices = int(input('How many dices?\n'))
    validate_Int(self.many_dices)

  def get_many_dices(self):
    return self.many_dices

  def play_game(self):
    user_input = input(f'Roll the dice? n/Y\n').lower()
    if user_input != 'y':
      self.is_playing = False

  def get_is_playing(self):
    return self.is_playing

  def roll_dice(self):
     result = random.randint(1,int(self.highest_number))
     print('Result: ', result)
     return result

def export():
  print('class DiceGame')
