
const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');
/* Our `mongoose-timestamp` module will add the createdAt and updatedAt
timestamps for us, and MongoDB will automatically generate a UUID called _id.
*/
const PricehistorySchema = new mongoose.Schema(
	{
    productid: {
      type: String,
      required: true,
    },
    retailerid: {
			type: String,
			required: true,
		},
    price: {
			type: String,
			required: true,
		},
    date:{
      type: String,
      required: true,
    },
	},
	{ minimize: false },
);

PricehistorySchema.plugin(timestamps);
PricehistorySchema.plugin(mongooseStringQuery);

const Pricehistory = mongoose.model('Pricehistory', PricehistorySchema);
module.exports = Pricehistory;
