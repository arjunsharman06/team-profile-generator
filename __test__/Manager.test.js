const Manager = require('../lib/Manager');

test('create an intern object', () => {

    // Contructor call
    const manager = new Manager('John', 10, 'xyz@xyz.com', '123-456-8795');

    expect(manager.name).toBe('John');
    expect(manager.id).toStrictEqual(expect.any(Number));
    expect(manager.email).toMatch(new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$'));
    expect(manager.officeNumber).toMatch(new RegExp('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$'));
});

//getName
test('get the intern name', () => {
    const manager = new Manager('John', 10, 'xyz@xyz.com', '123-456-8795');

    expect(manager.getName()).toBe('John');
});

//getId()
test('get the manager id', () => {
    const manager = new Manager('John', 10, 'xyz@xyz.com', '123-456-8795');

    expect(manager.getId()).toBe(10);
});

//getEmail()
test('get the manager email', () => {
    const manager = new Manager('John', 10, 'xyz@xyz.com', '123-456-8795');

    expect(manager.getEmail()).toBe("xyz@xyz.com");
});

//getRole()
test('get the manager role', () => {
    const manager = new Manager('John', 10, 'xyz@xyz.com', '123-456-8795');

    expect(manager.getRole()).toBe(Manager);
});

//getOfficeNumber()
test('get the manager officeNumber', () => {
    const manager = new Manager('John', 10, 'xyz@xyz.com', '123-456-8795');

    expect(manager.getOfficeNumber()).toBe('123-456-8795'
    );
}); 