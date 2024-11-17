import random

# start
class DiceGame:
  is_playing = True
  highest_number = 0
  many_dices = 0

  def validate_Int(self, _):
    try:
      int(_)
      return _
    except:
      print(f'{_} is not a int!')

  def set_dice_highest_number(self):
    self.highest_number = input('Higher number on the dice:\n')
    return self.validate_Int(self.highest_number)

  def set_many_dices(self):
    self.many_dices = input('How many dices?\n')
    return self.validate_Int(self.many_dices)

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
