const express = require("express");
const router = express.Router();

class SightingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:sightingId", this.controller.getOne.bind(this.controller)); //why the bind keyword
    router.post("/", this.controller.createSightings.bind(this.controller))
    return router;
  }
}

module.exports = SightingsRouter;
