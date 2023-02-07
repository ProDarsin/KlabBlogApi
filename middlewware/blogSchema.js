import Joi from 'joi'


//blog validation

const blogScheam=Joi.object({
    tittle:Joi.string().min(3).max(20).required(),
    description:Joi.string().min(3).max(30).required(),
    
})

export default blogScheam