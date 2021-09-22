const { Sequelize, DataType, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'cc9',
  password: 'root-bomb-cc9',
  database: 'healthy_at_home_test',
  dialect: 'mysql',
});

// // Check Connection
// sequelize
//   .authenticate()
//   .then(() => console.log('DB connected!'))
//   .catch((err) => console.log('unable to connect:', err));

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    role: {
      type: DataTypes.ENUM('ADMIN', 'TRAINER', 'CUSTOMER'),
      allowNull: false,
      defaultValue: 'CUSTOMER',
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickName: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM('MALE', 'FEMALE'),
    },
    image: {
      type: DataTypes.STRING,
    },
    education: {
      type: DataTypes.STRING,
    },
  },
  { tableName: 'users', underscored: true }
);

const CourseService = sequelize.define(
  'CourseService',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageLink1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageLink2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'course_services',
    underscored: true,
  }
);

const UserTrainerWorkoutScheduleFoodSchedule = sequelize.define(
  'UserTrainerWorkoutScheduleFoodSchedule',
  {
    loseWeightBefore: {
      type: DataTypes.ENUM('intermediate-fasting', 'keto-diet', 'mediterranean-diet', 'atkins-diet', 'Paleo'),
    },
    desease: { type: DataTypes.STRING },
    dateStart: { type: DataTypes.DATEONLY, allowNull: false },
    foodAllergic: { type: DataTypes.STRING },
    typeOfFood: {
      type: DataTypes.ENUM('vegan', 'halal', 'plant-base', 'meat-and-poultry', 'fish-and-seafood', 'all-types'),
      allowNull: false,
    },
  },
  { tableName: 'user_trainer_workout_schedule_food_schedule', underscored: true }
);

const WorkoutSchedule = sequelize.define(
  'WorkoutSchedule',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'workout_schedules',
    underscored: true,
  }
);

const ExercisePostureWorkoutSchedule = sequelize.define(
  'ExercisePostureWorkoutSchedule',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    tableName: 'exercise_posture_workout_schedule',
    underscored: true,
  }
);

const ExercisePosture = sequelize.define(
  'ExercisePosture',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fontColor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '#000000',
    },
    backgroundColor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '#FFFFFF',
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('Full Body', 'Core & Abs', 'Chest', 'Arm', 'Butt'),
      allowNull: false,
    },
  },
  {
    tableName: 'exercise_posture',
    underscored: true,
  }
);

// sequelize.sync({ force: true });

module.exports = {
  sequelize,
  User,
  CourseService,
  UserTrainerWorkoutScheduleFoodSchedule,
  WorkoutSchedule,
  ExercisePostureWorkoutSchedule,
  ExercisePosture,
};
