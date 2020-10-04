type TempShape = {
  val: number;
  min: number;
  max: number;
};

export type WeatherItemShape = {
  id: number;
  date: Date;
  isCloudy: boolean;
  temp: TempShape;
};

export type ServerResponseShape = {
  dt: number;
  dt_txt: string;
  clouds: {
    all: number;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
};
