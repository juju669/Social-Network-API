const router = require("express").Router();

const{
    getAllThought,
    getThoughtByID,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
    getThoughtById
} = require("../../controllers/thought-controller");

router.route("/")
    .get(getAllThought);

router.route('/:userId')
    .post(createThought);

router.route("/:thoughtId")
    .get(getThoughtById)
    .put(updateThought);

router.route("/:userId/:thoughtId")
    .delete(deleteThought);

router.route("/:thoughtId/reactions")
    .post(createReaction)
    

router.route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction)

module.exports = router