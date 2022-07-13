const Intern = require('../lib/Intern');

test('create an intern object',() =>{

    // Contructor call
    const intern = new Intern('John',10,'xyz@xyz.com','School');

    expect(intern.name).toBe('John');
    expect(intern.id).toStrictEqual(expect.any(Number));
    expect(intern.email).toMatch(new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$'));
    expect(intern.school).toBe('School');
});

    //getName
    test('get the intern name', ()=>{
        const intern = new Intern('John',10,'xyz@xyz.com','School');

        expect(intern.getName()).toBe('John');
    });

    //getId()
    test('get the intern id', ()=>{
        const intern = new Intern('John',10,'xyz@xyz.com','School');

        expect(intern.getId()).toBe(10);
    });

    //getEmail()
    test('get the intern email', ()=>{
        const intern = new Intern('John',10,'xyz@xyz.com','School');

        expect(intern.getEmail()).toBe("xyz@xyz.com");
    });

    //getRole()
    test('get the intern role', ()=>{
        const intern = new Intern('John',10,'xyz@xyz.com','School');

        expect(intern.getRole()).toBe(Intern);
    });

    //getSchool()
    test('get the intern school', ()=>{
        const intern = new Intern('John',10,'xyz@xyz.com','School');
        expect(intern.getSchool()).toBe("School"
            );
    }); 