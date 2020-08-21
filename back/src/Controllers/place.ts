import { Place } from "Models/place";
import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import getRandomInt from "Utils/getRandomint";

/**
 * POST /place
 * create new place.
 */
export const placeNew = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await check("name", "name is not valid").isLength({ min: 4 }).run(req);
  await check("description", "description is not valid")
    .isLength({ min: 4 })
    .run(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ msg: errors.array() });
  }
  const place = new Place({
    name: req.body.name,
    description: req.body.description,
    placeId: getRandomInt(999999),
  });
  place.save((err) => {
    if (err) {
      return next(err);
    }
    return res.send({
      placeId: place.placeId,
    });
  });
};

/**
 * GET /place/all
 * get all place.
 */
export const placeGetAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Place.find()
    .sort({ updatedAt: -1 })
    .exec((err, existedPlace) => {
      if (err) {
        return next(err);
      }
      if (existedPlace.length) {
        return res.send({
          existedPlace,
        });
      }
      return res.send({
        msg: "no place found",
        existedPlace,
      });
    });
};

/**
 * GET /place/:id
 * get one place.
 */
export const placeGetOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Place.findOne({ placeId: req.params.placeId }).exec((err, existedPlace) => {
    if (err) {
      return next(err);
    }
    if (existedPlace) {
      return res.send({
        msg: "get place",
        existedPlace,
      });
    }
    return res.send({
      msg: "no place found",
    });
  });
};

/**
 * put /place/
 * update a place.
 */
export const placeUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await check("name", "name is not valid").isLength({ min: 4 }).run(req);
  await check("description", "description is not valid")
    .isLength({ min: 4 })
    .run(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors.array());
  }

  const place = {
    name: req.body.name,
    description: req.body.description,
  };

  Place.findByIdAndUpdate(req.body.id, place, (err, updatedPlace) => {
    if (err) {
      return next(err);
    }
    if (updatedPlace) {
      return res.send({
        msg: `place updated to${updatedPlace}`,
      });
    }
  });
};

/**
 * del /place
 * get all place.
 */
export const placeDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Place.deleteOne({ placeId: req.params.placeId }, (err) => {
    if (err) {
      return next(err);
    }
    return res.send({
      msg: `place with id ${req.params.placeId} deleted`,
      placeId: req.params.placeId,
    });
  });
};
