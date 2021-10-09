import { Checkout } from "../src/Checkout";

test("Should buy items", () => {
    const input = {
        cpf: "48.019.541-9",
        items: [
            {
                id: 1,
                quantity: 1
            },
            {
                id: 2,
                quantity: 2
            },
            {
                id: 3,
                quantity: 3
            }
        ]
    }

    const checkout = new Checkout();
    const output = checkout.execute(input);
    expect(output.total).toBe(640);
});

test("Shouldn't accept unexistent item", () => {
    const checkout = new Checkout();
    const input = {
        cpf: "48.019.541-9",
        items: [
            {
                id: 99999,
                quantity: 2
            }
        ]
    };
    expect(() => checkout.execute(input)).toThrow('Item not found');
})