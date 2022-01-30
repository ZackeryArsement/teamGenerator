const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        // Positive Test
        it("should create an object with github and role properties", () => {
            const obj = new Engineer();
    
            expect("github" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });
    });

    describe("getGithub", () => {
        // Positive Test
        it("should return the github of an Engineer contruct", () => {
            const github = 'ZackeryArsement';

            const obj = new Engineer(null, null, null, 'ZackeryArsement', null);
    
            expect(obj.getGithub()).toEqual(github);
        });
    });

    describe("getRole", () => {
        // Positive Test
        it("should return the role of an Engineer contruct", () => {
            const role = 'Engineer';

            const obj = new Engineer(null, null, null, null, 'Engineer');
    
            expect(obj.getRole()).toEqual(role);
        });
    });
});