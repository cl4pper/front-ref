import random
# const variables
shouldContinue = 'y'
shouldStop = 'n'

# start
class DiceGame:
  highestNumber = 0
  manyDices = 0

  def validateInt(self, _):
    try:
      int(_)
      return _
    except:
      print(f'{_} is not a int!')

  def setDiceHighestNumber(self):
    self.highestNumber = input('Higher number on the dice:\n')
    return self.validateInt(self.highestNumber)

  def setManyDices(self):
    self.manyDices = input('How many dices?\n')
    return self.validateInt(self.manyDices)

  def startGame(self):
    return input(f'Roll the dice? ({shouldContinue.upper()}/{shouldStop})\n').lower()

  def rollDice(self):
     result = random.randint(1,int(self.highestNumber))
     print('Result: ', result)
     return result

# execution
game = DiceGame()

game.startGame()
game.setManyDices()
game.setDiceHighestNumber()
game.rollDice()
