const express = require('express');
const routes = express.Router();
const dbo = require('./dbconn');

function prepareQuery(queryObj) {
  for (let key of Object.keys(queryObj)) {
    queryObj[key] = parseInt(queryObj[key]);
  }
  return queryObj;
} 

routes.route('/hunt').get(async function (req, res) {
  const dbConnect = await dbo.getDb();
  const query = prepareQuery(req.query);
  // console.log(query);
  dbConnect.collection('hunt')
    .find(query)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching hunts!');
      } else {
        res.json(result);
      }
    });
});

routes.route('/season').get(async function (req, res) {
  const dbConnect = await dbo.getDb();
  dbConnect.collection('season').find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching seasons!', err);
      } else {
        res.json(result);
      }
    });
});

routes.route('/wma').get(async function (req, res) {
  const dbConnect = await dbo.getDb();
  dbConnect.collection('wma').find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching wmas!', err);
      } else {
        res.json(result);
      }
    });
});

routes.route('/weapon').get(async function (req, res) {
  const dbConnect = await dbo.getDb();
  dbConnect.collection('weapon').find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching weapons!', err);
      } else {
        res.json(result);
      }
    });
});

routes.route('/hunttype').get(async function (req, res) {
  const dbConnect = await dbo.getDb();
  dbConnect.collection('huntType').find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching huntTypes!', err);
        console.log(err);
      } else {
        res.json(result);
      }
    });
});

routes.route('/huntertype').get(async function (req, res) {
  const dbConnect = await dbo.getDb();
  dbConnect.collection('hunterType').find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching hunterTypes!', err);
      } else {
        res.json(result);
      }
    });
});

// This section will help you create a new record.
// recordRoutes.route('/listings/recordSwipe').post(function (req, res) {
//   const dbConnect = dbo.getDb();
//   const matchDocument = {
//     listing_id: req.body.id,
//     last_modified: new Date(),
//     session_id: req.body.session_id,
//     direction: req.body.direction,
//   };

//   dbConnect
//     .collection('matches')
//     .insertOne(matchDocument, function (err, result) {
//       if (err) {
//         res.status(400).send('Error inserting matches!');
//       } else {
//         console.log(`Added a new match with id ${result.insertedId}`);
//         res.status(204).send();
//       }
//     });
// });

// This section will help you update a record by id.
// recordRoutes.route('/listings/updateLike').post(function (req, res) {
//   const dbConnect = dbo.getDb();
//   const listingQuery = { _id: req.body.id };
//   const updates = {
//     $inc: {
//       likes: 1,
//     },
//   };

//   dbConnect
//     .collection('listingsAndReviews')
//     .updateOne(listingQuery, updates, function (err, _result) {
//       if (err) {
//         res
//           .status(400)
//           .send(`Error updating likes on listing with id ${listingQuery.id}!`);
//       } else {
//         console.log('1 document updated');
//       }
//     });
// });

// This section will help you delete a record.
// recordRoutes.route('/listings/delete/:id').delete((req, res) => {
//   const dbConnect = dbo.getDb();
//   const listingQuery = { listing_id: req.body.id };

//   dbConnect
//     .collection('listingsAndReviews')
//     .deleteOne(listingQuery, function (err, _result) {
//       if (err) {
//         res
//           .status(400)
//           .send(`Error deleting listing with id ${listingQuery.listing_id}!`);
//       } else {
//         console.log('1 document deleted');
//       }
//     });
// });

module.exports = routes;