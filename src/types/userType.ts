export type UserType = {
  Name: {
    type: String;
    required: true;
  };
  Address: {
    type: String;
    required: true;
  };
  Email: {
    type: String;
    required: true;
  };
  Password: {
    type: String;
    required: true;
  };
};

export type FoodType = {
  foodName: {
    type: String;
    required: true;
  };
  foodCategory: {
    type: String;
    required: true;
  };
  ingedients: {
    type: String;
    required: true;
  };
  price: {
    type: number;
    required: true;
  };
  sale: {
    type: number;
    required: true;
  };
};
