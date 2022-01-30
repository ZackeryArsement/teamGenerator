const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        // Positive Test
        it("should create an object with school and role properties", () => {
            const obj = new Manager();
    
            expect("officeNumber" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });
    });

    describe("getOfficeNumber", () => {
        // Positive Test
        it("should return the office number of a Manager contruct", () => {
            const office = '213';

            const obj = new Manager(null, null, null, '213', null);
    
            expect(obj.getOfficeNumber()).toEqual(office);
        });
    });

    describe("getRole", () => {
        // Positive Test
        it("should return the role of a Manager contruct", () => {
            const role = 'Manager';

            const obj = new Manager(null, null, null, null, 'Manager');
    
            expect(obj.getRole()).toEqual(role);
        });
    });
});