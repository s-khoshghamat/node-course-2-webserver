const Idea = require('idea');
const { incentive, energy } = require('saman');

const newIdea = new Idea('Create something for someone.');

newIdea.start();

if (incentive <= 0 || energy <= 0) {
  newIdea.keepDreaming();
}
