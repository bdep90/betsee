'use strict';
let Project    = require('./models/project.js');
// let Pattern    = require('./models/pattern.js');
let mongoose   = require('mongoose');

// Connect to db
mongoose.connect('mongodb://localhost/betsee', (err) => {
  if (err) {
    console.log('Seed file connection error: ' + err);
  };
});

let defProject = new Project({
  author: 'Betsy',
  email: 'betsy@betsy.com',
  project_title: 'Monkey Patch',
  refimg: 'https://img1.etsystatic.com/021/1/5470386/il_570xN.494989529_lshk.jpg',
  img: 'http://cdn.craftsy.com/upload/910448/project/75233/full_5095_75233_AmigurumiMonkeyCrochetedMonkey_5.jpg',
  pattern: {
    supplies: 'yarn and needle',
    steps: [
      'Ch. 4. Join.', 'Rnd 1: Ch. 2. Single stitch around. (8)', 'Rnd 2: Ch 2. Single st.  I, I, II... arnd. (12)', 'Rnd 3: Ch 2. (16)', 'Rnd  4: Ch 2. I, II... (24)'
    ],
    source: 'Etsy'
  }
});

let defProjectOne = new Project({
  author: 'Bettie',
  email: 'bettie@bettie.com',
  project_title: 'Quilt Squares',
  refimg: 'https://img0.etsystatic.com/033/0/5837061/il_570xN.607786336_ahom.jpg',
  img: 'http://devilduckie.net/wp-content/uploads/2012/07/386999_10151034690728871_1654385672_n.jpg',
  pattern: {
    supplies: 'another yarn and needle',
    steps: [
      'Ch. 20. Join.', 'Rnd 1: Ch. 2. Single stitch around. (8)'
    ],
    source: 'Etsy1'
  }
});

// let defPattern = new Pattern({
//   supplies: 'yarn and needle',
//   steps: [
//     'Ch. 4. Join.', 'Rnd 1: Ch. 2. Single stitch around. (8)', 'Rnd 2: Ch 2. Single st.  I, I, II... arnd. (12)', 'Rnd 3: Ch 2. (16)', 'Rnd  4: Ch 2. I, II... (24)'
//   ],
//   source: 'Etsy',
//   _project: defProject._id
// });
//
// let defPatternOne = new Pattern({
//   supplies: 'another yarn and needle',
//   steps: [
//     'Ch. 20. Join.', 'Rnd 1: Ch. 2. Single stitch around. (8)'
//   ],
//   source: 'Etsy1',
//   _project: defProjectOne._id
// });


defProject.save((err) => {
  if (err) {
    console.log(err)
  } //else {
  //   defPattern.save((err) => {
  //     if (err) {
  //       console.log('Unable to save pattern' + err);
  //     } else {
  //       defProject.pattern.push(defPattern);
  //     }
  //   });
  //   defProject.save;
  // };
});

defProjectOne.save((err) => {
  if (err) {
    console.log(err)
  } //else {
  //   defPatternOne.save((err) => {
  //     if (err) {
  //       console.log('Unable to save patternOne' + err);
  //     } else {
  //       defProjectOne.pattern.push(defPatternOne);
  //     }
  //   });
  //   defProjectOne.save;
  // };
});
