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
      validate: {
        len: [10, 10],
      },
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
    day: {
      type: DataTypes.DECIMAL(2, 0),
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
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
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
    col: {
      type: DataTypes.STRING,
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
      type: DataTypes.ENUM('Full Body', 'Core & Abs', 'Chest', 'Arm', 'Butt', 'Cardio', 'Rest'),
      allowNull: false,
    },
  },
  {
    tableName: 'exercise_posture',
    underscored: true,
  }
);

const FoodSchedule = sequelize.define(
  'FoodSchedule',
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
    breakfast: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brunch: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lunch: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    afternoon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastnight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'food_schedules', underscored: true }
);

//as ใช้กรณี self Join
// ยังไม่เสร็จเรียนก่อน
User.hasMany(UserTrainerWorkoutScheduleFoodSchedule, {
  as: 'TrainTos',
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
UserTrainerWorkoutScheduleFoodSchedule.belongsTo(User, {
  as: 'ToUser',
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
// ความสัมพันธ์แบบ TransferOut
User.hasMany(UserTrainerWorkoutScheduleFoodSchedule, {
  as: 'TrainFroms',
  foreignKey: {
    name: 'trainerId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
UserTrainerWorkoutScheduleFoodSchedule.belongsTo(User, {
  as: 'FromUser',
  foreignKey: {
    name: 'trainerId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});

// Relation between UserTrainerWorkoutScheduleFoodSchedule and CourseService
CourseService.hasMany(UserTrainerWorkoutScheduleFoodSchedule, {
  foreignKey: {
    name: 'courseServiceId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
UserTrainerWorkoutScheduleFoodSchedule.belongsTo(CourseService, {
  foreignKey: {
    name: 'courseServiceId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});

//Relation between WorkoutSchedule and UserTrainerWorkoutScheduleFoodSchedule
UserTrainerWorkoutScheduleFoodSchedule.hasMany(WorkoutSchedule, {
  foreignKey: {
    name: 'userTrainerWorkoutScheduleFoodScheduleId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
WorkoutSchedule.belongsTo(UserTrainerWorkoutScheduleFoodSchedule, {
  foreignKey: {
    name: 'userTrainerWorkoutScheduleFoodScheduleId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});

//Relation Between exercise_posture_workout_schedule and WorkoutSchedule
WorkoutSchedule.hasMany(ExercisePostureWorkoutSchedule, {
  foreignKey: {
    name: 'workoutScheduleId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
ExercisePostureWorkoutSchedule.belongsTo(WorkoutSchedule, {
  foreignKey: {
    name: 'workoutScheduleId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});

//Relation between ExercisePostureWorkoutSchedule and ExercisePosture
ExercisePosture.hasMany(ExercisePostureWorkoutSchedule, {
  foreignKey: {
    name: 'exercisePostureId',
    allowNull: false,
  },
  onUpdate: 'RESTRICT',
  onDelete: 'RESTRICT',
});
ExercisePostureWorkoutSchedule.belongsTo(ExercisePosture, {
  foreignKey: {
    name: 'exercisePostureId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});

// Relation Between UserTrainerWorkoutScheduleFoodSchedule and Foodschedule
UserTrainerWorkoutScheduleFoodSchedule.hasMany(FoodSchedule, {
  foreignKey: {
    name: 'userTrainerWorkoutScheduleFoodScheduleId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
FoodSchedule.belongsTo(UserTrainerWorkoutScheduleFoodSchedule, {
  foreignKey: {
    name: 'userTrainerWorkoutScheduleFoodScheduleId',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});

// sequelize.sync({ force: false });

module.exports = {
  sequelize,
  User,
  CourseService,
  UserTrainerWorkoutScheduleFoodSchedule,
  WorkoutSchedule,
  ExercisePostureWorkoutSchedule,
  ExercisePosture,
  FoodSchedule,
};
