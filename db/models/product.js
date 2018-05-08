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
const ProductSchema = new mongoose.Schema(
	{
		manufacturer: {
			id: {
				type: String,
				required: true,
			}
		},
		minPrice: {
			value: {
				type: String,
				required: true,
			},
			currency: {
				type: String,
				required: true,
			}
		},
		maxPrice: {
			value: {
				type: String,
				required: true,
			},
			currency: {
				type: String,
				required: true,
			}
		},
		offers: [
			{
				id: {
					type: String,
					required: true,
				},
				price: {
					type: String,
					required: true,
				},
				currency:{
					type: String,
					required: true,
				},
				productName: {
					type: String,
					required: true,
				},
				retailerLogo: {
					type: String,
					required: false,
				},
				retailerName: {
					type: String,
					required: true,
				}
			}
		],
		name:{
      type: String,
      required: true,
    },
		id: {
      type: String,
      required: true,
    },
		productImages: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ minimize: false },
);

ProductSchema.plugin(timestamps);
ProductSchema.plugin(mongooseStringQuery);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
