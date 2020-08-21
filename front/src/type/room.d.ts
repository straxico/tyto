type RoomCapacity = {
  normalCapacity: number;
  maxCapacity: number;
  bathroom: number;
  wc: number;
  buildArea: number;
  landArea: number;
  buildNumber: number;
  bedroom: number;
};
type RoomRegion = {
  rentTypeLink: string;
  rentType: string;
  rentTypeTip: string;
  roomTypeLink: string;
  roomType: string;
  roomAreaTypeLink: string;
  roomAreaType: string;
};
type RoomFacility = {
  name: string;
  disabled?: boolean;
  tip?: string;
};
type RoomSafety = {
  name: string;
  disabled: boolean;
};
type RoomTiming = {
  deleveryTime: string;
  minNight: number;
  dischargeTime: string;
  maxNight: string;
};
type RoomType = {
  type: string;
  capacity: number;
  bedroom: number;
  area: number;
};
type RoomInfo = {
  hostAvatar: string;
  hostName: string;
  state: string;
  stateURL: string;
  city: string;
  cityURL: string;
  title: string;
  code: number;
  score: number;
};
