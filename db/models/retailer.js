/*
Models are fancy constructors compiled from our Schema definitions.
Basically, they allow us to tell the database what to store and instances
of these models represent documents which can be saved and retrieved from
our database via Mongoose. All document creation and retrieval from the
database is handled by these models.
- https://getstream.io/blog/building-rest-api-node-js-restify-mongodb/

*/
const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');
/* Our `mongoose-timestamp` module will add the createdAt and updatedAt
timestamps for us, and MongoDB will automatically generate a UUID called _id.
*/
const RetailerSchema = new mongoose.Schema(
	{
    retailerid: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
			type: String,
			required: true,
			trim: true,
		},
    link: {
			type: String,
			required: true,
		},
    retailer_name:{
      type: String,
      required: true,
    },
	},
	{ minimize: false },
);

RetailerSchema.plugin(timestamps);
RetailerSchema.plugin(mongooseStringQuery);

const Retailer = mongoose.model('Retailer', RetailerSchema);
module.exports = Retailer;
