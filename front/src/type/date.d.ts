type DayPropType = {
  day: number;
  price?: number;
  isHoliday: boolean;
  isFull?: boolean;
  isPeak?: boolean;
  isDisable?: boolean;
  text?: string;
};

type CalendarDataType = {
  [k: string]: DayPropType[];
};
