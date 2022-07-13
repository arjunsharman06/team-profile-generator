const Engineer = require('../lib/Engineer');

test('create an engineer object',() =>{

    // Contructor call
    const engineer = new Engineer('John',10,'xyz@xyz.com','joker');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toStrictEqual(expect.any(Number));
    expect(engineer.email).toMatch(new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$'));
    expect(engineer.github).toMatch(new RegExp('([a-z0-9](?:-(?=[a-z0-9])|[a-z0-9]){0,38}(?<=[a-z0-9]))'));
});

    //getName
    test('get the engineer name', ()=>{
        const engineer = new Engineer('John',10,'xyz@xyz.com','joker');

        expect(engineer.getName()).toBe(engineer.name);
    });

    //getId()
    test('get the engineer id', ()=>{
        const engineer = new Engineer('John',10,'xyz@xyz.com','joker');

        expect(engineer.getId()).toBe(engineer.id);
    });

    //getEmail()
    test('get the engineer email', ()=>{
        const engineer = new Engineer('John',10,'xyz@xyz.com','joker');

        expect(engineer.getEmail()).toBe(engineer.email );
    });

    //getRole()
    test('get the engineer role', ()=>{
        const engineer = new Engineer('John',10,'xyz@xyz.com','joker');

        expect(engineer.getRole()).toBe(Engineer);
    });

    //getGithub()
    test('get the engineer github', ()=>{
        const engineer = new Engineer('John',10,'xyz@xyz.com','joker');
        expect(engineer.getGitHub()).toBe(engineer.github
            );
    }); 