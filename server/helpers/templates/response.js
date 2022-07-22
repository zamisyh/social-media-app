exports.templateResponse = {
   200 : {
       type : 'object',
       properties: {
           success : { type: 'boolean' },
           message : { type: 'string' },
           data: {
               type: 'array'
           }
       }
   }
}