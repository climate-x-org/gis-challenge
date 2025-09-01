# Geo Engineer Assessment

## Exercise 1: Correcting and Enhancing the Loss Calculation Script

### Task Description
You are provided with a Python script and a JSON file (`data.json`) containing data for five buildings. This script is designed to calculate total projected financial losses, taking into account factors such as inflation over time, the probability of hazard occurrence, and the process of discounting future losses to their present value.

### Requirements
- **Future Cost Calculation:** Calculate the future construction cost by adjusting the current cost using the inflation rate as an exponent. This method compounds the cost annually, reflecting the cumulative effect of inflation over the specified number of years.
- **Risk-Adjusted Loss Calculation:** Determine the risk-adjusted loss by modifying the future construction cost with the likelihood of experiencing a hazard. For each building, multiply its future construction cost by its hazard probability to assess the potential financial impact if the hazard were to occur.
- **Discounting to Present Value:** To calculate the present value of the estimated future losses, apply a discounting process that reflects the principle that future financial losses are less valuable in today's terms. For each building, determine the present value by dividing the risk-adjusted cost by the discount rate plus one. This method translates the future financial impact into an equivalent amount in today's dollars, considering the time value of money.
- **Total Projected Loss Calculation:** Sum the present values of the estimated losses from all buildings to arrive at the total projected financial impact. This total provides a comprehensive view of the potential losses across the portfolio, combining all individual risk assessments.

### Data Structure
Each entry in the `data.json` file includes:
- `buildingId`: Identifier for the building
- `floor_area`: Floor area in square meters
- `construction_cost`: Construction cost per square meter
- `hazard_probability`: Likelihood of experiencing a climate-related hazard
- `inflation_rate`: Annual inflation rate applicable to the construction cost

### Instructions
- Review and correct any errors in the provided Python script.
- Ensure the script accurately implements the calculations as described.
- Output the total projected financial loss after running the script.

## Exercise 2: Implementing a Complex Mathematical Loss Formula

### Task Description
Implement a complex mathematical formula in Python to calculate the potential financial losses estimate ('LE') using detailed attributes of the same five buildings.

### Complex Loss Calculation Formula
$$
LE = \left( \text{Construction Cost} \times e^{(\text{Inflation Rate} \times \text{Floor Area} / 1000)} \times \text{Hazard Probability} \right) / \left(1 + \text{Standard Discount Rate}\right)^{\text{Number of Years}}
$$

### Expected Output
The script should output the individual and total estimated losses for all properties.

### Instructions
- Decompose and implement the specified complex loss estimation formula using data from `data.json`.
- Ensure the output is accurate and reflective of the calculated losses.

## Exercise 3: Scaling the Loss Calculation Model

### Task Description
Provide a written explanation of how you would scale your Python script from Exercise 2 to efficiently handle a dataset of 1,000,000 buildings.

### Requirements
- **Scalability Analysis**: Evaluate the current script's performance with a larger dataset.
- **Optimization Strategies**: Suggest improvements for script efficiency and scalability.
- **Resource Management**: Discuss how to effectively manage memory and processing power for large datasets.
- **Example Code**: Optionally, include Python code snippets that showcase your scalability solutions.

### Expected Submission
- **Written Explanation**: Detail your strategy for scaling the script, including recommended technologies or methods and their effectiveness.
- **Code Snippets**: Optionally, include Python code snippets that showcase your scalability solutions.

## Development Tools

This project uses modern Python development tools to help you write clean, maintainable code:

### Code Quality Tools
```bash
# Lint your code for style and potential issues
uv run lint          # or: uv run ruff check

# Auto-fix common linting issues
uv run fix           # or: uv run ruff check --fix

# Format your code according to project standards
uv run format        # or: uv run ruff format
```

### Running Your Code
```bash
# Run the main script (executes the losses calculator)
uv run loss          # or: uv run python src/main.py
```

These tools will help you identify and fix issues in your code as you work through the exercises.
