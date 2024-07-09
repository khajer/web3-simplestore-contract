const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {
    it("should store the value 42", async () => {
        const instance = await SimpleStorage.deployed();
        await instance.set(42);
        const storedData = await instance.get();
        assert.equal(storedData, 42, "The value 42 was not stored.");
    });
});