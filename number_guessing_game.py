import random

def number_guessing_game():
    print("Welcome to the Number Guessing Game!")
    number_to_guess = random.randint(1, 20)
    guesses_taken = 0

    while guesses_taken < 6:
        try:
            player_guess = int(input("Take a guess (between 1 and 20): "))
            guesses_taken += 1

            if player_guess < 1 or player_guess > 20:
                print("Please guess a number between 1 and 20.")
                continue

            if player_guess < number_to_guess:
                print("Your guess is too low.")
            elif player_guess > number_to_guess:
                print("Your guess is too high.")
            else:
                break  # This condition is the correct guess
        except ValueError:
            print("Invalid input; please enter a number.")

    if player_guess == number_to_guess:
        print(f"Good job! You guessed the number in {guesses_taken} guesses!")
    else:
        print(f"Sorry! The number I was thinking of was {number_to_guess}.")

if __name__ == '__main__':
    number_guessing_game()