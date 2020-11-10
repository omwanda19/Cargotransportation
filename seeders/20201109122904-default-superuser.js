

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Admin',[{
      f_Name:"jacob",
      l_Name:"Omwanda",
      email:"omwanda@gmail.com",
      contact:"7324729",
      pwd:"c355vnj"

    },
    {
      f_Name:"Ronald",
      l_Name:"Atsali",
      email:"omusula@gmail.com",
      contact:"73247329",
      pwd:"c355vnj"

    },{
      f_Name:"felix",
      l_Name:"welima",
      email:"welima@gmail.com",
      contact:"73247029",
      pwd:"c355vnj3"
    },{
      f_Name:"godon",
      l_Name:"anda",
      email:"godon@gmail.com",
      contact:"73274729",
      pwd:"c355vnj"
    }
  ]);
  await queryInterface.bulkInsert('Deliverer',[{
    
      f_Name:"musa",
      l_Name:"musita",
      email:"musita@gmail.com",
      contact:"7324729",
      pwd:"c355vnj"

    },
    {
      f_Name:"buju",
      l_Name:"mark",
      email:"mark@gmail.com",
      contact:"73247329",
      pwd:"c355vnj"

    },{
      f_Name:"dennis",
      l_Name:"aswani",
      email:"aswani@gmail.com",
      contact:"73247029",
      pwd:"c355vnj3"
    },{
      f_Name:"haruni",
      l_Name:"moki",
      email:"anda@gmail.com",
      contact:"73274729",
      pwd:"c355vnj"
    }

  ])
  

  await queryInterface.bulkInsert('product',[{
    productid:567346,
    DateSubmitted:2020-09-09,
    is_delivered:false,
    destination:"kwisero",
    reciever_contact:097373798
  },
{
  productid:5673406,
  DateSubmitted:2020-09-09,
  is_delivered:false,
  reciever_contact:09373798,
 destination:"kakamega"
},{
  productid:5673416,
  DateSubmitted:2020-09-09,
  is_delivered:false,
  reciever_contact:09773798,
    destination:"Busia"
},{
  productid:5673436,
  DateSubmitted:2020-09-09,
  is_delivered:false,
  reciever_contact:09737398,
    destination:"kisumu"
}
])
await queryInterface.bulkInsert('Client',[{
  f_Name:"marion",
  l_Name:"auma",
  email:"auma@gmail.com",
  contact:"7324729",
  pwd:"c355vnj"

},
{
  f_Name:"olgah",
  l_Name:"Awinjah",
  email:"Awinjah@gmail.com",
  contact:"73247329",
  pwd:"c355vnj"

},{
  f_Name:"morin",
  l_Name:"akola",
  email:"akola@gmail.com",
  contact:"73247029",
  pwd:"c355vnj3"
},{
  f_Name:"agness",
  l_Name:"musula",
  email:"anda@gmail.com",
  contact:"73274729",
  pwd:"c355vnj"
}
]);




    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
