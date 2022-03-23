/// <reference types="cypress" />

it("external test...",()=>{
    const a=1;
    expect(a).equal(1);
    expect(a,"deveria ser 1").equal(1);
    expect("b").to.be.equal("b");
    expect("b").not.to.be.equal("a");
})

it("bolean",()=>{
    const a=true;
    const b =null;
    let c;
    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it("objetos equality",()=>{
    const obj = {
        a: 1,
        b:2
    }
    expect(obj).equals(obj);
    expect(obj).equal(obj);
    expect(obj).eql(obj); 
    expect(obj).to.be.equal(obj); 
    expect(obj).to.be.deep.equal({ a:1,b:2}); 
    expect(obj).eql({ a:1,b:2}); 
    expect(obj).include({ a:1}); 
    expect(obj).to.have.property('b'); 
    expect(obj).to.have.property('b',2); 
    expect(obj).to.not.be.empty; 
})

it("array",()=>{
    const arr = [1,2,3 ]
        
    expect(arr).to.be.members([1,2,3])
    expect(arr).to.be.include.members([1,2,3])
})

it("Types",()=>{
    const num =1; 
    const str= "String";
        
    expect(num).to.be.a("number")
    expect(str).to.be.a("String")
    expect({ }).to.be.a("object")
    expect([]).to.be.a("array")
})