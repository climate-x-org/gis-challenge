from src.losses_calculator import calculate_projected_losses, load_data


def main():
    data = load_data("data.json")
    total_projected_loss = calculate_projected_losses(data)
    print(f"Total Projected Loss: ${total_projected_loss:.2f}")


if __name__ == "__main__":
    main()
