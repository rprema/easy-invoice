let invoices = [{
  id: 50,
  invoiceNumber: 100,
  invoiceStatus: 'PAID',
  invoiceDate: '10/8/2019',
  dueDate: '4/6/2017',
  invoiceName: 'Miller, Sanford and Schulist',
  companyInfo: {
    name: 'Oyoba',
    address: '5567 Larry Avenue',
    email: 'lcloughton0@washingtonpost.com',
    phone: '275-616-1939'
  },
  clientId: 1,
  invoiceItems: [
    {
      itemName: 'Zontrax',
      cost: 39,
      quantity: 94
    }
  ],
  settings: {
    currency: 'Ruble',
    taxPercentage: 45,
    discount: 19
  }
}, {
  id: 59,
  invoiceNumber: 93,
  invoiceStatus: 'DRAFT',
  invoiceDate: '8/22/2018',
  dueDate: '3/18/2017',
  invoiceName: 'Stokes-Schroeder',
  companyInfo: {
    name: 'Wordpedia',
    address: '2 Brentwood Avenue',
    email: 'igravell1@sun.com',
    phone: '562-785-2327'
  },
  clientId: 2,
  invoiceItems: [
    {
      itemName: 'Bitwolf',
      cost: 26,
      quantity: 61
    },
    {
      itemName: 'Bamity',
      cost: 70,
      quantity: 23
    },
    {
      itemName: 'Trippledex',
      cost: 20,
      quantity: 85
    },
    {
      itemName: 'Subin',
      cost: 38,
      quantity: 11
    },
    {
      itemName: 'Zontrax',
      cost: 2,
      quantity: 81
    }
  ],
  settings: {
    currency: 'Euro',
    taxPercentage: 60,
    discount: 58
  }
}, {
  id: 2,
  invoiceNumber: 56,
  invoiceStatus: 'PENDING',
  invoiceDate: '8/14/2016',
  dueDate: '12/26/2018',
  invoiceName: 'Ryan-Pfeffer',
  companyInfo: {
    name: 'Fadeo',
    address: '067 Browning Court',
    email: 'pdunston2@wsj.com',
    phone: '686-312-4471'
  },
  clientId: 3,
  invoiceItems: [
    {
      itemName: 'Pannier',
      cost: 81,
      quantity: 41
    }
  ],
  settings: {
    currency: 'Leu',
    taxPercentage: 69,
    discount: 12
  }
}, {
  id: 28,
  invoiceNumber: 4,
  invoiceStatus: 'OVERDUE',
  invoiceDate: '9/13/2019',
  dueDate: '12/14/2016',
  invoiceName: 'Smith-Schmeler',
  companyInfo: {
    name: 'Yadel',
    address: '1 Carberry Park',
    email: 'edust3@dailymotion.com',
    phone: '953-287-7565'
  },
  clientId: 4,
  invoiceItems: [
    {
      itemName: 'Konklab',
      cost: 84,
      quantity: 15
    },
    {
      itemName: 'Duobam',
      cost: 3,
      quantity: 3
    }
  ],
  settings: {
    currency: 'Peso',
    taxPercentage: 92,
    discount: 39
  }
}, {
  id: 35,
  invoiceNumber: 75,
  invoiceStatus: 'PENDING',
  invoiceDate: '4/30/2017',
  dueDate: '3/15/2016',
  invoiceName: 'Hartmann, Grimes and Bechtelar',
  companyInfo: {
    name: 'Zoomzone',
    address: '858 Columbus Parkway',
    email: 'mjeacop4@time.com',
    phone: '154-942-1641'
  },
  clientId: 5,
  invoiceItems: [
    {
      itemName: 'Zoolab',
      cost: 34,
      quantity: 82
    },
    {
      itemName: 'Bytecard',
      cost: 22,
      quantity: 72
    }
  ],
  settings: {
    currency: 'Som',
    taxPercentage: 96,
    discount: 100
  }
}, {
  id: 9,
  invoiceNumber: 90,
  invoiceStatus: 'PAID',
  invoiceDate: '10/7/2018',
  dueDate: '8/26/2016',
  invoiceName: 'Greenholt-Langworth',
  companyInfo: {
    name: 'Browsezoom',
    address: '2 Kropf Circle',
    email: 'mkaroly5@bbb.org',
    phone: '207-756-5908'
  },
  clientId: 6,
  invoiceItems: [
    {
      itemName: 'Zontrax',
      cost: 72,
      quantity: 9
    },
    {
      itemName: 'Tempsoft',
      cost: 94,
      quantity: 72
    },
    {
      itemName: 'Toughjoyfax',
      cost: 58,
      quantity: 94
    },
    {
      itemName: 'Pannier',
      cost: 97,
      quantity: 11
    },
    {
      itemName: 'Overhold',
      cost: 66,
      quantity: 38
    }
  ],
  settings: {
    currency: 'Kuna',
    taxPercentage: 95,
    discount: 72
  }
}, {
  id: 71,
  invoiceNumber: 38,
  invoiceStatus: 'OVERDUE',
  invoiceDate: '5/16/2016',
  dueDate: '10/3/2016',
  invoiceName: 'Mitchell-Daugherty',
  companyInfo: {
    name: 'Eayo',
    address: '5 Alpine Trail',
    email: 'sbraiden6@dagondesign.com',
    phone: '271-824-3745'
  },
  clientId: 7,
  invoiceItems: [
    {
      itemName: 'Sonsing',
      cost: 91,
      quantity: 74
    },
    {
      itemName: 'Viva',
      cost: 48,
      quantity: 21
    },
    {
      itemName: 'Biodex',
      cost: 98,
      quantity: 88
    },
    {
      itemName: 'Quo Lux',
      cost: 70,
      quantity: 15
    },
    {
      itemName: 'Alphazap',
      cost: 2,
      quantity: 11
    }
  ],
  settings: {
    currency: 'Yen',
    taxPercentage: 97,
    discount: 20
  }
}, {
  id: 70,
  invoiceNumber: 1,
  invoiceStatus: 'DRAFT',
  invoiceDate: '6/14/2017',
  dueDate: '10/5/2017',
  invoiceName: 'Rath Group',
  companyInfo: {
    name: 'Tagopia',
    address: '18 Welch Street',
    email: 'dhinder7@blog.com',
    phone: '477-367-9369'
  },
  clientId: 8,
  invoiceItems: [
    {
      itemName: 'Fixflex',
      cost: 54,
      quantity: 99
    },
    {
      itemName: 'Sonair',
      cost: 49,
      quantity: 74
    },
    {
      itemName: 'Stronghold',
      cost: 64,
      quantity: 53
    }
  ],
  settings: {
    currency: 'Rupiah',
    taxPercentage: 53,
    discount: 9
  }
}, {
  id: 46,
  invoiceNumber: 71,
  invoiceStatus: 'PAID',
  invoiceDate: '3/25/2017',
  dueDate: '7/16/2017',
  invoiceName: 'Kessler LLC',
  companyInfo: {
    name: 'Mynte',
    address: '65 Forest Dale Plaza',
    email: 'mfruen8@economist.com',
    phone: '193-183-9129'
  },
  clientId: 9,
  invoiceItems: [
    {
      itemName: 'Asoka',
      cost: 82,
      quantity: 37
    }
  ],
  settings: {
    currency: 'Shilling',
    taxPercentage: 4,
    discount: 61
  }
}, {
  id: 50,
  invoiceNumber: 31,
  invoiceStatus: 'PENDING',
  invoiceDate: '10/11/2017',
  dueDate: '8/18/2016',
  invoiceName: 'Hahn and Sons',
  companyInfo: {
    name: 'BlogXS',
    address: '1 Golf Course Lane',
    email: 'owearn9@scribd.com',
    phone: '920-348-7655'
  },
  clientId: 10,
  invoiceItems: [
    {
      itemName: 'Keylex',
      cost: 20,
      quantity: 43
    },
    {
      itemName: 'Stringtough',
      cost: 38,
      quantity: 90
    },
    {
      itemName: 'Treeflex',
      cost: 88,
      quantity: 34
    }
  ],
  settings: {
    currency: 'Yuan Renminbi',
    taxPercentage: 41,
    discount: 10
  }
}];
export default invoices;
