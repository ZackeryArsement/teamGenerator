const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        // Positive Test
        it("should create an object with school and role properties", () => {
            const obj = new Intern();
    
            expect("school" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });
    });

    describe("getSchool", () => {
        // Positive Test
        it("should return the github of an Intern contruct", () => {
            const github = 'UT Austin';

            const obj = new Intern(null, null, null, 'UT Austin', null);
    
            expect(obj.getSchool()).toEqual(github);
        });
    });

    describe("getRole", () => {
        // Positive Test
        it("should return the role of an Intern contruct", () => {
            const role = 'Intern';

            const obj = new Intern(null, null, null, null, 'Intern');
    
            expect(obj.getRole()).toEqual(role);
        });
    });
});