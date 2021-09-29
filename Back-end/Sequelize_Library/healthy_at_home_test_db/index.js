const { v4: uuidv4 } = require('uuid');
const {
  sequelize,
  User,
  CourseService,
  UserTrainerWorkoutScheduleFoodSchedule,
  WorkoutSchedule,
  ExercisePostureWorkoutSchedule,
  ExercisePosture,
  FoodSchedule,
} = require('./db');

const genArrayToCreateWorkoutSchedule = (num, id) => {
  const arrayResult = [];
  for (let i = 1; i <= num; i++) {
    let row = {};
    row.day = `Day${i}`;
    row.userTrainerWorkoutScheduleFoodScheduleId = id;
    arrayResult.push(row);
  }
  return arrayResult;
};

const run = async () => {
  //Create User
  // const result = await User.create({
  //   role: 'TRAINER',
  //   firstName: 'Chanwit',
  //   lastName: 'Pansila',
  //   nickName: 'Bomb',
  //   weight: 60,
  //   height: 171,
  //   phoneNumber: '0896789xxx',
  //   gender: 'MALE',
  //   image: null,
  //   education: 'KMITL',
  // });
  // const result = await User.create({
  //   role: 'CUSTOMER',
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   nickName: 'John',
  //   weight: 60,
  //   height: 171,
  //   phoneNumber: '0896789xxx',
  //   gender: 'MALE',
  //   image: null,
  //   education: null,
  // });

  //   //get user
  // const result = await User.findAll();
  // Create Course
  // const result = await CourseService.create({
  //   name: '45 Days Program',
  //   imageLink1: '../../PIC/Course/pexels-jacoby-clarke-1933524.jpg',
  //   imageLink2: '../../PIC/Service Program/pexels-karolina-grabowska-4378879.jpg',
  //   price: 15000,
  //   title: 'Suitable for people who want to change their shape in a short time.',
  //   day: 45,
  // });

  //Create When Registered Course
  //  ถ้า add ไม่ได้เกิดจาก id ไม่ตรง
  // const result = await UserTrainerWorkoutScheduleFoodSchedule.create({
  //   loseWeightBefore: null,
  //   desease: null,
  //   dateStart: '2021-09-23',
  //   foodAllergic: null,
  //   typeOfFood: 'all-types',
  //   trainerId: '1ef6ae6e-c333-4fa7-9042-d0f1166e9883',
  //   userId: 'e63759db-5dbe-4718-882c-ea2cfad0cc2b',
  //   courseServiceId: '73440511-6bea-45f4-b887-bb0435b3aa79',
  // });
  // Create Workoutschedule By Date
  // const result = await WorkoutSchedule.bulkCreate(
  //   genArrayToCreateWorkoutSchedule(7, '94141d02-7261-4a7f-8672-4e9af9d8ed3d')
  // );
  // find WorkoutSchedule
  // const result = await WorkoutSchedule.findAll({
  //   order: ['day'],
  // });

  //Create Exercise Poseture
  // const result = await ExercisePosture.bulkCreate([
  //   { name: 'One', link: '', type: 'Arm' },
  //   { name: 'Two', link: '', type: 'Core & Abs' },
  //   { name: 'Three', link: '', type: 'Core & Abs' },
  //   { name: 'Four', link: '', type: 'Full Body' },
  //   { name: 'Five', link: '', type: 'Chest' },
  //   { name: 'Six', link: '', type: 'Butt' },
  //   { name: 'Seven', link: '', type: 'Chest' },
  //   { name: 'Eight', link: '', type: 'Arm' },
  //   { name: 'nine', link: '', type: 'Full Body' },
  //   { name: 'Ten', link: '', type: 'Core & Abs' },
  // ]);
  //INSERT exercise_posture_workout_schedule
  // const result = await ExercisePostureWorkoutSchedule.bulkCreate([
  //   {
  //     col: 'col1',
  //     exercisePostureId: '1d2f6fe7-4192-4256-8503-3ecfe38e6e85',
  //     workoutScheduleId: '1cd1b8a1-105b-433f-a6fe-69a9444eedfc',
  //   },
  //   {
  //     col: 'col2',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1cd1b8a1-105b-433f-a6fe-69a9444eedfc',
  //   },
  //   {
  //     col: 'col3',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1cd1b8a1-105b-433f-a6fe-69a9444eedfc',
  //   },
  //   {
  //     col: 'col4',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1cd1b8a1-105b-433f-a6fe-69a9444eedfc',
  //   },
  //   {
  //     col: 'col5',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1cd1b8a1-105b-433f-a6fe-69a9444eedfc',
  //   },
  //   {
  //     col: 'col6',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1cd1b8a1-105b-433f-a6fe-69a9444eedfc',
  //   },
  //   {
  //     col: 'col7',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1cd1b8a1-105b-433f-a6fe-69a9444eedfc',
  //   },
  //   {
  //     col: 'col1',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'e0eba609-6fd8-4608-8982-a0506ff70408',
  //   },
  //   {
  //     col: 'col2',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'e0eba609-6fd8-4608-8982-a0506ff70408',
  //   },
  //   {
  //     col: 'col3',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'e0eba609-6fd8-4608-8982-a0506ff70408',
  //   },
  //   {
  //     col: 'col4',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'e0eba609-6fd8-4608-8982-a0506ff70408',
  //   },
  //   {
  //     col: 'col5',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'e0eba609-6fd8-4608-8982-a0506ff70408',
  //   },
  //   {
  //     col: 'col6',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'e0eba609-6fd8-4608-8982-a0506ff70408',
  //   },
  //   {
  //     col: 'col7',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'e0eba609-6fd8-4608-8982-a0506ff70408',
  //   },
  //   {
  //     col: 'col1',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'f6a358db-4fb6-433e-bf02-a269a9e53aaa',
  //   },
  //   {
  //     col: 'col2',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'f6a358db-4fb6-433e-bf02-a269a9e53aaa',
  //   },
  //   {
  //     col: 'col3',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'f6a358db-4fb6-433e-bf02-a269a9e53aaa',
  //   },
  //   {
  //     col: 'col4',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'f6a358db-4fb6-433e-bf02-a269a9e53aaa',
  //   },
  //   {
  //     col: 'col5',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'f6a358db-4fb6-433e-bf02-a269a9e53aaa',
  //   },
  //   {
  //     col: 'col6',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'f6a358db-4fb6-433e-bf02-a269a9e53aaa',
  //   },
  //   {
  //     col: 'col7',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'f6a358db-4fb6-433e-bf02-a269a9e53aaa',
  //   },
  //   {
  //     col: 'col1',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '77e1f6ed-ff64-49f1-ad6a-00daa9ae482f',
  //   },
  //   {
  //     col: 'col2',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '77e1f6ed-ff64-49f1-ad6a-00daa9ae482f',
  //   },
  //   {
  //     col: 'col3',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '77e1f6ed-ff64-49f1-ad6a-00daa9ae482f',
  //   },
  //   {
  //     col: 'col4',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '77e1f6ed-ff64-49f1-ad6a-00daa9ae482f',
  //   },
  //   {
  //     col: 'col5',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '77e1f6ed-ff64-49f1-ad6a-00daa9ae482f',
  //   },
  //   {
  //     col: 'col6',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '77e1f6ed-ff64-49f1-ad6a-00daa9ae482f',
  //   },
  //   {
  //     col: 'col7',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '77e1f6ed-ff64-49f1-ad6a-00daa9ae482f',
  //   },
  //   {
  //     col: 'col1',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '4bed34ea-ab62-4841-a305-141ea3372729',
  //   },
  //   {
  //     col: 'col2',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '4bed34ea-ab62-4841-a305-141ea3372729',
  //   },
  //   {
  //     col: 'col3',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '4bed34ea-ab62-4841-a305-141ea3372729',
  //   },
  //   {
  //     col: 'col4',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '4bed34ea-ab62-4841-a305-141ea3372729',
  //   },
  //   {
  //     col: 'col5',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '4bed34ea-ab62-4841-a305-141ea3372729',
  //   },
  //   {
  //     col: 'col6',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '4bed34ea-ab62-4841-a305-141ea3372729',
  //   },
  //   {
  //     col: 'col7',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '4bed34ea-ab62-4841-a305-141ea3372729',
  //   },
  //   {
  //     col: 'col1',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'ac01029a-0ac9-435d-a345-6d14b62345f3',
  //   },
  //   {
  //     col: 'col2',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'ac01029a-0ac9-435d-a345-6d14b62345f3',
  //   },
  //   {
  //     col: 'col3',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'ac01029a-0ac9-435d-a345-6d14b62345f3',
  //   },
  //   {
  //     col: 'col4',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'ac01029a-0ac9-435d-a345-6d14b62345f3',
  //   },
  //   {
  //     col: 'col5',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'ac01029a-0ac9-435d-a345-6d14b62345f3',
  //   },
  //   {
  //     col: 'col6',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'ac01029a-0ac9-435d-a345-6d14b62345f3',
  //   },
  //   {
  //     col: 'col7',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: 'ac01029a-0ac9-435d-a345-6d14b62345f3',
  //   },
  //   {
  //     col: 'col1',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1958a9d8-b8db-4f8a-9324-8c5a17d1c00c',
  //   },
  //   {
  //     col: 'col2',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1958a9d8-b8db-4f8a-9324-8c5a17d1c00c',
  //   },
  //   {
  //     col: 'col3',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1958a9d8-b8db-4f8a-9324-8c5a17d1c00c',
  //   },
  //   {
  //     col: 'col4',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1958a9d8-b8db-4f8a-9324-8c5a17d1c00c',
  //   },
  //   {
  //     col: 'col5',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1958a9d8-b8db-4f8a-9324-8c5a17d1c00c',
  //   },
  //   {
  //     col: 'col6',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1958a9d8-b8db-4f8a-9324-8c5a17d1c00c',
  //   },
  //   {
  //     col: 'col7',
  //     exercisePostureId: '3718a5f2-8cdb-4d80-8517-e119068fb8a1',
  //     workoutScheduleId: '1958a9d8-b8db-4f8a-9324-8c5a17d1c00c',
  //   },
  // ]);

  //Get workout schedule
  const result = await WorkoutSchedule.findAll({
    order: ['day', [ExercisePostureWorkoutSchedule, 'col']],
    attributes: ['day'],
    where: { userTrainerWorkoutScheduleFoodScheduleId: '94141d02-7261-4a7f-8672-4e9af9d8ed3d' },
    include: {
      model: ExercisePostureWorkoutSchedule,
      attributes: ['id', 'col'],
      include: {
        model: ExercisePosture,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    },
  });

  // const arrResult1 = result
  //   .map((item) => {
  //     const { day, ExercisePostureWorkoutSchedules } = item;
  //     return {
  //       day: day,
  //       exercises: ExercisePostureWorkoutSchedules.map((item1) => {
  //         const {
  //           col,
  //           ExercisePosture: { name, fontColor, backgroundColor, link, type },
  //         } = item1;
  //         return { col, exerciseName: name, fontColor, backgroundColor, link, type };
  //       }).sort((a, b) => {
  //         if (a.col.slice(3) > b.col.slice(3)) return 1;
  //         return -1;
  //       }),
  //     };
  //   })
  //   .sort((a, b) => {
  //     console.log(b.day.slice(3));
  //     if (a.day.slice(3) > b.day.slice(3)) return 1;
  //     return -1;
  //   });

  // console.log(JSON.stringify(arrResult1, null, 2));

  //Craete Foodschedule
  // const result = await FoodSchedule.bulkCreate([
  //   {
  //     userTrainerWorkoutScheduleFoodScheduleId: '94141d02-7261-4a7f-8672-4e9af9d8ed3d',
  //     day: 'Day1',
  //     breakfast: 'Choose 1 protein menu + 1 carbohydrate menu.',
  //     brunch: 'Choose one good fat SNACK.',
  //     lunch: 'Choose 1 protein menu + 1 carbohydrate menu.',
  //     afternoon: 'Choose SNACK 1 fruit.',
  //     diner: 'Choose 2 protein menu + 1 carbohydrate menu + lots of vegetables.',
  //     lastnight: 'Choose 1 protein menu.',
  //   },
  //   {
  //     userTrainerWorkoutScheduleFoodScheduleId: '94141d02-7261-4a7f-8672-4e9af9d8ed3d',
  //     day: 'Day2',
  //     breakfast: 'Choose 1 protein menu + 1 carbohydrate menu.',
  //     brunch: 'Choose one good fat SNACK.',
  //     lunch: 'Choose 1 protein menu + 1 carbohydrate menu.',
  //     afternoon: 'Choose SNACK 1 fruit.',
  //     diner: 'Choose 2 protein menu + 1 carbohydrate menu + lots of vegetables.',
  //     lastnight: 'Choose 1 protein menu.',
  //   },
  // ]);

  //get FoodSchedule by user and trainer id
  // const result = await FoodSchedule.findAll({
  //   attributes: { exclude: ['createdAt', 'updatedAt', 'userTrainerWorkoutScheduleFoodScheduleId'] },
  //   where: { userTrainerWorkoutScheduleFoodScheduleId: '94141d02-7261-4a7f-8672-4e9af9d8ed3d' },
  // });

  console.log(JSON.stringify(result, null, 2));
  // console.log(uuidv4());
  // console.log(JSON.stringify(genArrayToCreateWorkoutSchedule(3, '2bba6c2a-c90b-462e-9207-f1d3cf07c053'), null, 2));
};
run();
