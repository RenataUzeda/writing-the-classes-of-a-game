# Hero Class

This JavaScript class represents a generic hero for an adventure game. The hero has properties like `name`, `age`, and `type`, and a method called `attack` that displays an attack message based on the hero's type. It was developed to meet the project challenge of the Bootcamp 'Programando do Zero' taught by DIO in partnership with Potência Tech By iFood.

## Usage

1. **Create a Hero Instance:**
    ```javascript
    const hero = new Hero("Aragorn", 30, "warrior");
    ```

2. **Invoke the Attack Method:**
    ```javascript
    hero.attack();
    ```

    This will log a message indicating the hero's type and the attack used.

## Example

```javascript
// Create hero instances
const hero1 = new Hero("Aragorn", 30, "warrior");
const hero2 = new Hero("Gandalf", 150, "mage");

// Invoke the attack method
hero1.attack(); // Outputs: The warrior attacked using sword
hero2.attack(); // Outputs: The mage attacked using magic
