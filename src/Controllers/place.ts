import { Place } from "../Models/place";
import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

/**
 * POST /place/new
 * create new place.
 */
export const placeNew = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await check("name", "name is not valid")
    .isLength({ min: 4 })
    .run(req);
  await check("description", "description is not valid")
    .isLength({ min: 4 })
    .run(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors.array());
  }

  const place = new Place({
    name: req.body.name,
    description: req.body.description,
  });

  Place.find(
    {
      name: req.body.name,
    },
    (err, existedPlace) => {
      if (err) {
        return next(err);
      }
      if (existedPlace.length) {
        return res.send({
          msg: "place with this name already exists."
        });
      }
      place.save(err => {
        if (err) {
          return next(err);
        }
        return res.send({
          msg: "new place saved",place
        });
      });
    }
  );
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
Place.find().sort({updatedAt: -1}).exec((err, existedPlace) => {
  if (err) {
    return next(err);
  }
  if (existedPlace.length) {
    return res.send({
      msg: "get all place",existedPlace
    });
  }
    return res.send({
      msg: "no place found"
    });
  })
    }



/**
 * del /place/:id
 * get all place.
 */
export const placeDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
Place.deleteOne({_id:req.params.id},(err)=>{
  if (err) {
    return next(err);
  }
  return res.send({
    msg: `place with id ${req.params.id} deleted`
  });
})
}
