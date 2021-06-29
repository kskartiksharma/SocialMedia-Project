const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const CreatePostSchema = new Schema({
    postHeading: {
        type: 'string',
        required: true,
        maxLength: 60
    },
    postDescription: {
        type: 'string',
        required: true,
        maxLength: 10000
    }
    // img:
    // {
    //     data: 'Buffer',
    //     contentType: 'String'
    // }
  
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('post',CreatePostSchema);