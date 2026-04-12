import random

def number_guessing_game():
    guess = 0 
    secret_number = 4

    while guess != secret_number:
        guess = int(input('Guess the number 1-10')
        if guess != secret_number:
            print('Wrong guess! Try again.')
    
    print('You got the right answer! The secret number is 4!')

number_guessing_game():
