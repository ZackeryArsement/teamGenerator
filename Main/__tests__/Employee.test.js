const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        // Positive Test
        it("should create an object with name, id, and email properties", () => {
            const obj = new Employee();
    
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });
    });

    describe("getName", () => {
        // Positive Test
        it("should return the name of an Employee contruct", () => {
            const name = 'Zackery';

            const obj = new Employee('Zackery');
    
            expect(obj.getName()).toEqual(name);
        });
    });

    describe("getID", () => {
        // Positive Test
        it("should return the ID of an Employee contruct", () => {
            const id = '2';

            const obj = new Employee(null, '2', null);
    
            expect(obj.getID()).toEqual(id);
        });
    });

    describe("getEmail", () => {
        // Positive Test
        it("should return the email of an Employee contruct", () => {
            const email = 'zarsement@hotmail.com';

            const obj = new Employee(null, null, 'zarsement@hotmail.com');
    
            expect(obj.getEmail()).toEqual(email);
        });
    });

    describe("getRole", () => {
        // Positive Test
        it("should return the role of an Employee contruct", () => {
            const role = 'Employee';

            const obj = new Employee(null, null, null);
    
            expect(obj.getRole()).toEqual(role);
        });
    });
})