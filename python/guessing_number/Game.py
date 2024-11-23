import random

class Game:
    random_number: int = 0

    def __init__(self, highest_number: int) -> None:
        self.highest_number: int = highest_number

    def set_random_number(self) -> None:
        self.random_number = random.randint(0,self.highest_number)

    def get_random_number(self) -> int:
        return self.random_number

    def guess_number(self, guess: int):
        if guess > self.random_number:
            print('Go lower...')
        if guess < self.random_number:
            print('Go higher...')
        if guess == self.random_number:
            print('Congratulations!')
