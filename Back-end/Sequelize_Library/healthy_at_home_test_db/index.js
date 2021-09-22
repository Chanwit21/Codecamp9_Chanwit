const {
  sequelize,
  User,
  CourseService,
  UserTrainerWorkoutScheduleFoodSchedule,
  WorkoutSchedule,
  ExercisePostureWorkoutSchedule,
  ExercisePosture,
} = require('./db');

const run = async () => {
  //Create User
  //   const result = await User.create({
  //     role: 'TRAINER',
  //     firstName: 'Chanwit',
  //     lastName: 'Pansila',
  //     nickName: 'Bomb',
  //     weight: 60,
  //     height: 171,
  //     phoneNumber: '0896789xxx',
  //     gender: 'MALE',
  //     image: null,
  //     education: 'KMITL',
  //   });
  //   //get user
  //   const result = await User.findAll();
  //   console.log(JSON.stringify(result, null, 2));
};
run();
