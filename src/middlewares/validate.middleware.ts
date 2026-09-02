import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

// ZodTypeAny = "any zod schema" - no generic argument needed,
// so this works for object, array, string - any schema passed in.
export const validate =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    try {
      // IMPORTANT: schema.parse() returns a NEW object with coerced/transformed
      // values (e.g. z.coerce.number() turns "25" into 25). We must assign that
      // result back to req.body/query/params, otherwise the original untouched
      // string values continue on to the controller and service layer.
      const parsed = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      req.body = parsed.body;
      req.query = parsed.query;
      req.params = parsed.params;

      next();
    } catch (error) {
      next(error);
    }
  };


  