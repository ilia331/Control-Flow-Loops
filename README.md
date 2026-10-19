# Control Flow and Loops Exercises

Interactive HTML, CSS, and JavaScript solutions for the **Control Flow / Loops** exercises.

Each exercise is available as a separate folder in [`public/`](./public). The exercises are designed for beginners and demonstrate conditions, loops, functions, arrays, strings, dates, and basic mathematical operations.

## Exercises

| # | Exercise | Description |
|---:|---|---|
| 1 | [Odd or Even](./public/1-odd-or-even/) | Checks whether a number is odd or even. |
| 2 | [Greater of Two Numbers](./public/2-greater-of-two/) | Finds the greater of two numbers. |
| 3 | [Greater of Three Numbers](./public/3-greater-of-three/) | Finds the greatest of three numbers. |
| 4 | [Number 1...9 as Words](./public/4-number-1-9-as-words/) | Converts a number from 1 to 9 into a word. |
| 5 | [Number 0...100 as Words](./public/5-number-0-100-as-words/) | Converts a number from 0 to 100 into English words. |
| 6 | [Area of Figures](./public/6-area-of-figures/) | Calculates the area of a square, rectangle, or circle. |
| 7 | [Coffee Shop](./public/7-coffee-shop/) | Calculates a drink price with optional extras. |
| 8 | [Hotel Prices](./public/8-hotel-prices/) | Calculates hotel prices with seasonal discounts. |
| 9 | [Cosine and Sine](./public/9-cosine-and-sine/) | Displays cosine and sine values for a degree range. |
| 10 | [Numbers Sum](./public/10-numbers-sum/) | Calculates the sum of all numbers from 1 to `n`. |
| 11 | [Numbers Ending in 7](./public/11-numbers-ending-in-7/) | Prints numbers ending in 7 up to a limit. |
| 12 | [Letters in Range](./public/12-letters-in-range/) | Lists all letters between two letters. |
| 13 | [Vowels Sum](./public/13-vowels-sum/) | Calculates a value based on the vowels in text. |
| 14 | [Sum of Digits](./public/14-sum-of-digits/) | Adds all digits in an integer. |
| 15 | [Triangle of Stars](./public/15-triangle-of-stars/) | Draws a triangle made from stars. |
| 16 | [Building](./public/16-building/) | Generates a building layout with apartments and offices. |
| 17 | [Stupid Passwords](./public/17-stupid-passwords/) | Generates passwords using even and odd numbers. |
| 18 | [Combinations of 3 Letters](./public/18-combinations-of-3-letters/) | Generates three-letter combinations with an excluded letter. |
| 19 | [Happy Numbers](./public/19-happy-numbers/) | Generates four-digit numbers matching a target digit-sum rule. |

## How to run

No installation or build tools are required.

1. Clone or download this repository.
2. Open the `public` folder.
3. Open any exercise folder.
4. Open its `index.html` file in a web browser.
5. Enter values and use the button to run the exercise.

For a local development server, run the following from the repository root:

```bash
python -m http.server 8000 --directory public
```

Then open [http://localhost:8000](http://localhost:8000).

## Folder structure

```text
public/
├── 1-odd-or-even/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── README.md
├── ...
├── 19-happy-numbers/
└── styles.css
```

Each exercise contains:

- `index.html` — the user interface and input fields
- `script.js` — the exercise function and interaction logic
- `style.css` — exercise-specific styling
- `README.md` — a short exercise description

## Technologies

- HTML5
- CSS3
- JavaScript

## License

This project is intended for educational use.
