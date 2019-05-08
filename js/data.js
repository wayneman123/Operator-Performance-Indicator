var accounts = [
  {
    id: 1,
    name: 'ABC Company',
    billing_state: 'GA',
    type: 'Customer - Direct',
    rating: 'Hot',
    industry: 'Technology',
    created_date: '3/3/2017'
  },
  {
    id: 2,
    name: 'Burlington Textiles Corp of America',
    billing_state: 'NC',
    type: 'Customer - Direct',
    rating: 'Warm',
    industry: 'Apparel',
    created_date: '6/19/2016'
  },
  {
    id: 3,
    name: 'CocaCola',
    billing_state: '',
    type: '',
    rating: '',
    industry: '',
    created_date: '8/19/2016'
  },
  {
    id: 4,
    name: 'Dickenson plc',
    billing_state: 'KS',
    type: 'Customer - Channel',
    rating: '',
    industry: 'Consulting',
    created_date: '6/19/2016'
  },
  {
    id: 5,
    name: 'Edge Communications',
    billing_state: 'TX',
    type: 'Customer - Direct',
    rating: 'Hot',
    industry: 'Electronics',
    created_date: '6/19/2016'
  },
  {
    id: 6,
    name: 'Express Logistics and Transport',
    billing_state: 'OR',
    type: 'Customer - Channel',
    rating: 'Warm',
    industry: 'Transportation',
    created_date: '6/19/2016'
  },
  {
    id: 7,
    name: 'GenePoint',
    billing_state: 'CA',
    type: 'Customer - Channel',
    rating: 'Cold',
    industry: 'Biotechnology',
    created_date: '6/19/2016'
  },
  {
    id: 8,
    name: 'Grand Hotels & Resorts Ltd',
    billing_state: 'IL',
    type: 'Customer - Direct',
    rating: 'Warm',
    industry: 'Hospitality',
    created_date: '6/19/2016'
  },
  {
    id: 9,
    name: 'Norfolk Southern',
    billing_state: 'VA',
    type: 'Customer - Channel',
    rating: 'Warm',
    industry: 'Transportation',
    created_date: '7/30/2016'
  },
  {
    id: 10,
    name: 'Pyramid Construction Inc.',
    billing_state: '',
    type: 'Customer - Channel',
    rating: '',
    industry: 'Construction',
    created_date: '6/19/2016'
  },
  {
    id: 11,
    name: 'United Oil & Gas, Singapore',
    billing_state: 'Singapore',
    type: 'Customer - Direct',
    rating: '',
    industry: 'Energy',
    created_date: '6/19/2016'
  },
  {
    id: 12,
    name: 'United Oil & Gas, UK',
    billing_state: 'UK',
    type: 'Customer - Direct',
    rating: '',
    industry: 'Energy',
    created_date: '6/19/2016'
  },
  {
    id: 13,
    name: 'United Oil & Gas Corp.',
    billing_state: 'NY',
    type: 'Customer - Direct',
    rating: 'Hot',
    industry: 'Energy',
    created_date: '6/19/2016'
  },
  {
    id: 14,
    name: 'University of Arizona',
    billing_state: 'AZ',
    type: 'Customer - Direct',
    rating: 'Warm',
    industry: 'Education',
    created_date: '6/19/2016'
  }
];

var contacts = [
  {
    AccountId: 13,
    Id: 1,
    FirstName: 'Betty',
    LastName: 'White',
    Phone: '',
    Email: ''
  },
  {
    AccountId: 13,
    Id: 2,
    FirstName: 'Betty',
    LastName: 'Rubble',
    Phone: '',
    Email: ''
  },
  {
    AccountId: 13,
    Id: 3,
    FirstName: 'Arthur',
    LastName: 'Song',
    Phone: '(212) 842-5500',
    Email: 'asong@uog.com'
  },
  {
    AccountId: 13,
    Id: 4,
    FirstName: 'Lauren',
    LastName: 'Boyle',
    Phone: '(212) 842-5500',
    Email: 'lboyle@uog.com'
  },
  {
    AccountId: 13,
    Id: 5,
    FirstName: 'Stella',
    LastName: 'Pavlova',
    Phone: '(212) 842-5500',
    Email: 'spavlova@uog.com'
  },
  {
    AccountId: 13,
    Id: 6,
    FirstName: 'Avi',
    LastName: 'Green',
    Phone: '(212) 842-5500',
    Email: 'agreen@uog.com'
  },
  {
    AccountId: 7,
    Id: 7,
    FirstName: 'Edna',
    LastName: 'Frank',
    Phone: '(650) 867-3450',
    Email: 'efrank@genepoint.com'
  },
  {
    AccountId: 11,
    Id: 8,
    FirstName: 'Liz',
    LastName: "D'Cruz",
    Phone: '(650) 450-8810',
    Email: 'ldcruz@uog.com'
  },
  {
    AccountId: 11,
    Id: 9,
    FirstName: 'Tom',
    LastName: 'Ripley',
    Phone: '(650) 450-8810',
    Email: 'tripley@uog.com'
  },
  {
    AccountId: 5,
    Id: 10,
    FirstName: 'Sean',
    LastName: 'Forbes',
    Phone: '(512) 757-6000',
    Email: 'sean@edge.com'
  },
  {
    AccountId: 5,
    Id: 11,
    FirstName: 'Rose',
    LastName: 'Gonzalez',
    Phone: '(512) 757-6000',
    Email: 'rose@edge.com'
  },
  {
    AccountId: 2,
    Id: 12,
    FirstName: 'Jack',
    LastName: 'Rogers',
    Phone: '(336) 222-7000',
    Email: 'jrogers@burlington.com'
  },
  {
    AccountId: 10,
    Id: 13,
    FirstName: 'Pat',
    LastName: 'Stumuller',
    Phone: '(014) 427-4427',
    Email: 'pat@pyramid.net'
  },
  {
    AccountId: 3,
    Id: 14,
    FirstName: 'Fred',
    LastName: 'Flintstone',
    Phone: '',
    Email: ''
  },
  {
    AccountId: 3,
    Id: 15,
    FirstName: 'Harry',
    LastName: 'Potter',
    Phone: '',
    Email: ''
  },
  {
    AccountId: 1,
    Id: 16,
    FirstName: 'Test',
    LastName: 'Lead',
    Phone: '',
    Email: 'testlead@abc.com'
  },
  {
    AccountId: 1,
    Id: 17,
    FirstName: 'Charley',
    LastName: 'Brown',
    Phone: '',
    Email: ''
  },
  {
    AccountId: 1,
    Id: 18,
    FirstName: 'Contact',
    LastName: 'Test',
    Phone: '',
    Email: 'test@abccompany.com'
  }
];

function findContactsByAccountId(id){
  return contacts.filter(function(item){
    return item.AccountId == id;
  });
};

function findAccountById(id){
  let account;
  for(let i=0; i< accounts.length; i++){
    if(accounts[i].id == id){
      account = accounts[i];
    }
  }
  if(account != null){
    return account;
  } else {
    throw new Error('Account not found');
  }
};

function findContactById(id){
  let contact;
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].Id == id){
      contact = contacts[i];
    }
  }
  if(contact != null){
    return contact;
  } else {
    throw new Error('Contact not found');
  }
};

function sortAccountsAsc(field){
  accounts.sort(function(a, b){
    if(a[field] < b[field]){
      return -1;
    }
    if(a[field] > b[field]){
      return 1;
    }

    return 0;
  });
};

function sortAccountsDesc(field){
  accounts.sort(function(a, b){
    if(a[field] > b[field]){
      return -1;
    }
    if(a[field] < b[field]){
      return 1;
    }

    return 0;
  });
};

function sortContactsAsc(field){
  contacts.sort(function(a, b){
    if(a[field] < b[field]){
      return -1;
    }
    if(a[field] > b[field]){
      return 1;
    }

    return 0;
  });
};

function sortContactsDesc(field){
  contacts.sort(function(a, b){
    if(a[field] > b[field]){
      return -1;
    }
    if(a[field] < b[field]){
      return 1;
    }

    return 0;
  });
};