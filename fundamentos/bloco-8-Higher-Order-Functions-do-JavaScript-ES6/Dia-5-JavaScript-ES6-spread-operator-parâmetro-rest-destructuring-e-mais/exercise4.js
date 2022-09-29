const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
      // bornIn: nascido em
  ];
  
  const filterPeople =(pessoas)=>{
  return  pessoas.filter((pessoa)=>{
        if (pessoa.nationality === 'Australian' && pessoa.bornIn > 1900 && pessoa.bornIn <= 2000 ) {
            return pessoa
        }
    })
  }

  console.log(filterPeople(people))