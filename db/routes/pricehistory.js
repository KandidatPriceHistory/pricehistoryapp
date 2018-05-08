/*
CRUD operations:
POST /pricehistory (Creates a producthistory item)
LIST /pricehistory (Lists all producthistorys in the queue)
GET /pricehistory/:pricehistory_id (Gets a specific producthistory item in the queue)
PUT /pricehistory/:pricehistory_id (Updates a specific producthistory item in the queue)
DELETE /pricehistory/:pricehistory_id (Destroys a specific producthistory item in the queue)*/

/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema
 */
const Pricehistory = require('../models/pricehistory');


	/**
	 * POST
	 */
	server.post('/pricehistory', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		let pricehistory = new Pricehistory(data);
		pricehistory.save(function(err) {
			if (err) {
				console.error(err);
				return next(new errors.InternalError(err.message));
				next();
			}

			res.send(201);
			next();
		});
	});

	/**
	 * LIST
	 */
	server.get('/pricehistory', (req, res, next) => {
		Pricehistory.apiQuery(req.params, function(err, docs) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			}

			res.send(docs);
			next();
		});
	});

	/**
	 * GET
	 */
	server.get('/pricehistory/:pricehistory_id', (req, res, next) => {
		Pricehistory.findOne({ _id: req.params.pricehistory_id }, function(err, doc) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			}

			res.send(doc);
			next();
		});
	});

	/**
	 * UPDATE
	 */
	server.put('/pricehistory/:pricehistory_id', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		if (!data._id) {
			data = Object.assign({}, data, { _id: req.params.pricehistory_id });
		}

		Pricehistory.findOne({ _id: req.params.pricehistory_id }, function(err, doc) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			} else if (!doc) {
				return next(
					new errors.ResourceNotFoundError(
						'The resource you requested could not be found.',
					),
				);
			}

			Pricehistory.update({ _id: data._id }, data, function(err) {
				if (err) {
					console.error(err);
					return next(
						new errors.InvalidContentError(err.errors.name.message),
					);
				}

				res.send(200, data);
				next();
			});
		});
	});

	/**
	 * DELETE
	 */
	server.del('/pricehistory/:pricehistory_id', (req, res, next) => {
		Pricehistory.remove({ _id: req.params.pricehistory_id }, function(err) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			}

			res.send(204);
			next();
		});
	});
