'use strict';
angular.module('Pattern', []).controller('PatternCtrl', PatternCtrl);

function PatternCtrl () { //constructor function
  this.addPattern = () => {
    this.patterns.push({
      supplies: this.formPatternSupplies,
      steps: [this.formPatternSteps],
      source: this.formPatternSource
    });
  }

  this.allPatterns = () => {
    return patterns;
  }

  this.updateOnePattern = () => {
    this.patterns.findOneAndUpdate({ _id: ObjectId }, (error) => {
      console.log(error);
    })
  }

  return this
}
