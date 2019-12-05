let numConstactor = require("./models/numbers");
var prepare = (o) => {
  o._id = o._id.toString()
  return o
}

module.exports =  resolvers = {
  Query: {
    hello: () => "hi",
    numbers:  async () => {
      return (await numConstactor.find().exec())
    }
  },
  Mutation: {
    createNumber: async (_, { number1,number2 }) => {
      let  molt =number1* number2
      let add = number1+ number2
      let num = {
        number1 : number1,
        number2 : number2,
        addNumber  :add,
        moltNumber : molt,
        
      }
      const numder = new numConstactor(num);
      numder.save()
      console.log(numder);
      return  numder;
    },
    removeNumber: async (_, { id }) => {
      console.log(id);
     await num.findOneAndDelete({_id : id })
     return "done"
    },
    editNumber : async (_, { number1,number2,id}) => {
      let  molt =number1* number2
      let add = number1+ number2
      let num = {
        number1 : number1,
        number2 : number2,
        addNumber  :add,
        moltNumber : molt,
        
      }
      await num.updateOne({_id : id } , num )
      return "hello"
  },

}
}
